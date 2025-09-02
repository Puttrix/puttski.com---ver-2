# Product Planning

A lightweight, repeatable workflow to turn ideas into shipped work.

## Workflow

1) Capture ideas → group into Features
2) Write User Stories per Feature (with acceptance criteria)
3) Break each Story into Tasks (1–4 hours each)
4) Prioritize and schedule
5) Track progress (To do → In progress → Review → Done)

## Folder Structure

- `product/templates/` — Markdown templates for features, stories, tasks
- `product/features/` — One file per feature (links to stories)
- `product/stories/` — One file per story (with tasks inside)

## How To Use

1) Duplicate templates
   - Feature: copy `product/templates/FEATURE.md` → `product/features/<feature>.md`
   - Story: copy `product/templates/STORY.md` → `product/stories/<feature>-<story>.md`
   - Task: optional if you want tasks as separate files; otherwise keep them inside the story

2) Write acceptance criteria
   - Use Given/When/Then to make stories testable

3) Create issues (optional)
   - Copy Story and Task sections into your issue tracker (GitHub/Linear/Jira)

4) Review weekly
   - Re‑prioritize, cut scope if needed, keep tasks small

## Conventions

- Estimates: use 1–4h per task; stories should fit in 1–3 days
- Labels: `feature/<name>`, `story`, `task`, `p1`..`p3`
- Definition of Done: code merged, tests passing, acceptance criteria met, docs updated

## Example Included

See `product/features/blog.md` and linked stories under `product/stories/` for a concrete example you can mimic.
