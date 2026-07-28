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

export const LABEL_SOURCE = `import { forwardRef } from 'react'
import { Label as RadixLabel } from '@radix-ui/react-label'
import { cn } from '../../lib/utils'

const Label = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadixLabel
      className={cn('text-sm font-medium text-foreground', className)}
      ref={ref}
      {...props}
    />
  )
})
Label.displayName = 'Label'

export { Label }`

export const INPUT_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Input = forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    )
  )
})
Input.displayName = 'Input'

export { Input }`

export const SELECT_SOURCE = `import * as SelectPrimitive from '@radix-ui/react-select'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Select = SelectPrimitive.Root
const SelectGroup = SelectPrimitive.Group
const SelectValue = SelectPrimitive.Value

const SelectTrigger = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Trigger
        className={cn(
          'flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
            <path d="m6 9 6 6 6-6" />
          </svg>
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
    )
  }
)
SelectTrigger.displayName = 'SelectTrigger'

const SelectContent = forwardRef(({ className, children, position = 'popper', ...props }, ref) => {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          'relative z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background text-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className
        )}
        position={position}
        ref={ref}
        {...props}
      >
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
})
SelectContent.displayName = 'SelectContent'

const SelectItem = forwardRef(
  ({ className, children, ...props }, ref) => {
    return (
      <SelectPrimitive.Item
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
          <SelectPrimitive.ItemIndicator>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </SelectPrimitive.ItemIndicator>
        </span>
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      </SelectPrimitive.Item>
    )
  }
)
SelectItem.displayName = 'SelectItem'

const SelectLabel = forwardRef(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Label
      className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
      ref={ref}
      {...props}
    />
  )
})
SelectLabel.displayName = 'SelectLabel'

const SelectSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <SelectPrimitive.Separator
      className={cn('-mx-1 my-1 h-px bg-muted', className)}
      ref={ref}
      {...props}
    />
  )
})
SelectSeparator.displayName = 'SelectSeparator'

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectSeparator,
}`

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
    demo: 'ButtonDemo',
    installCmd: 'npx snitchui@latest add button',
    deps: [
      { name: 'Button', file: 'components/ui/button/button.jsx', source: 'BUTTON_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'variant', type: '"default" | "secondary" | "outline" | "ghost" | "destructive" | "link"', default: '"default"', description: 'Visual style of the button' },
      { prop: 'size', type: '"sm" | "md" | "lg" | "icon"', default: '"md"', description: 'Size of the button' },
      { prop: 'asChild', type: 'boolean', default: 'false', description: 'Merge with child element' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the button' },
    ],
  },
  {
    id: 'label',
    name: 'Label',
    path: '/docs/label',
    description: 'A label element for form inputs, providing accessible text associations.',
    demo: 'LabelDemo',
    installCmd: 'npx snitchui@latest add label',
    deps: [
      { name: 'Label', file: 'components/ui/label/label.jsx', source: 'LABEL_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'htmlFor', type: 'string', default: '-', description: 'The id of the form element this label is associated with' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'input',
    name: 'Input',
    path: '/docs/input',
    description: 'A form input field with focus, disabled, and placeholder states.',
    demo: 'InputDemo',
    installCmd: 'npx snitchui@latest add input',
    deps: [
      { name: 'Input', file: 'components/ui/input/input.jsx', source: 'INPUT_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'type', type: 'string', default: '"text"', description: 'The input type (text, email, password, etc.)' },
      { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'select',
    name: 'Select',
    path: '/docs/select',
    description: 'A dropdown select component with grouped items, labels, and disabled states.',
    demo: 'SelectDemo',
    installCmd: 'npx snitchui@latest add select',
    deps: [
      { name: 'Select', file: 'components/ui/select/select.jsx', source: 'SELECT_SOURCE' },
      { name: '@radix-ui/react-select', file: 'node_modules/@radix-ui/react-select', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'value', type: 'string', default: '-', description: 'The controlled selected value' },
      { prop: 'onValueChange', type: '(value: string) => void', default: '-', description: 'Callback when the selected value changes' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the select' },
      { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text shown when no value is selected' },
    ],
  },
  { id: 'card', name: 'Card', path: '/docs/card', comingSoon: true, description: 'A container for content.' },
  { id: 'badge', name: 'Badge', path: '/docs/badge', comingSoon: true, description: 'A small status indicator.' },
  { id: 'dialog', name: 'Dialog', path: '/docs/dialog', comingSoon: true, description: 'A modal overlay.' },
  { id: 'dropdown', name: 'Dropdown', path: '/docs/dropdown', comingSoon: true, description: 'A dropdown menu.' },
  { id: 'tabs', name: 'Tabs', path: '/docs/tabs', comingSoon: true, description: 'Tabbed content sections.' },
  { id: 'accordion', name: 'Accordion', path: '/docs/accordion', comingSoon: true, description: 'Collapsible content panels.' },
  { id: 'avatar', name: 'Avatar', path: '/docs/avatar', comingSoon: true, description: 'User avatar image.' },
  { id: 'alert', name: 'Alert', path: '/docs/alert', comingSoon: true, description: 'A contextual alert message.' },
]

const sourceMap = { BUTTON_SOURCE, LABEL_SOURCE, INPUT_SOURCE, SELECT_SOURCE, UTILS_SOURCE }

export function getComponent(id) {
  return components.find((c) => c.id === id)
}

export function resolveDeps(deps) {
  return deps.map((d) => ({ ...d, source: d.source ? sourceMap[d.source] : null }))
}