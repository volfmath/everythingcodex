# Install Guide

## Shell install

```bash
./install.sh /path/to/project core
```

Profiles:

- `minimal`
- `core`
- `full`

## Node install

```bash
node scripts/ecodex.js install /path/to/project --profile core
```

## What gets copied

Everything is copied into:

```text
<target>/.codex/everything-codex/
```

The installer does not overwrite the target repo root `AGENTS.md`.

Instead, merge `AGENTS.snippet.md` manually into the target root if you want the repo to reference this kit.
