# Everything Codex — Agent Instructions

This repository is a Codex-first workflow kit.

## Working style

1. Plan before major edits.
2. Prefer small, testable changes.
3. Fix root causes, not symptoms.
4. Keep files focused and readable.
5. Validate changed behavior before finishing.

## Default workflow

- Complex task -> use the planner pattern
- New behavior -> write or update tests first when practical
- Risky change -> run a review pass before finalizing
- Confusing repo -> use the repo-onboarding skill first

## File conventions

- `agents/` contains role briefs for delegated work
- `skills/` contains reusable operating procedures
- `rules/` contains always-on coding constraints
- `commands/` contains legacy prompt entrypoints
- `hooks/` contains preflight and completion checklists

## Output expectations

- Be concise
- Use direct language
- Include validation notes
- Call out risks when something is unverified

## Safety

- Never hardcode secrets
- Validate external input
- Avoid destructive commands unless explicitly requested
- Do not rewrite unrelated files
