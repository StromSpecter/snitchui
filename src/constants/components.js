export const BUTTON_SOURCE = `import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        sm: 'h-8 rounded-md px-3 text-xs',
        md: 'h-9 px-4 py-2',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

const Button = forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }`

export const UTILS_SOURCE = `import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}`

export const components = [
  {
    id: 'button',
    name: 'Button',
    path: '/docs/button',
    description: 'A clickable UI element that triggers an action or event.',
    demo: 'Button',
    installCmd: 'npx snitchui@latest add button',
    deps: [
      { name: 'Button', file: 'components/ui/button.jsx', source: 'BUTTON_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'variant', type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"default"', description: 'Visual style of the button' },
      { prop: 'size', type: '"sm" | "md" | "lg" | "icon"', default: '"md"', description: 'Size of the button' },
      { prop: 'asChild', type: 'boolean', default: 'false', description: 'Merge with child element' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
    ],
  },
  { id: 'input', name: 'Input', path: '/docs/input', comingSoon: true, description: 'A form input field.' },
  { id: 'card', name: 'Card', path: '/docs/card', comingSoon: true, description: 'A container for content.' },
  { id: 'badge', name: 'Badge', path: '/docs/badge', comingSoon: true, description: 'A small status indicator.' },
  { id: 'dialog', name: 'Dialog', path: '/docs/dialog', comingSoon: true, description: 'A modal overlay.' },
  { id: 'dropdown', name: 'Dropdown', path: '/docs/dropdown', comingSoon: true, description: 'A dropdown menu.' },
  { id: 'tabs', name: 'Tabs', path: '/docs/tabs', comingSoon: true, description: 'Tabbed content sections.' },
  { id: 'accordion', name: 'Accordion', path: '/docs/accordion', comingSoon: true, description: 'Collapsible content panels.' },
  { id: 'avatar', name: 'Avatar', path: '/docs/avatar', comingSoon: true, description: 'User avatar image.' },
  { id: 'alert', name: 'Alert', path: '/docs/alert', comingSoon: true, description: 'A contextual alert message.' },
]

const sourceMap = { BUTTON_SOURCE, UTILS_SOURCE }

export function getComponent(id) {
  return components.find((c) => c.id === id)
}

export function resolveDeps(deps) {
  return deps.map((d) => ({ ...d, source: sourceMap[d.source] }))
}
