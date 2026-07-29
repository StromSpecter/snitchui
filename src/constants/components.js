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

export const CHECKBOX_SOURCE = `import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Checkbox = forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <CheckboxPrimitive.Root
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-sm border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          className
        )}
        checked={checked}
        onCheckedChange={onCheckedChange}
        ref={ref}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          className={cn('flex items-center justify-center text-current')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    )
  }
)
Checkbox.displayName = 'Checkbox'

export { Checkbox }`

export const COMBOBOX_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { useState } from 'react'

const Combobox = forwardRef(
  ({
    className,
    children,
    value = [],
    onChange,
    placeholder = 'Select...',
    searchPlaceholder = 'Search...',
    emptyMessage = 'No results found.',
    ...props
  }, ref) => {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const selectedValues = Array.isArray(value) ? value : [value]

    const filteredChildren = children
      ? children.filter((child) => {
          const label = child.props.label || child.props.children || ''
          return String(label).toLowerCase().includes(search.toLowerCase())
        })
      : []

    const handleToggle = (val) => {
      const next = selectedValues.includes(val)
        ? selectedValues.filter((v) => v !== val)
        : [...selectedValues, val]
      if (onChange) onChange(next)
    }

    return (
      <div className={cn('relative', className)} ref={ref} {...props}>
        <div
          className={cn(
            'flex min-h-[40px] flex-wrap items-center gap-1 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus-within:outline-none focus-within:ring-1 focus-within:ring-ring cursor-pointer',
            !selectedValues.length && 'text-muted-foreground'
          )}
          onClick={() => setOpen(!open)}
        >
          {selectedValues.length === 0 ? (
            <span className="text-muted-foreground">{placeholder}</span>
          ) : (
            selectedValues.map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-1 rounded-full bg-primary/10 text-primary px-2 py-0.5 text-xs font-medium"
              >
                {val}
                <button
                  type="button"
                  className="ml-0.5 rounded-full hover:bg-primary/20 px-0.5"
                  onMouseDown={(e) => {
                    e.stopPropagation()
                    handleToggle(val)
                  }}
                >
                  ✕
                </button>
              </span>
            ))
          )}
          <div className="flex-1" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={cn(
              'opacity-50 transition-transform',
              open && 'rotate-180'
            )}
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>

        {open && (
          <div className="absolute z-10 mt-1 w-full rounded-md border border-border bg-background shadow-md">
            <div className="p-2">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full rounded-md border border-input bg-transparent px-3 py-1.5 text-sm outline-none focus-visible:ring-1 focus-visible:ring-ring"
                autoFocus
              />
            </div>
            <div className="max-h-[200px] overflow-y-auto">
              {filteredChildren.length === 0 ? (
                <div className="px-3 py-2 text-sm text-muted-foreground text-center">
                  {emptyMessage}
                </div>
              ) : (
                filteredChildren.map((child, i) => {
                  const val = child.props.value ?? child.props.children
                  return (
                    <button
                      key={i}
                      type="button"
                      className={cn(
                        'flex w-full items-center gap-2 rounded-sm px-3 py-2 text-sm text-left cursor-pointer hover:bg-accent hover:text-accent-foreground',
                        selectedValues.includes(val) && 'bg-accent text-accent-foreground'
                      )}
                      onMouseDown={(e) => {
                        e.preventDefault()
                        handleToggle(val)
                      }}
                    >
                      <span
                        className={cn(
                          'flex h-4 w-4 items-center justify-center rounded-sm border',
                          selectedValues.includes(val)
                            ? 'bg-primary border-primary text-primary-foreground'
                            : 'border-input'
                        )}
                      >
                        {selectedValues.includes(val) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        )}
                      </span>
                      {child.props.label || child.props.children}
                    </button>
                  )
                })
              )}
            </div>
          </div>
        )}
      </div>
    )
  }
)
Combobox.displayName = 'Combobox'

const ComboboxItem = forwardRef(
  ({ className, children, value, ...props }, ref) => {
    return (
      <button
        type="button"
        className={cn(
          'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
          className
        )}
        ref={ref}
        value={value}
        {...props}
      >
        {children}
      </button>
    )
  }
)
ComboboxItem.displayName = 'ComboboxItem'

export { Combobox, ComboboxItem }`

export const DATEPICKER_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { useState } from 'react'

const DatePicker = forwardRef(
  ({ className, value, onChange, placeholder, ...props }, ref) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [selectedDate, setSelectedDate] =
      useState(value ? new Date(value) : null)

    const handleSelect = (date) => {
      setSelectedDate(date)
      setShowCalendar(false)
      if (onChange) {
        onChange(date.toISOString().split('T')[0])
      }
    }

    const formatDate = (date) => {
      if (!date) return ''
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }

    return (
      <div className="relative">
        <input
          type="text"
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          value={formatDate(selectedDate) || ''}
          placeholder={placeholder || 'Select date...'}
          readOnly
          onClick={() => setShowCalendar(!showCalendar)}
          ref={ref}
          {...props}
        />
        {showCalendar && (
          <div className="absolute z-10 mt-1 rounded-md border border-border bg-background p-3 shadow-md">
            <div className="flex items-center justify-between mb-2">
              <button type="button" className="text-sm font-medium text-muted-foreground hover:text-foreground">Previous</button>
              <span className="text-sm font-medium">{selectedDate?.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
              <button type="button" className="text-sm font-medium text-muted-foreground hover:text-foreground">Next</button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                <div key={d} className="text-muted-foreground font-medium">{d}</div>
              ))}
              {Array.from({ length: 31 }, (_, i) => (
                <button key={i + 1} type="button" className={cn('h-8 w-8 rounded-md text-sm hover:bg-accent hover:text-accent-foreground', selectedDate?.getDate() === i + 1 && selectedDate?.getMonth() === new Date().getMonth() && 'bg-primary text-primary-foreground')} onClick={() => handleSelect(new Date(selectedDate?.getFullYear() || new Date().getFullYear(), selectedDate?.getMonth() || new Date().getMonth(), i + 1))}>
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
)
DatePicker.displayName = 'DatePicker'

export { DatePicker }`

export const RADIOBUTTON_SOURCE = `import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const RadioButtonGroup = RadioGroupPrimitive.Root
const RadioButtonItem = forwardRef(
  ({ className, value, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        className={cn(
          'peer h-4 w-4 shrink-0 rounded-full border border-input ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary data-[state=checked]:bg-primary',
          className
        )}
        value={value}
        ref={ref}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
          <span className="h-2.5 w-2.5 rounded-full bg-primary-foreground" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    )
  }
)
RadioButtonItem.displayName = 'RadioButtonItem'

export { RadioButtonGroup, RadioButtonItem }`

export const SWITCH_SOURCE = `import * as SwitchPrimitive from '@radix-ui/react-switch'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Switch = forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => {
    return (
      <SwitchPrimitive.Root
        className={cn(
          'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
          className
        )}
        checked={checked}
        onCheckedChange={onCheckedChange}
        ref={ref}
        {...props}
      >
        <SwitchPrimitive.Thumb
          className={cn(
            'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
          )}
        />
      </SwitchPrimitive.Root>
    )
  }
)
Switch.displayName = 'Switch'

export { Switch }`

export const TEXTAREA_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Textarea = forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = 'Textarea'

export { Textarea }`

export const TIMEPICKER_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../lib/utils'
import { useState } from 'react'

const TimePicker = forwardRef(
  ({ className, value, onChange, ...props }, ref) => {
    const [hours, setHours] = useState(
      value ? parseInt(value.split(':')[0]) : 0
    )
    const [minutes, setMinutes] = useState(
      value ? parseInt(value.split(':')[1]) : 0
    )
    const [seconds, setSeconds] = useState(
      value ? parseInt(value.split(':')[2]) || 0 : 0
    )

    const pad = (n) => String(n).padStart(2, '0')

    const handleChange = (h, m, s) => {
      const time = \`\${pad(h)}:\${pad(m)}:\${pad(s)}\`
      if (onChange) onChange(time)
    }

    const handleHourChange = (e) => {
      const h = Math.min(23, Math.max(0, parseInt(e.target.value) || 0))
      setHours(h)
      handleChange(h, minutes, seconds)
    }

    const handleMinuteChange = (e) => {
      const m = Math.min(59, Math.max(0, parseInt(e.target.value) || 0))
      setMinutes(m)
      handleChange(hours, m, seconds)
    }

    const handleSecondChange = (e) => {
      const s = Math.min(59, Math.max(0, parseInt(e.target.value) || 0))
      setSeconds(s)
      handleChange(hours, minutes, s)
    }

    return (
      <div className={cn('flex items-center gap-1', className)}>
        <input
          type="number"
          min="0"
          max="23"
          value={hours}
          onChange={handleHourChange}
          className="w-12 rounded-md border border-input bg-transparent px-1 py-1 text-center text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          ref={ref}
          {...props}
        />
        <span className="text-muted-foreground text-sm">:</span>
        <input
          type="number"
          min="0"
          max="59"
          value={minutes}
          onChange={handleMinuteChange}
          className="w-12 rounded-md border border-input bg-transparent px-1 py-1 text-center text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
        <span className="text-muted-foreground text-sm">:</span>
        <input
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleSecondChange}
          className="w-12 rounded-md border border-input bg-transparent px-1 py-1 text-center text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        />
      </div>
    )
  }
)
TimePicker.displayName = 'TimePicker'

export { TimePicker }`

export const UI_SOURCES = { CHECKBOX_SOURCE, COMBOBOX_SOURCE, DATEPICKER_SOURCE, RADIOBUTTON_SOURCE, SWITCH_SOURCE, TEXTAREA_SOURCE, TIMEPICKER_SOURCE }

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
  {
    id: 'checkbox',
    name: 'Checkbox',
    path: '/docs/checkbox',
    description: 'A checkbox component for toggling between checked and unchecked states.',
    demo: 'CheckboxDemo',
    installCmd: 'npx snitchui@latest add checkbox',
    deps: [
      { name: 'Checkbox', file: 'components/ui/checkbox/checkbox.jsx', source: 'CHECKBOX_SOURCE' },
      { name: '@radix-ui/react-checkbox', file: 'node_modules/@radix-ui/react-checkbox', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'checked', type: 'boolean', default: 'false', description: 'Whether the checkbox is checked' },
      { prop: 'onCheckedChange', type: '(checked: boolean) => void', default: '-', description: 'Callback when checked state changes' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the checkbox' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'combobox',
    name: 'Combobox',
    path: '/docs/combobox',
    description: 'A searchable multi-select dropdown with chip input and filter.',
    demo: 'ComboboxDemo',
    installCmd: 'npx snitchui@latest add combobox',
    deps: [
      { name: 'Combobox', file: 'components/ui/combobox/combobox.jsx', source: 'COMBOBOX_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'value', type: 'string[]', default: '[]', description: 'Array of selected values' },
      { prop: 'onChange', type: '(value: string[]) => void', default: '-', description: 'Callback when selection changes' },
      { prop: 'placeholder', type: 'string', default: '"Select..."', description: 'Placeholder when nothing is selected' },
      { prop: 'searchPlaceholder', type: 'string', default: '"Search..."', description: 'Placeholder for search input' },
      { prop: 'emptyMessage', type: 'string', default: '"No results found."', description: 'Message when no options match' },
    ],
  },
  {
    id: 'datepicker',
    name: 'DatePicker',
    path: '/docs/datepicker',
    description: 'A date picker component for selecting dates from a calendar.',
    demo: 'DatePickerDemo',
    installCmd: 'npx snitchui@latest add datepicker',
    deps: [
      { name: 'DatePicker', file: 'components/ui/datepicker/datepicker.jsx', source: 'DATEPICKER_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'value', type: 'string', default: '-', description: 'The selected date (YYYY-MM-DD)' },
      { prop: 'onChange', type: '(value: string) => void', default: '-', description: 'Callback when date changes' },
      { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the date picker' },
    ],
  },
  {
    id: 'radiobutton',
    name: 'RadioButton',
    path: '/docs/radiobutton',
    description: 'A radio button group for selecting one option from multiple choices.',
    demo: 'RadioButtonDemo',
    installCmd: 'npx snitchui@latest add radiobutton',
    deps: [
      { name: 'RadioButtonGroup', file: 'components/ui/radiobutton/radiobutton.jsx', source: 'RADIOBUTTON_SOURCE' },
      { name: '@radix-ui/react-radio-group', file: 'node_modules/@radix-ui/react-radio-group', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'value', type: 'string', default: '-', description: 'The controlled selected value' },
      { prop: 'onValueChange', type: '(value: string) => void', default: '-', description: 'Callback when the selected value changes' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the radio group' },
    ],
  },
  {
    id: 'switch',
    name: 'Switch',
    path: '/docs/switch',
    description: 'A toggle switch for binary on/off states.',
    demo: 'SwitchDemo',
    installCmd: 'npx snitchui@latest add switch',
    deps: [
      { name: 'Switch', file: 'components/ui/switch/switch.jsx', source: 'SWITCH_SOURCE' },
      { name: '@radix-ui/react-switch', file: 'node_modules/@radix-ui/react-switch', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'checked', type: 'boolean', default: 'false', description: 'Whether the switch is on' },
      { prop: 'onCheckedChange', type: '(checked: boolean) => void', default: '-', description: 'Callback when switch toggles' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the switch' },
    ],
  },
  {
    id: 'textarea',
    name: 'Textarea',
    path: '/docs/textarea',
    description: 'A multi-line text input with focus and disabled states.',
    demo: 'TextareaDemo',
    installCmd: 'npx snitchui@latest add textarea',
    deps: [
      { name: 'Textarea', file: 'components/ui/textarea/textarea.jsx', source: 'TEXTAREA_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the textarea' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'timepicker',
    name: 'TimePicker',
    path: '/docs/timepicker',
    description: 'A time picker component for selecting hours, minutes, and seconds.',
    demo: 'TimePickerDemo',
    installCmd: 'npx snitchui@latest add timepicker',
    deps: [
      { name: 'TimePicker', file: 'components/ui/timepicker/timepicker.jsx', source: 'TIMEPICKER_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'value', type: 'string', default: '-', description: 'The controlled time value (HH:MM:SS)' },
      { prop: 'onChange', type: '(value: string) => void', default: '-', description: 'Callback when time changes' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the time picker' },
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

const sourceMap = { BUTTON_SOURCE, LABEL_SOURCE, INPUT_SOURCE, SELECT_SOURCE, UTILS_SOURCE, CHECKBOX_SOURCE, COMBOBOX_SOURCE, DATEPICKER_SOURCE, RADIOBUTTON_SOURCE, SWITCH_SOURCE, TEXTAREA_SOURCE, TIMEPICKER_SOURCE }

export function getComponent(id) {
  return components.find((c) => c.id === id)
}

export function resolveDeps(deps) {
  return deps.map((d) => ({ ...d, source: d.source ? sourceMap[d.source] : null }))
}