# Everything Codex

[中文说明](./README.zh-CN.md)

`everything-codex` is a Codex-native starter kit inspired by large agent-harness repos, but intentionally smaller and easier to adapt.

It gives you:

- a root `AGENTS.md` tuned for Codex
- reusable `agents/`, `skills/`, `rules/`, and `commands/`
- a tiny CLI for catalog and install planning
- a non-destructive install flow for existing repos

## Why this exists

Big harness repos are powerful, but they are often broad, opinionated, and multi-platform.

This project focuses on one thing:

**making Codex projects easier to bootstrap with a clean workflow surface.**

## Structure

```text
everything-codex/
  AGENTS.md
  AGENTS.snippet.md
  agents/
  commands/
  hooks/
  manifests/
  rules/
  scripts/
  skills/
  .codex/
```

## Quick start

List the catalog:

```bash
node scripts/ecodex.js list
```

Preview an install into another repo:

```bash
node scripts/ecodex.js install /path/to/project --profile core
```

If Node.js is not available, use the shell installer:

```bash
./install.sh /path/to/project core
```

Detailed install guide: `docs/INSTALL.md`

## Profiles

- `minimal`: docs + rules + AGENTS snippet
- `core`: minimal + starter agents + starter skills
- `full`: core + commands + hooks

## Included starter surface

- Codex root instructions
- install-time AGENTS snippet
- planner / reviewer / debugger / architect / test-writer agents
- repo onboarding / TDD / security review / handoff checklist skills
- common TypeScript and Python rules
- shell installer for non-Node environments

## Design goals

- Codex-first
- non-destructive installs
- small, readable surface area
- easy to fork and customize

## Current status

This is a scaffold, not a giant kitchen sink.

Start here, then grow the parts you actually use.
