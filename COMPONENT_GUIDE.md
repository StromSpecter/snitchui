# Component Guide

## Naming

PascalCase

```
Button

Dialog

Input

Card

Badge
```

---

# Folder Structure

```
Button/

    Button.jsx

    Button.demo.jsx

    index.js
```

---

# Component API

Good

```jsx
<Button
    variant="outline"
    size="lg"
/>
```

Bad

```jsx
<Button
    outlined
    rounded
    large
/>
```

---

# Required Variants

Every interactive component should support

```
default

secondary

outline

ghost

destructive
```

when applicable.

---

# Required Sizes

```
sm

md

lg
```

---

# States

Support when applicable

Default

Hover

Active

Focus

Disabled

Loading

Error

Success

---

# className

Always expose className.

Never hide styling from developers.

---

# Forward Ref

Use forwardRef whenever appropriate.

---

# Props

Keep props minimal.

Prefer composition.

---

# Accessibility

Buttons

type

aria-label

disabled

Inputs

id

label

error

aria-describedby

Dialogs

ESC support

Focus trap

Keyboard support

---

# Documentation

Every component should include

Usage

Props

Variants

Sizes

Accessibility notes

Examples

---

# Demo

Every component demo should show

All variants

All sizes

Disabled

Loading

Icons

Dark mode

Responsive