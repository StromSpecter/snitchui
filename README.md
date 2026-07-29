# SnitchUI

<p align="center">
  A modern, accessible React UI component library built with Tailwind CSS and shadcn/ui inspired design.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/snitchui"><img src="https://img.shields.io/npm/v/snitchui.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/snitchui"><img src="https://img.shields.io/npm/dw/snitchui.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/snitchui"><img src="https://img.shields.io/npm/l/snitchui.svg" alt="license"></a>
</p>

## Overview

SnitchUI provides copy-paste, reusable UI components for React + Tailwind CSS projects. Inspired by shadcn/ui and built with accessibility and composition-first APIs in mind.

## Features

- **Copy-paste components** — drop into your project and customize
- **Accessibility** — built on Radix UI primitives with proper ARIA support
- **Dark mode** — first-class dark mode via CSS custom properties
- **TypeScript ready** — works seamlessly with TypeScript
- **CLI powered** — scaffold any component with `npx snitchui add`
- **Tree-shakable** — import only what you use

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Clickable element with variants, sizes, and loading states |
| `Label` | Accessible label element bound to form inputs |
| `Input` | Form input field with focus and disabled states |
| `Select` | Dropdown select with grouped items and labels |
| `Checkbox` | Toggle between checked/unchecked with accessibility support |
| `Combobox` | Searchable multi-select dropdown with chip input |
| `DatePicker` | Calendar-based date picker |
| `RadioButton` | Radio group for single selection from multiple options |
| `Switch` | Toggle switch for binary on/off states |
| `Textarea` | Multi-line text input with focus and disabled states |
| `TimePicker` | Time picker for hours, minutes, and seconds |

## Installation

```bash
npm install snitchui
```

## Usage

```jsx
import { Button } from 'snitchui'
import { Label } from 'snitchui'
import { Input } from 'snitchui'
import { Select } from 'snitchui'

export function App() {
  return (
    <div className="space-y-4">
      <Button variant="default" size="md">
        Click me
      </Button>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Choose an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Options</SelectLabel>
            <SelectItem value="a">Option A</SelectItem>
            <SelectItem value="b">Option B</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
```

## CLI

Scaffold a component into your project:

```bash
npx snitchui add button
npx snitchui add label
npx snitchui add input
npx snitchui add select
npx snitchui add checkbox
npx snitchui add combobox
npx snitchui add datepicker
npx snitchui add radiobutton
npx snitchui add switch
npx snitchui add textarea
npx snitchui add timepicker
```

Options:
- `--force` — overwrite existing files
- `--skip-install` — skip npm install of dependencies

## Design Tokens

SnitchUI uses CSS custom properties for theming, supporting light and dark modes out of the box. Components automatically adapt based on the `dark` class on `<html>`.

## Philosophy

Build once. Reuse everywhere. Minimal API. Maximum flexibility.

## License

MIT
