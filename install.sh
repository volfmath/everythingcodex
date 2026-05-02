#!/bin/sh
set -eu

ROOT_DIR=$(CDPATH= cd -- "$(dirname "$0")" && pwd)

TARGET_DIR=${1:-}
PROFILE=${2:-core}

if [ -z "$TARGET_DIR" ]; then
  echo "Usage: ./install.sh /path/to/project [minimal|core|full]" >&2
  exit 1
fi

case "$PROFILE" in
  minimal|core|full) ;;
  *)
    echo "Unknown profile: $PROFILE" >&2
    exit 1
    ;;
esac

DEST_ROOT="$TARGET_DIR/.codex/everything-codex"

copy_rel() {
  rel="$1"
  src="$ROOT_DIR/$rel"
  dst="$DEST_ROOT/$rel"
  mkdir -p "$(dirname "$dst")"
  cp "$src" "$dst"
  echo "copied $rel"
}

copy_profile_minimal() {
  copy_rel "AGENTS.md"
  copy_rel "AGENTS.snippet.md"
  copy_rel ".codex/README.md"
  copy_rel "rules/common.md"
  copy_rel "rules/typescript.md"
  copy_rel "rules/python.md"
}

copy_profile_core() {
  copy_profile_minimal
  copy_rel "agents/planner.md"
  copy_rel "agents/reviewer.md"
  copy_rel "agents/debugger.md"
  copy_rel "agents/architect.md"
  copy_rel "agents/test-writer.md"
  copy_rel "skills/repo-onboarding/SKILL.md"
  copy_rel "skills/tdd-workflow/SKILL.md"
  copy_rel "skills/security-review/SKILL.md"
  copy_rel "skills/handoff-checklist/SKILL.md"
}

copy_profile_full() {
  copy_profile_core
  copy_rel "commands/plan.md"
  copy_rel "commands/review.md"
  copy_rel "hooks/preflight-checklist.md"
}

mkdir -p "$DEST_ROOT"

case "$PROFILE" in
  minimal) copy_profile_minimal ;;
  core) copy_profile_core ;;
  full) copy_profile_full ;;
esac

echo
echo "Installed profile '$PROFILE' into:"
echo "  $DEST_ROOT"
echo
echo "Next:"
echo "  merge $DEST_ROOT/AGENTS.snippet.md into the target repo root AGENTS.md if needed"
