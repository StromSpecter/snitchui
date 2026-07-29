#!/usr/bin/env node
const validTypes = [
  "feat",
  "fix",
  "docs",
  "refactor",
  "style",
  "chore",
  "test",
  "ci",
  "release",
  "hotfix",
];

const branch = process.argv[2] || process.env.GIT_BRANCH || "";

const pattern = new RegExp(
  "^(" + validTypes.join("|") + ")/[a-z0-9][a-z0-9-]*$"
);

if (branch === "main" || branch === "develop") {
  process.exit(0);
}

if (pattern.test(branch)) {
  console.log(`Branch name "${branch}" is valid.`);
  process.exit(0);
}

console.error(`Invalid branch name: "${branch}".`);
console.error(`Expected format: <type>/<description>`);
console.error(`Allowed types: ${validTypes.join(", ")}`);
process.exit(1);
