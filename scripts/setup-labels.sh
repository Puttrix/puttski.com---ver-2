#!/usr/bin/env bash
set -euo pipefail

# Creates/updates recommended labels for this repo.
# Usage:
#   - Using gh CLI (preferred): ./scripts/setup-labels.sh
#   - Using API (fallback): REPO="owner/name" GITHUB_TOKEN=xxxxx ./scripts/setup-labels.sh

labels=()

# name|color|description
labels+=("feature|1D76DB|New user-facing capability")
labels+=("story|0E8A16|User story with acceptance criteria")
labels+=("task|FBCA04|Small unit of work (1–4h)")
labels+=("bug|D73A4A|Something is broken")
labels+=("chore|8D9096|Maintenance or tooling change")
labels+=("blocked|5319E7|Blocked by dependency or decision")
labels+=("p1|B60205|Highest priority")
labels+=("p2|D93F0B|Medium priority")
labels+=("p3|F9D0C4|Lower priority")

has_gh() {
  command -v gh >/dev/null 2>&1
}

ensure_label_gh() {
  local name="$1" color="$2" desc="$3"
  if gh label view "$name" >/dev/null 2>&1; then
    gh label edit "$name" --color "$color" --description "$desc" >/dev/null
    echo "Updated label: $name"
  else
    gh label create "$name" --color "$color" --description "$desc" >/dev/null
    echo "Created label: $name"
  fi
}

ensure_label_api() {
  : "${REPO:?Set REPO=owner/name}"
  : "${GITHUB_TOKEN:?Set GITHUB_TOKEN=<token>}"
  local name="$1" color="$2" desc="$3"
  local api="https://api.github.com/repos/${REPO}/labels/${name}"
  # Check if exists
  if curl -fsS -H "Authorization: Bearer ${GITHUB_TOKEN}" "$api" >/dev/null; then
    curl -fsS -X PATCH "$api" \
      -H "Authorization: Bearer ${GITHUB_TOKEN}" \
      -H "Accept: application/vnd.github+json" \
      -d "$(jq -nc --arg n "$name" --arg c "$color" --arg d "$desc" '{new_name:$n,color:$c,description:$d}')" >/dev/null
    echo "Updated label: $name"
  else
    curl -fsS -X POST "https://api.github.com/repos/${REPO}/labels" \
      -H "Authorization: Bearer ${GITHUB_TOKEN}" \
      -H "Accept: application/vnd.github+json" \
      -d "$(jq -nc --arg n "$name" --arg c "$color" --arg d "$desc" '{name:$n,color:$c,description:$d}')" >/dev/null
    echo "Created label: $name"
  fi
}

main() {
  if has_gh; then
    echo "Using gh CLI to ensure labels..."
    for item in "${labels[@]}"; do
      IFS='|' read -r name color desc <<<"$item"
      ensure_label_gh "$name" "$color" "$desc"
    done
  else
    echo "gh CLI not found. Falling back to GitHub REST API."
    echo "Requires env vars: REPO=owner/name and GITHUB_TOKEN. Also requires jq."
    for item in "${labels[@]}"; do
      IFS='|' read -r name color desc <<<"$item"
      ensure_label_api "$name" "$color" "$desc"
    done
  fi
  echo "Done."
}

main "$@"

