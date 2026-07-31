#!/usr/bin/env bash
set -euo pipefail

LEVEL="patch"

if git log --oneline -20 | grep -i "feat" >/dev/null; then
  LEVEL="minor"
fi

if git log --oneline -20 | grep "BREAKING CHANGE" >/dev/null; then
  LEVEL="major"
fi

echo "Bumping $LEVEL version..."
npm version "$LEVEL" -m "chore(release): bump version %s"
git push origin main --tags