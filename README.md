# SnitchUI

<p align="center">
  <img src="https://github.com/StromSpecter/snitchui/raw/main/src/assets/snitchui.jpeg" alt="SnitchUI" width="600" />
</p>

<p align="center">
  Build beautiful UI without the bloat.<br />
  Copy-paste components built on <strong>Radix UI</strong> + <strong>Tailwind CSS v4</strong>.<br />
  You own every line of code — install nothing, commit everything, customize anything.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/snitchui"><img src="https://img.shields.io/npm/v/snitchui.svg" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/snitchui"><img src="https://img.shields.io/npm/dw/snitchui.svg" alt="npm downloads"></a>
  <a href="https://www.npmjs.com/package/snitchui"><img src="https://img.shields.io/npm/l/snitchui.svg" alt="license"></a>
</p>

<p align="center">
  🌐 <strong>Live Website:</strong><br />
  <a href="https://snitchui.vercel.app" target="_blank">
    https://snitchui.vercel.app
  </a>
</p>

---

## Why SnitchUI?

Most UI libraries force you into their ecosystem — install a package, ship hundreds of kB of dependencies, fight with customization. SnitchUI flips the model: **you own the code**.

Every component is a copy-paste away, fully editable, and built on battle-tested Radix UI primitives. No bloated dependencies, no version lock-in, no restrictions.

## Features

- **Copy-Paste, Not npm Install** — Full source ownership. Copy component code into your project and customize freely.
- **Tailwind CSS v4 Native** — Every color, spacing, and radius maps to your existing design system. Zero framework lock-in.
- **Radix UI Under the Hood** — Keyboard navigation, ARIA attributes, and screen-reader support work out of the box.
- **Tree-Shakable by Default** — Import only what you use. No global CSS, no runtime overhead.
- **Dark Mode Included** — Every component ships with light and dark variants. Toggle your HTML class and SnitchUI adapts automatically.
- **React 19 Ready** — Built with React 19 from the ground up.

## How It Works

```bash
# 1. Setup your project (React + Vite + Tailwind CSS v4)
# 2. Install SnitchUI
npm install snitchui

# 3. Add components via CLI
npx snitchui@latest add button
npx snitchui@latest add input
npx snitchui@latest add select

# 4. Scaffold page templates
npx snitchui@latest add-template signin
npx snitchui@latest add-template signup
```

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
| `Card` | Container with header, title, description, content, and footer |
| `Badge` | Small status indicator with multiple color variants |
| `Dialog` | Modal overlay with controlled/uncontrolled state |
| `Dropdown` | Menu with items, separators, labels, and keyboard support |
| `Tabs` | Tabbed content sections with controlled state |
| `Accordion` | Collapsible panels with single/multiple mode |
| `Avatar` | User avatar with image fallback and delay |
| `Alert` | Contextual message with icon support and variants |

## Templates

Pre-built page templates scaffolded into `src/pages/`. CLI auto-updates routes and sidebar navigation.

| Template | Description |
|----------|-------------|
| `Signin` | Centered card form with email/password fields and sign-up link |
| `Signup` | Centered card form with name/email/password and sign-in link |

```bash
npx snitchui@latest add-template signin
npx snitchui@latest add-template signup
```

Every template includes a live preview and the full source code with a copy button.

## Usage

```jsx
import { Button } from './components/ui/button'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'

export function App() {
  return (
    <div className="space-y-4">
      <Button>Click me</Button>
      <Button variant="outline">Cancel</Button>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
    </div>
  )
}
```

### CLI Options

```bash
# Add components
npx snitchui@latest add <component...>

# Add page templates (auto-updates routes + sidebar)
npx snitchui@latest add-template <template...>

# Options
--force          Overwrite existing files
--skip-install   Skip npm install of dependencies
```

## Design Tokens

SnitchUI uses CSS custom properties for theming, supporting light and dark modes out of the box. Components automatically adapt based on the `dark` class on `<html>`.

## Philosophy

Build once. Reuse everywhere. Minimal API. Maximum flexibility. Stop fighting with heavy dependencies — start building with components you actually own.

## License

MIT
