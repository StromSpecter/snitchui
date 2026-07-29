# AI Agent Guide

## Project Mission

This repository is a modern UI Component Library inspired by shadcn/ui.

The goal is NOT to build an application.

The goal is to build reusable production-ready UI components.

Every decision should prioritize:

- Reusability
- Accessibility
- Performance
- Simplicity
- Maintainability
- Consistency

---

# Tech Stack

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router (Demo Only)
- Lucide React
- clsx
- tailwind-merge

---

# AI Workflow

Before writing code, always follow these phases.

## Phase 1 — Understand

Understand the request.

Identify:

- Existing components
- Existing utilities
- Existing hooks

Never duplicate code.

---

## Phase 2 — Plan

Explain briefly:

- What will be created
- Files affected
- Existing reusable code

---

## Phase 3 — Implement

Implementation must:

- follow existing patterns
- reuse utilities
- reuse components
- avoid unnecessary dependencies

---

## Phase 4 — Validate

Before finishing:

✓ Responsive

✓ Accessible

✓ No lint errors

✓ No duplicated logic

✓ Production ready

---

# Coding Principles

Always prefer

Simple > Clever

Readable > Short

Maintainable > Complex

Reusable > One-off

---

# Component Philosophy

Every component should be

- composable
- customizable
- accessible
- tree-shakable

Never hardcode business logic.

---

# Folder Rules

Never create random folders.

Always follow project structure.

---

# Component Rules

Components should stay below ~250 lines whenever possible.

Split into smaller pieces if necessary.

---

# Styling

Always use Tailwind CSS.

Never use

- inline styles
- CSS modules
- styled-components

unless explicitly requested.

---

# State

Local state → useState

Shared state → Context

Avoid unnecessary Context.

---

# API

Keep props minimal.

Prefer

<Button variant="outline" />

instead of

<Button outlined />

---

# Performance

Use

React.memo

useMemo

useCallback

only when they provide measurable benefits.

---

# Accessibility

Every interactive component must support

- keyboard navigation
- focus ring
- screen reader labels
- ARIA

---

# Git Commit

Use Conventional Commits.

Examples

feat(button)

fix(dialog)

docs(readme)

refactor(input)

style(card)

---

# Git Branch

Use conventional branch naming.

Format

[type]/<description>

Allowed types

feat — New feature

fix — Bug fix

docs — Documentation

refactor — Code restructuring

style — Styling only

chore — Maintenance, build, config

test — Test addition or update

ci — CI/CD changes

release — Release preparation

hotfix — Emergency fix

Rules

Lowercase only.

Hyphen-separated, no spaces.

Branch from develop for features and fixes.

Merge to main via Pull Request.

Examples

feat/label-component

fix/defer-query-effect

docs/README-update

---

# Versioning

Use Semantic Versioning (SemVer) with Conventional Commits.

Format

`major.minor.patch` (contoh: `1.0.1`)

Bump rules

Conventional commit type menentukan bump:

- `feat(...)` → minor bump (1.0.0 → 1.1.0)
- `fix(...)` → patch bump (1.0.0 → 1.0.1)
- `BREAKING CHANGE` di body commit → major bump (1.0.0 → 2.0.0)

Release process

1. Bump versi di `package.json`
2. Commit dengan `chore(release): bump version X.Y.Z`
3. Push tag ke `main`
4. Vercel auto-deploy ke production

Commands

Bump manually

```
npm version patch
npm version minor
npm version major
```

---

# Definition of Done

A task is complete only if

- Code is clean
- API is consistent
- Component is reusable
- Documentation updated
- Demo updated