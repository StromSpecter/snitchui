# Design System

## Philosophy

The design system should feel modern, minimal, clean and timeless.

Inspired by:

- shadcn/ui
- Radix UI
- Linear
- Vercel
- Tailwind UI

---

# Colors

Never hardcode colors.

Always use semantic tokens.

Example

```text
primary
secondary
accent
muted
destructive
success
warning
border
card
background
foreground
```

---

# Radius

```
sm
md
lg
xl
2xl
full
```

---

# Spacing

Use Tailwind spacing only.

Never invent arbitrary spacing unless necessary.

Preferred

```
1
2
3
4
6
8
10
12
16
20
24
```

---

# Typography

Font sizes

```
xs
sm
base
lg
xl
2xl
3xl
4xl
```

Weights

```
normal
medium
semibold
bold
```

---

# Shadow

```
sm
md
lg
xl
2xl
```

Avoid excessive shadows.

---

# Animation

Use subtle animations.

Preferred duration

```
150ms
200ms
300ms
```

Avoid animations longer than 400ms.

---

# Icons

Always use Lucide React.

Keep icon size consistent.

16

18

20

24

---

# Responsive

Mobile First.

Breakpoints

```
sm

md

lg

xl

2xl
```

---

# Dark Mode

Every component must support

light

dark

without changing its API.

---

# Focus Ring

Every interactive component must show

visible

consistent

accessible

focus state.