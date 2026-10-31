@AGENTS.md

# Working preferences

## Work continuously, phase by phase

When a task has several phases or steps, work through them one after another without asking
for confirmation in between. You have standing permission to open and merge your own PRs.

For each phase:

1. Pull the latest default branch and create a new branch from it.
2. **Fold in leftovers first.** Before new work, collect everything left over from the previous
   phase and include it in this one:
   - follow-ups and TODOs
   - skipped or partial steps
   - unresolved review comments
   - known issues
   - items under "Left for next phase" in the previous PR

   Nothing gets dropped silently.
3. Do the phase's work.
4. Run every check available (build, tests, lint). If something can't be verified in this
   environment, say so plainly in the PR. Never claim it was verified.
5. Open a PR with these sections:
   - **Done:** what this phase delivered
   - **Folded in:** leftovers from earlier phases that this PR closes
   - **Left for next phase:** anything unfinished, deferred or discovered along the way
6. Squash-merge once CI checks pass, pull the default branch, and start the next phase.

## When to stop and ask

- Checks keep failing and you can't fix them.
- A change is destructive or irreversible (deleting data, rewriting shared history,
  force-pushing to the default branch).
- A product decision isn't settled by the task.

When every phase is done and nothing is left over, stop and summarize: what was merged, plus
any leftovers that need my input.
