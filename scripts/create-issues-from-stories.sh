#!/usr/bin/env bash
set -euo pipefail

# Create GitHub issues from product/stories/*.md and optionally add to a Projects (v2) board.
# Requirements: gh CLI authenticated (gh auth status)
# Optional: set PROJECT_NUMBER and OWNER (user or org) to auto-add items to a project board.
#   export OWNER="<your-gh-username-or-org>"
#   export PROJECT_NUMBER=1

STORIES_DIR="product/stories"
LABELS="story"

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI not found. Install from https://cli.github.com/ and run 'gh auth login'" >&2
  exit 1
fi

add_to_project() {
  local issue_url="$1"
  if [[ -z "${OWNER:-}" || -z "${PROJECT_NUMBER:-}" ]]; then
    return 0
  fi
  # Get the project ID via GraphQL
  local project_id
  project_id=$(gh api graphql -f query='query($owner:String!, $number:Int!){ organization(login:$owner){ projectV2(number:$number){ id } } user(login:$owner){ projectV2(number:$number){ id } } }' -f owner="$OWNER" -F number="$PROJECT_NUMBER" --jq '.data.organization.projectV2.id // .data.user.projectV2.id')
  if [[ -z "$project_id" ]]; then
    echo "Could not resolve project id for OWNER=$OWNER PROJECT_NUMBER=$PROJECT_NUMBER" >&2
    return 0
  fi
  # Get issue node id
  local issue_id
  issue_id=$(gh api graphql -f query='query($url:URI!){ resource(url:$url){ ... on Issue { id } } }' -f url="$issue_url" --jq '.data.resource.id')
  if [[ -z "$issue_id" ]]; then
    echo "Could not resolve issue id for $issue_url" >&2
    return 0
  fi
  # Add the issue to the project
  gh api graphql -f query='mutation($project:ID!,$content:ID!){ addProjectV2ItemById(input:{projectId:$project, contentId:$content}){ item { id } } }' -F project="$project_id" -F content="$issue_id" >/dev/null
  echo "Added to project #$PROJECT_NUMBER"
}

create_issue() {
  local file="$1"
  local title
  title=$(sed -n '1s/^#\s*//p' "$file")
  local body
  body=$(sed '1d' "$file")

  # Detect priority label from the file (e.g., "- Priority: P1")
  local prio
  prio=$(grep -m1 -E '^-\s*Priority:\s*P[123]' "$file" | sed -E 's/.*(P[123]).*/\L\1/')
  local use_labels="$LABELS"
  if [[ -n "$prio" ]]; then
    use_labels+=" , $prio"
  fi

  echo "Creating: $title"
  local url
  url=$(gh issue create --title "$title" --body "$body" --label "$use_labels" --json url --jq .url)
  echo " → $url"
  add_to_project "$url"
}

main() {
  shopt -s nullglob
  local files=("$STORIES_DIR"/*.md)
  if (( ${#files[@]} == 0 )); then
    echo "No story files found in $STORIES_DIR"
    exit 0
  fi
  for f in "${files[@]}"; do
    create_issue "$f"
  done
}

main "$@"

