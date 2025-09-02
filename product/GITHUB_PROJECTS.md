# GitHub Projects Setup (Board Guide)

Use GitHub Projects (v2) to plan and track features, stories, and tasks.

## 1) Create the Project

- In GitHub, go to Projects → New Project → Board
- Name: puttski.com — Product
- Visibility: Private (or Public if you prefer)

## 2) Add Fields

Add these custom fields for prioritization and tracking:
- Status (single select): Todo, In progress, Review, Blocked, Done
- Priority (single select): P1, P2, P3
- Size (single select): XS, S, M, L
- Type (single select): Feature, Story, Task, Bug, Chore
- Target (iteration): enable Iterations (weekly or bi-weekly)

## 3) Saved Views

- Backlog: filter `Status: Todo` sort by `Priority`
- This Week: filter `Iteration: @current` and `Status != Done`
- In Progress: filter `Status: In progress`
- Review: filter `Status: Review`
- Done: filter `Status: Done` group by `Type`

## 4) Labels (Repository)

Create labels to mirror Types and priorities for quick filtering:
- `feature`, `story`, `task`, `bug`, `chore`
- `p1`, `p2`, `p3`

## 5) Templates → Issues

- Use the templates under `.github/ISSUE_TEMPLATE/`:
  - Feature Request → label `feature`
  - User Story → label `story`
  - Task → label `task`
  - Bug Report → label `bug`
- Keep tasks small (1–4h). Link tasks to their parent story in the description.

## 6) Board Workflow

- Triage new issues → set `Type`, `Priority`, and `Size`
- Add to Project and an `Iteration` if planned
- Move cards across: Todo → In progress → Review → Done
- Link PRs; when PRs close, move the card to `Done`

## 7) Milestones / Iterations

- Prefer Iterations (Projects field) for week-based planning
- Optionally use GitHub Milestones for larger releases and track burn-down

## 8) Tips

- Keep stories small (1–3 days) and testable via acceptance criteria
- Use checklists in stories to track tasks; split if >8 tasks
- Review weekly: close Done, move blocked, re-prioritize backlog

## 9) Optional Automations

- Auto-assign `Type` from labels using Project workflows
- Auto-move cards on PR open/merged/closed (Projects → Workflows)
- Use CODEOWNERS to auto-request reviews

## 10) Getting Started

1) Create the Project and fields
2) Add saved views
3) Turn a few `product/` examples into issues using the templates
4) Add them to the Project and start pulling into the current iteration

