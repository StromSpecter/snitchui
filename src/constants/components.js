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

const Input = forwardRef(({ className, type, size = 'md', ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
        size === 'sm' && 'h-8 px-2.5 text-xs',
        size === 'lg' && 'h-10 px-4 text-base',
        className
      )}
      ref={ref}
      {...props}
    />
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

export const CARD_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Card = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'rounded-xl border border-border bg-card text-card-foreground shadow-sm',
        className
      )}
      {...props}
    />
  )
})
Card.displayName = 'Card'

const CardHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 p-6', className)}
      {...props}
    />
  )
})
CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
CardTitle.displayName = 'CardTitle'

const CardDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
CardDescription.displayName = 'CardDescription'

const CardContent = forwardRef(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
  )
})
CardContent.displayName = 'CardContent'

const CardFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex items-center p-6 pt-0', className)}
      {...props}
    />
  )
})
CardFooter.displayName = 'CardFooter'

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }`

export const BADGE_SOURCE = `import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils.js'

const badgeVariants = cva(
  'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80',
        secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        outline: 'text-foreground',
        destructive: 'border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80',
        success: 'border-transparent bg-emerald-500/10 text-emerald-600 dark:bg-emerald-500/15 dark:text-emerald-400',
        warning: 'border-transparent bg-amber-500/10 text-amber-600 dark:bg-amber-500/15 dark:text-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Badge = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
})
Badge.displayName = 'Badge'

export { Badge, badgeVariants }`

export const DIALOG_SOURCE = `import { forwardRef, createContext, useContext, useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../../lib/utils.js'

const DialogContext = createContext()

function Dialog({ open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = useCallback(
    (val) => {
      if (!isControlled) setUncontrolledOpen(val)
      onOpenChange?.(val)
    },
    [isControlled, onOpenChange]
  )

  return (
    <DialogContext.Provider value={{ open, setOpen }}>
      {children}
    </DialogContext.Provider>
  )
}
Dialog.displayName = 'Dialog'

function DialogTrigger({ asChild, children, ...props }) {
  const { setOpen } = useContext(DialogContext)
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp onClick={() => setOpen(true)} {...props}>
      {children}
    </Comp>
  )
}
DialogTrigger.displayName = 'DialogTrigger'

function DialogClose({ children, ...props }) {
  const { setOpen } = useContext(DialogContext)
  return (
    <button onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}
DialogClose.displayName = 'DialogClose'

const DialogContent = forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen } = useContext(DialogContext)

  useEffect(() => {
    if (!open) return
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handleEsc)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div
        ref={ref}
        role="dialog"
        aria-modal="true"
        className={cn(
          'relative z-50 w-full max-w-lg rounded-xl border border-border bg-background shadow-lg p-6 mx-4',
          'animate-in fade-in-0 zoom-in-95 duration-200',
          className
        )}
        {...props}
      >
        {children}
        <button
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>
    </div>
  )
})
DialogContent.displayName = 'DialogContent'

const DialogHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
      {...props}
    />
  )
})
DialogHeader.displayName = 'DialogHeader'

const DialogFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4', className)}
      {...props}
    />
  )
})
DialogFooter.displayName = 'DialogFooter'

const DialogTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
DialogTitle.displayName = 'DialogTitle'

const DialogDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
DialogDescription.displayName = 'DialogDescription'

export {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}`

export const DROPDOWN_SOURCE = `import { forwardRef, createContext, useContext, useState, useRef, useEffect } from 'react'
import { cn } from '../../../lib/utils.js'

const DropdownContext = createContext()

function Dropdown({ children }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [open])

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <div ref={ref} className="relative inline-block">
        {children}
      </div>
    </DropdownContext.Provider>
  )
}
Dropdown.displayName = 'Dropdown'

function DropdownTrigger({ asChild, children, ...props }) {
  const { open, setOpen } = useContext(DropdownContext)
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-haspopup="true"
      {...props}
    >
      {children}
    </Comp>
  )
}
DropdownTrigger.displayName = 'DropdownTrigger'

const DropdownContent = forwardRef(({ className, align = 'start', sideOffset = 8, children, ...props }, ref) => {
  const { open } = useContext(DropdownContext)

  return open ? (
    <div
      ref={ref}
      className={cn(
        'absolute z-50 min-w-[8rem] overflow-hidden rounded-md border border-border bg-background p-1 shadow-md',
        'animate-in fade-in-0 zoom-in-95 duration-150',
        align === 'end' ? 'right-0' : 'left-0',
        className
      )}
      onClick={() => setOpen(false)}
      role="menu"
      {...props}
    >
      {children}
    </div>
  ) : null
})
DropdownContent.displayName = 'DropdownContent'

const DropdownItem = forwardRef(({ className, inset, ...props }, ref) => {
  return (
    <button
      ref={ref}
      role="menuitem"
      className={cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        inset && 'pl-8',
        className
      )}
      {...props}
    />
  )
})
DropdownItem.displayName = 'DropdownItem'

const DropdownSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('-mx-1 my-1 h-px bg-border', className)}
      {...props}
    />
  )
})
DropdownSeparator.displayName = 'DropdownSeparator'

const DropdownLabel = forwardRef(({ className, inset, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('px-2 py-1.5 text-xs font-medium text-muted-foreground', inset && 'pl-8', className)}
      {...props}
    />
  )
})
DropdownLabel.displayName = 'DropdownLabel'

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
}`

export const TABS_SOURCE = `import { forwardRef, createContext, useContext, useState } from 'react'
import { cn } from '../../../lib/utils.js'

const TabsContext = createContext()

function Tabs({ value: controlledValue, onValueChange, defaultValue, children, className, ...props }) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '')
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const setValue = (val) => {
    if (!isControlled) setUncontrolledValue(val)
    onValueChange?.(val)
  }

  return (
    <TabsContext.Provider value={{ value, setValue }}>
      <div className={cn('', className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}
Tabs.displayName = 'Tabs'

const TabsList = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="tablist"
      className={cn(
        'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
        className
      )}
      {...props}
    />
  )
})
TabsList.displayName = 'TabsList'

const TabsTrigger = forwardRef(({ className, value, disabled, children, ...props }, ref) => {
  const { value: selectedValue, setValue } = useContext(TabsContext)
  const isActive = selectedValue === value

  return (
    <button
      ref={ref}
      role="tab"
      aria-selected={isActive}
      disabled={disabled}
      onClick={() => setValue(value)}
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
        isActive
          ? 'bg-background text-foreground shadow-sm'
          : 'hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
})
TabsTrigger.displayName = 'TabsTrigger'

const TabsContent = forwardRef(({ className, value, children, ...props }, ref) => {
  const { value: selectedValue } = useContext(TabsContext)
  if (selectedValue !== value) return null

  return (
    <div
      ref={ref}
      role="tabpanel"
      className={cn(
        'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
TabsContent.displayName = 'TabsContent'

export { Tabs, TabsList, TabsTrigger, TabsContent }`

export const ACCORDION_SOURCE = `import { forwardRef, createContext, useContext, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '../../../lib/utils.js'

const AccordionContext = createContext()
const AccordionItemContext = createContext()

function Accordion({ type = 'single', defaultValue, children, className, ...props }) {
  const [openValues, setOpenValues] = useState(
    defaultValue ? (Array.isArray(defaultValue) ? defaultValue : [defaultValue]) : []
  )

  const toggleItem = (value) => {
    if (type === 'single') {
      setOpenValues((prev) => (prev.includes(value) ? [] : [value]))
    } else {
      setOpenValues((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      )
    }
  }

  return (
    <AccordionContext.Provider value={{ openValues, toggleItem, type }}>
      <div className={cn('divide-y divide-border rounded-lg border border-border', className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}
Accordion.displayName = 'Accordion'

const AccordionItem = forwardRef(({ value, className, children, ...props }, ref) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div ref={ref} className={cn('', className)} {...props}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  )
})
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = forwardRef(({ className, children, ...props }, ref) => {
  const { openValues, toggleItem } = useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)
  const isOpen = openValues.includes(value)

  return (
    <button
      ref={ref}
      onClick={() => toggleItem(value)}
      className={cn(
        'flex w-full items-center justify-between py-4 px-4 text-sm font-medium transition-all hover:underline text-left',
        className
      )}
      aria-expanded={isOpen}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          'size-4 shrink-0 text-muted-foreground transition-transform duration-200',
          isOpen && 'rotate-180'
        )}
      />
    </button>
  )
})
AccordionTrigger.displayName = 'AccordionTrigger'

const AccordionContent = forwardRef(({ className, children, ...props }, ref) => {
  const { openValues } = useContext(AccordionContext)
  const { value } = useContext(AccordionItemContext)
  const isOpen = openValues.includes(value)

  return (
    <div
      ref={ref}
      className={cn(
        'overflow-hidden transition-all duration-200',
        isOpen ? 'max-h-96 pb-4' : 'max-h-0',
        className
      )}
      role="region"
      {...props}
    >
      <div className="px-4 text-sm text-muted-foreground">{children}</div>
    </div>
  )
})
AccordionContent.displayName = 'AccordionContent'

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }`

export const AVATAR_SOURCE = `import { forwardRef, useState, useEffect } from 'react'
import { cn } from '../../../lib/utils.js'

const Avatar = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        className
      )}
      {...props}
    />
  )
})
Avatar.displayName = 'Avatar'

const AvatarImage = forwardRef(({ className, src, alt = '', onError, ...props }, ref) => {
  const [error, setError] = useState(false)

  if (!src || error) return null

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      onError={(e) => {
        setError(true)
        onError?.(e)
      }}
      className={cn('aspect-square h-full w-full object-cover', className)}
      {...props}
    />
  )
})
AvatarImage.displayName = 'AvatarImage'

const AvatarFallback = forwardRef(({ className, delayMs, children, ...props }, ref) => {
  const [show, setShow] = useState(!delayMs)

  useEffect(() => {
    if (!delayMs || show) return
    const id = setTimeout(() => setShow(true), delayMs)
    return () => clearTimeout(id)
  }, [delayMs, show])

  if (!show) return null

  return (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted text-sm font-medium text-muted-foreground',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
AvatarFallback.displayName = 'AvatarFallback'

export { Avatar, AvatarImage, AvatarFallback }`

export const ALERT_SOURCE = `import { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../../lib/utils.js'

const alertVariants = cva(
  'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
        success: 'border-emerald-500/50 text-emerald-600 dark:border-emerald-500/50 dark:text-emerald-400 [&>svg]:text-emerald-600 dark:[&>svg]:text-emerald-400',
        warning: 'border-amber-500/50 text-amber-600 dark:border-amber-500/50 dark:text-amber-400 [&>svg]:text-amber-600 dark:[&>svg]:text-amber-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const Alert = forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
})
Alert.displayName = 'Alert'

const AlertTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h5
      ref={ref}
      className={cn('mb-1 font-medium leading-none tracking-tight', className)}
      {...props}
    />
  )
})
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('text-sm [&_p]:leading-relaxed', className)}
      {...props}
    />
  )
})
AlertDescription.displayName = 'AlertDescription'

export { Alert, AlertTitle, AlertDescription }`

export const TOOLTIP_SOURCE = `import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const TooltipProvider = TooltipPrimitive.Provider
const Tooltip = TooltipPrimitive.Root
const TooltipTrigger = TooltipPrimitive.Trigger

const TooltipContent = forwardRef(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          'z-50 overflow-hidden rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
          className
        )}
        {...props}
      />
    </TooltipPrimitive.Portal>
  )
})
TooltipContent.displayName = 'TooltipContent'

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }`

export const POPOVER_SOURCE = `import * as PopoverPrimitive from '@radix-ui/react-popover'
import { forwardRef } from 'react'
import { cn } from '../../lib/utils'

const Popover = PopoverPrimitive.Root
const PopoverTrigger = PopoverPrimitive.Trigger
const PopoverAnchor = PopoverPrimitive.Anchor

const PopoverContent = forwardRef(({ className, align = 'center', sideOffset = 4, ...props }, ref) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'z-50 w-72 rounded-md border border-border bg-background p-4 text-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
})
PopoverContent.displayName = 'PopoverContent'

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }`

export const TOAST_SOURCE = `import { Toaster as SonnerToaster } from 'sonner'

function Toaster() {
  return (
    <SonnerToaster
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-muted-foreground',
          actionButton:
            'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
    />
  )
}

export { Toaster }`

export const SHEET_SOURCE = `import { forwardRef, createContext, useContext, useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

const SheetContext = createContext()

function Sheet({ open: controlledOpen, onOpenChange, children }) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen

  const setOpen = useCallback(
    (val) => {
      if (!isControlled) setUncontrolledOpen(val)
      onOpenChange?.(val)
    },
    [isControlled, onOpenChange]
  )

  return (
    <SheetContext.Provider value={{ open, setOpen }}>
      {children}
    </SheetContext.Provider>
  )
}
Sheet.displayName = 'Sheet'

function SheetTrigger({ asChild, children, ...props }) {
  const { setOpen } = useContext(SheetContext)
  const Comp = asChild ? 'span' : 'button'
  return (
    <Comp onClick={() => setOpen(true)} {...props}>
      {children}
    </Comp>
  )
}
SheetTrigger.displayName = 'SheetTrigger'

function SheetClose({ children, ...props }) {
  const { setOpen } = useContext(SheetContext)
  return (
    <button onClick={() => setOpen(false)} {...props}>
      {children}
    </button>
  )
}
SheetClose.displayName = 'SheetClose'

const SheetContent = forwardRef(
  ({ className, side = 'right', position = 'fixed', overlay = true, children, ...props }, ref) => {
    const { open, setOpen } = useContext(SheetContext)

    useEffect(() => {
      if (!open) return
      const handleEsc = (e) => {
        if (e.key === 'Escape') setOpen(false)
      }
      if (position === 'fixed') document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEsc)
      return () => {
        document.removeEventListener('keydown', handleEsc)
        if (position === 'fixed') document.body.style.overflow = ''
      }
    }, [open, setOpen, position])

    if (!open) return null

    return (
      <>
        {overlay && (
          <div
            className={cn(
              'z-50 bg-black/50 backdrop-blur-md animate-in fade-in-0 duration-200',
              position === 'fixed' ? 'fixed inset-0' : 'absolute inset-0'
            )}
            onClick={() => setOpen(false)}
          />
        )}
        <div
          ref={ref}
          role="dialog"
          aria-modal="true"
          className={cn(
            'z-50 flex flex-col gap-4 bg-background p-6 shadow-lg',
            position === 'fixed' ? 'fixed' : 'absolute',
            side === 'top' && 'inset-x-0 top-0 max-h-full border-b animate-in slide-in-from-top duration-300',
            side === 'bottom' && 'inset-x-0 bottom-0 max-h-full border-t animate-in slide-in-from-bottom duration-300',
            side === 'left' && 'inset-y-0 left-0 h-full w-3/4 border-r max-w-sm animate-in slide-in-from-left duration-300',
            side === 'right' && 'inset-y-0 right-0 h-full w-3/4 border-l max-w-sm animate-in slide-in-from-right duration-300',
            className
          )}
          {...props}
        >
          {children}
          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close"
          >
            <X className="size-4" />
          </button>
        </div>
      </>
    )
  }
)
SheetContent.displayName = 'SheetContent'

const SheetHeader = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 text-center sm:text-left mb-4', className)}
      {...props}
    />
  )
})
SheetHeader.displayName = 'SheetHeader'

const SheetFooter = forwardRef(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 mt-4', className)}
      {...props}
    />
  )
})
SheetFooter.displayName = 'SheetFooter'

const SheetTitle = forwardRef(({ className, ...props }, ref) => {
  return (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
})
SheetTitle.displayName = 'SheetTitle'

const SheetDescription = forwardRef(({ className, ...props }, ref) => {
  return (
    <p
      ref={ref}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
})
SheetDescription.displayName = 'SheetDescription'

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}`

export const COMMAND_SOURCE = `import { forwardRef } from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { Search } from 'lucide-react'
import { cn } from '../../lib/utils'

const Command = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive
      ref={ref}
      className={cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-background text-foreground',
        className
      )}
      {...props}
    />
  )
})
Command.displayName = 'Command'

const CommandInput = forwardRef(({ className, ...props }, ref) => {
  return (
    <div className="flex items-center border-b border-border px-3" cmdk-input-wrapper="">
      <Search className="mr-2 size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        ref={ref}
        className={cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        {...props}
      />
    </div>
  )
})
CommandInput.displayName = 'CommandInput'

const CommandList = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.List
      ref={ref}
      className={cn('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
      {...props}
    />
  )
})
CommandList.displayName = 'CommandList'

const CommandEmpty = forwardRef((props, ref) => {
  return (
    <CommandPrimitive.Empty
      ref={ref}
      className="py-6 text-center text-sm text-muted-foreground"
      {...props}
    />
  )
})
CommandEmpty.displayName = 'CommandEmpty'

const CommandGroup = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Group
      ref={ref}
      className={cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        className
      )}
      {...props}
    />
  )
})
CommandGroup.displayName = 'CommandGroup'

const CommandSeparator = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Separator
      ref={ref}
      className={cn('-mx-1 h-px bg-border', className)}
      {...props}
    />
  )
})
CommandSeparator.displayName = 'CommandSeparator'

const CommandItem = forwardRef(({ className, ...props }, ref) => {
  return (
    <CommandPrimitive.Item
      ref={ref}
      className={cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50',
        className
      )}
      {...props}
    />
  )
})
CommandItem.displayName = 'CommandItem'

const CommandShortcut = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      className={cn('ml-auto text-xs tracking-widest text-muted-foreground', className)}
      {...props}
    />
  )
})
CommandShortcut.displayName = 'CommandShortcut'

export {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}`

export const PAGINATION_SOURCE = `/* eslint-disable react-refresh/only-export-components */
import { forwardRef, useState, useCallback } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from 'lucide-react'
import { cn } from '../../../lib/utils.js'

function range(start, end) {
  const length = end - start + 1
  return Array.from({ length }, (_, i) => start + i)
}

function paginate({ totalPages, page, siblingCount = 1, boundaryCount = 1 }) {
  const totalNumbers = siblingCount * 2 + boundaryCount * 2 + 1
  if (totalPages <= totalNumbers + 1) {
    return range(1, totalPages)
  }

  const leftSibling = Math.max(page - siblingCount, boundaryCount + 1)
  const rightSibling = Math.min(page + siblingCount, totalPages - boundaryCount)

  const showStartEllipsis = leftSibling > boundaryCount + 1
  const showEndEllipsis = rightSibling < totalPages - boundaryCount

  if (!showStartEllipsis && showEndEllipsis) {
    const leftCount = boundaryCount + siblingCount * 2
    return [...range(1, leftCount), 'end-ellipsis', totalPages]
  }

  if (showStartEllipsis && !showEndEllipsis) {
    const rightCount = boundaryCount + siblingCount * 2
    return [1, 'start-ellipsis', ...range(totalPages - rightCount + 1, totalPages)]
  }

  return [1, 'start-ellipsis', ...range(leftSibling, rightSibling), 'end-ellipsis', totalPages]
}

const Pagination = forwardRef(
  (
    {
      page: controlledPage,
      defaultPage = 1,
      totalPages,
      onPageChange,
      siblingCount = 1,
      boundaryCount = 1,
      showFirstLast = false,
      disabled = false,
      size = 'md',
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledPage !== undefined
    const [uncontrolledPage, setUncontrolledPage] = useState(defaultPage)
    const page = isControlled ? controlledPage : uncontrolledPage

    const setPage = useCallback(
      (value) => {
        if (disabled) return
        const next = Math.min(Math.max(value, 1), totalPages)
        if (!isControlled) setUncontrolledPage(next)
        onPageChange?.(next)
      },
      [disabled, isControlled, onPageChange, totalPages]
    )

    const items = paginate({ totalPages, page, siblingCount, boundaryCount })

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn('mx-auto w-full', className)}
        {...props}
      >
        <PaginationContent size={size}>
          {showFirstLast && (
            <PaginationItem>
              <PaginationLink
                size="icon"
                disabled={disabled || page <= 1}
                onClick={() => setPage(1)}
                aria-label="Go to first page"
              >
                <ChevronsLeft className="size-4" />
              </PaginationLink>
            </PaginationItem>
          )}

          <PaginationItem>
            <PaginationLink
              size="icon"
              disabled={disabled || page <= 1}
              onClick={() => setPage(page - 1)}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {items.map((item, i) =>
            typeof item === 'number' ? (
              <PaginationItem key={\`page-\${item}\`}>
                <PaginationLink
                  active={item === page}
                  disabled={disabled}
                  onClick={() => setPage(item)}
                  aria-label={\`Go to page \${item}\`}
                  aria-current={item === page ? 'page' : undefined}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ) : (
              <PaginationItem key={\`\${item}-\${i}\`}>
                <PaginationEllipsis />
              </PaginationItem>
            )
          )}

          <PaginationItem>
            <PaginationLink
              size="icon"
              disabled={disabled || page >= totalPages}
              onClick={() => setPage(page + 1)}
              aria-label="Go to next page"
            >
              <ChevronRight className="size-4" />
            </PaginationLink>
          </PaginationItem>

          {showFirstLast && (
            <PaginationItem>
              <PaginationLink
                size="icon"
                disabled={disabled || page >= totalPages}
                onClick={() => setPage(totalPages)}
                aria-label="Go to last page"
              >
                <ChevronsRight className="size-4" />
              </PaginationLink>
            </PaginationItem>
          )}
        </PaginationContent>
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'

const PaginationContent = forwardRef(({ className, size = 'md', ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn(
        'flex items-center justify-center gap-1.5',
        size === 'sm' && 'gap-1',
        size === 'lg' && 'gap-2',
        className
      )}
      {...props}
    />
  )
})
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = forwardRef(({ className, ...props }, ref) => {
  return <li ref={ref} className={cn('', className)} {...props} />
})
PaginationItem.displayName = 'PaginationItem'

const paginationLinkVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-8 min-w-8 px-3 text-xs',
        md: 'h-9 min-w-9 px-4 text-sm',
        lg: 'h-10 min-w-10 px-5 text-base',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'outline',
      size: 'md',
    },
  }
)

const PaginationLink = forwardRef(
  ({ className, variant, size = 'md', active = false, asChild = false, disabled, onClick, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        onClick={(e) => {
          if (active || disabled) {
            e.preventDefault()
            return
          }
          onClick?.(e)
        }}
        className={cn(
          paginationLinkVariants({ variant: active ? 'default' : variant, size }),
          active && 'pointer-events-none',
          className
        )}
        {...props}
      />
    )
  }
)
PaginationLink.displayName = 'PaginationLink'

const PaginationEllipsis = forwardRef(({ className, ...props }, ref) => {
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={cn('flex h-9 w-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4 text-muted-foreground" />
      <span className="sr-only">More pages</span>
    </span>
  )
})
PaginationEllipsis.displayName = 'PaginationEllipsis'

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationEllipsis,
  paginationLinkVariants,
  paginate,
}`

export const TABLE_SOURCE = `import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const Table = forwardRef(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))
Table.displayName = 'Table'

const TableHeader = forwardRef(({ className, ...props }, ref) => (
  <thead
    ref={ref}
    className={cn('[&_tr]:border-b', className)}
    {...props}
  />
))
TableHeader.displayName = 'TableHeader'

const TableBody = forwardRef(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

const TableFooter = forwardRef(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

const TableRow = forwardRef(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b border-border/50 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

const TableHead = forwardRef(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-10 px-4 text-left align-middle font-medium text-muted-foreground whitespace-nowrap',
      className
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

const TableCell = forwardRef(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('px-4 py-3 align-middle', className)}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

const TableCaption = forwardRef(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
}`

export const DATA_TABLE_SOURCE = `import { forwardRef, useState, useMemo, useEffect } from 'react'
import { ArrowDown, ArrowUp, ArrowUpDown, Search } from 'lucide-react'
import { cn } from '../../../lib/utils.js'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from './table.jsx'
import { Pagination } from '../pagination/pagination.jsx'

const getValue = (row, column) => {
  if (column.accessor) return column.accessor(row)
  return row[column.key]
}

const getAlign = (column) =>
  cn(
    column.align === 'center' && 'text-center',
    column.align === 'right' && 'text-right'
  )

const DataTable = forwardRef(
  (
    {
      columns,
      data = [],
      pageSize = 10,
      showPageSize = false,
      pageSizeOptions = [5, 10, 20, 50],
      searchPlaceholder = 'Search...',
      emptyMessage = 'No results found.',
      showActions = false,
      actions,
      actionsHeader = 'Actions',
      className,
      ...props
    },
    ref
  ) => {
    const [sort, setSort] = useState(null)
    const [searches, setSearches] = useState({})
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(pageSize)

    const handleSort = (key) => {
      setSort((prev) => {
        if (!prev || prev.key !== key) return { key, direction: 'asc' }
        if (prev.direction === 'asc') return { key, direction: 'desc' }
        return null
      })
      setPage(1)
    }

    const handleSearch = (key, value) => {
      setSearches((prev) => ({ ...prev, [key]: value }))
      setPage(1)
    }

    const filteredRows = useMemo(() => {
      let rows = data
      for (const column of columns) {
        if (!column.searchable) continue
        const query = String(searches[column.key] ?? '').trim().toLowerCase()
        if (!query) continue
        rows = rows.filter((row) =>
          String(getValue(row, column) ?? '')
            .toLowerCase()
            .includes(query)
        )
      }
      return rows
    }, [data, columns, searches])

    const sortedRows = useMemo(() => {
      if (!sort) return filteredRows
      const column = columns.find((c) => c.key === sort.key)
      if (!column) return filteredRows
      const direction = sort.direction === 'asc' ? 1 : -1
      return [...filteredRows].sort((a, b) => {
        const aValue = getValue(a, column)
        const bValue = getValue(b, column)
        if (column.sortFn) return column.sortFn(aValue, bValue) * direction
        if (typeof aValue === 'number' && typeof bValue === 'number') {
          return (aValue - bValue) * direction
        }
        return (
          String(aValue ?? '').localeCompare(String(bValue ?? ''), undefined, {
            numeric: true,
          }) * direction
        )
      })
    }, [filteredRows, sort, columns])

    const totalPages = Math.max(1, Math.ceil(sortedRows.length / size))

    useEffect(() => {
      if (page > totalPages) setPage(totalPages)
    }, [page, totalPages])

    const visibleRows = useMemo(() => {
      const start = (page - 1) * size
      return sortedRows.slice(start, start + size)
    }, [sortedRows, page, size])

    const startIndex = sortedRows.length === 0 ? 0 : (page - 1) * size + 1
    const endIndex = Math.min(page * size, sortedRows.length)

    return (
      <div
        ref={ref}
        className={cn('w-full', className)}
        {...props}
      >
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead
                  key={column.key}
                  className={cn(column.width, getAlign(column))}
                >
                  <div className={cn('flex flex-col gap-1.5', getAlign(column))}>
                    <button
                      type="button"
                      disabled={!column.sortable}
                      onClick={() => handleSort(column.key)}
                      className={cn(
                        'inline-flex items-center gap-1 font-medium text-muted-foreground',
                        getAlign(column),
                        column.sortable
                          ? 'cursor-pointer select-none hover:text-foreground'
                          : 'cursor-default'
                      )}
                    >
                      {column.header}
                      {column.sortable &&
                        (sort?.key === column.key ? (
                          sort.direction === 'asc' ? (
                            <ArrowUp className="size-3.5" />
                          ) : (
                            <ArrowDown className="size-3.5" />
                          )
                        ) : (
                          <ArrowUpDown className="size-3.5 opacity-50" />
                        ))}
                    </button>

                    {column.searchable && (
                      <div className="relative">
                        <Search className="absolute left-2 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                        <input
                          type="text"
                          value={searches[column.key] ?? ''}
                          onChange={(e) =>
                            handleSearch(column.key, e.target.value)
                          }
                          placeholder={searchPlaceholder}
                          aria-label={\`Search \${column.header}\`}
                          className="h-8 w-full min-w-[120px] rounded-md border border-input bg-background pl-7 pr-2 text-xs shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                        />
                      </div>
                    )}
                  </div>
                </TableHead>
              ))}

              {showActions && (
                <TableHead className="w-[80px] text-right">
                  <span className="inline-flex items-center justify-end font-medium text-muted-foreground">
                    {actionsHeader}
                  </span>
                </TableHead>
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {visibleRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length + (showActions ? 1 : 0)}
                  className="h-24 text-center text-muted-foreground"
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              visibleRows.map((row, index) => (
                <TableRow key={row.id ?? index}>
                  {columns.map((column) => {
                    const value = getValue(row, column)
                    return (
                      <TableCell
                        key={column.key}
                        className={getAlign(column)}
                      >
                        {column.render ? column.render(value, row) : value}
                      </TableCell>
                    )
                  })}
                  {showActions && (
                    <TableCell className="whitespace-nowrap text-right">
                      {actions ? actions(row) : null}
                    </TableCell>
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="whitespace-nowrap text-sm text-muted-foreground">
            Showing {startIndex}–{endIndex} of {sortedRows.length}
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center">
            {showPageSize && (
              <label className="flex items-center gap-2 whitespace-nowrap text-sm text-muted-foreground">
                Rows per page
                <select
                  value={size}
                  onChange={(e) => {
                    setSize(Number(e.target.value))
                    setPage(1)
                  }}
                  className="h-8 rounded-md border border-input bg-background px-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            )}
            <Pagination
              page={page}
              totalPages={totalPages}
              onPageChange={setPage}
              className="sm:mx-0"
            />
          </div>
        </div>
      </div>
    )
  }
)
DataTable.displayName = 'DataTable'

export { DataTable }`

export const UI_SOURCES = { CHECKBOX_SOURCE, COMBOBOX_SOURCE, DATEPICKER_SOURCE, RADIOBUTTON_SOURCE, SWITCH_SOURCE, TEXTAREA_SOURCE, TIMEPICKER_SOURCE, CARD_SOURCE, BADGE_SOURCE, DIALOG_SOURCE, DROPDOWN_SOURCE, TABS_SOURCE, ACCORDION_SOURCE, AVATAR_SOURCE, ALERT_SOURCE, TOOLTIP_SOURCE, POPOVER_SOURCE, TOAST_SOURCE, SHEET_SOURCE, COMMAND_SOURCE, PAGINATION_SOURCE, TABLE_SOURCE, DATA_TABLE_SOURCE }

export const components = [
  {
    id: 'button',
    name: 'Button',
    path: '/docs/button',
    description: 'A clickable UI element that triggers an action or event.',
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
    demo: 'InputDemo',
    installCmd: 'npx snitchui@latest add input',
    deps: [
      { name: 'Input', file: 'components/ui/input/input.jsx', source: 'INPUT_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'type', type: 'string', default: '"text"', description: 'The input type (text, email, password, etc.)' },
      { prop: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the input' },
      { prop: 'placeholder', type: 'string', default: '-', description: 'Placeholder text' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables the input' },
      { prop: 'error', type: 'string', default: '-', description: 'Error message (also sets aria-invalid)' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'select',
    name: 'Select',
    path: '/docs/select',
    description: 'A dropdown select component with grouped items, labels, and disabled states.',
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
    comingSoon: false,
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
  {
    id: 'card',
    name: 'Card',
    path: '/docs/card',
    description: 'A container for content.',
    comingSoon: false,
    demo: 'CardDemo',
    installCmd: 'npx snitchui@latest add card',
    deps: [
      { name: 'Card', file: 'components/ui/card/card.jsx', source: 'CARD_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'badge',
    name: 'Badge',
    path: '/docs/badge',
    description: 'A small status indicator.',
    comingSoon: false,
    demo: 'BadgeDemo',
    installCmd: 'npx snitchui@latest add badge',
    deps: [
      { name: 'Badge', file: 'components/ui/badge/badge.jsx', source: 'BADGE_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'variant', type: '"default" | "secondary" | "outline" | "destructive" | "success" | "warning"', default: '"default"', description: 'Visual style of the badge' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'dialog',
    name: 'Dialog',
    path: '/docs/dialog',
    description: 'A modal overlay.',
    comingSoon: false,
    demo: 'DialogDemo',
    installCmd: 'npx snitchui@latest add dialog',
    deps: [
      { name: 'Dialog', file: 'components/ui/dialog/dialog.jsx', source: 'DIALOG_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'open', type: 'boolean', default: '-', description: 'Controlled open state' },
      { prop: 'onOpenChange', type: '(open: boolean) => void', default: '-', description: 'Callback when open state changes' },
    ],
  },
  {
    id: 'dropdown',
    name: 'Dropdown',
    path: '/docs/dropdown',
    description: 'A dropdown menu.',
    comingSoon: false,
    demo: 'DropdownDemo',
    installCmd: 'npx snitchui@latest add dropdown',
    deps: [
      { name: 'Dropdown', file: 'components/ui/dropdown/dropdown.jsx', source: 'DROPDOWN_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'align', type: '"start" | "end"', default: '"start"', description: 'Alignment of the dropdown content' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'tabs',
    name: 'Tabs',
    path: '/docs/tabs',
    description: 'Tabbed content sections.',
    comingSoon: false,
    demo: 'TabsDemo',
    installCmd: 'npx snitchui@latest add tabs',
    deps: [
      { name: 'Tabs', file: 'components/ui/tabs/tabs.jsx', source: 'TABS_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'defaultValue', type: 'string', default: '-', description: 'Default active tab value' },
      { prop: 'value', type: 'string', default: '-', description: 'Controlled active tab value' },
      { prop: 'onValueChange', type: '(value: string) => void', default: '-', description: 'Callback when active tab changes' },
    ],
  },
  {
    id: 'accordion',
    name: 'Accordion',
    path: '/docs/accordion',
    description: 'Collapsible content panels.',
    comingSoon: false,
    demo: 'AccordionDemo',
    installCmd: 'npx snitchui@latest add accordion',
    deps: [
      { name: 'Accordion', file: 'components/ui/accordion/accordion.jsx', source: 'ACCORDION_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'type', type: '"single" | "multiple"', default: '"single"', description: 'Whether one or multiple items can open' },
      { prop: 'defaultValue', type: 'string | string[]', default: '-', description: 'Default open item(s)' },
    ],
  },
  {
    id: 'avatar',
    name: 'Avatar',
    path: '/docs/avatar',
    description: 'User avatar image.',
    comingSoon: false,
    demo: 'AvatarDemo',
    installCmd: 'npx snitchui@latest add avatar',
    deps: [
      { name: 'Avatar', file: 'components/ui/avatar/avatar.jsx', source: 'AVATAR_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'src', type: 'string', default: '-', description: 'Image source URL' },
      { prop: 'alt', type: 'string', default: '""', description: 'Alt text for image' },
      { prop: 'delayMs', type: 'number', default: '-', description: 'Delay before showing fallback (ms)' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'alert',
    name: 'Alert',
    path: '/docs/alert',
    description: 'A contextual alert message.',
    comingSoon: false,
    demo: 'AlertDemo',
    installCmd: 'npx snitchui@latest add alert',
    deps: [
      { name: 'Alert', file: 'components/ui/alert/alert.jsx', source: 'ALERT_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'variant', type: '"default" | "destructive" | "success" | "warning"', default: '"default"', description: 'Visual style of the alert' },
      { prop: 'className', type: 'string', default: '-', description: 'Additional CSS classes' },
    ],
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    path: '/docs/tooltip',
    description: 'A popup that displays information when hovering over an element.',
    comingSoon: false,
    demo: 'TooltipDemo',
    installCmd: 'npx snitchui@latest add tooltip',
    deps: [
      { name: 'Tooltip', file: 'components/ui/tooltip/tooltip.jsx', source: 'TOOLTIP_SOURCE' },
      { name: '@radix-ui/react-tooltip', file: 'node_modules/@radix-ui/react-tooltip', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: 'Preferred tooltip side' },
      { prop: 'sideOffset', type: 'number', default: '4', description: 'Offset from the trigger element' },
      { prop: 'delayDuration', type: 'number', default: '700', description: 'Delay in ms before showing' },
    ],
  },
  {
    id: 'popover',
    name: 'Popover',
    path: '/docs/popover',
    description: 'A floating card that appears when clicking a trigger element.',
    comingSoon: false,
    demo: 'PopoverDemo',
    installCmd: 'npx snitchui@latest add popover',
    deps: [
      { name: 'Popover', file: 'components/ui/popover/popover.jsx', source: 'POPOVER_SOURCE' },
      { name: '@radix-ui/react-popover', file: 'node_modules/@radix-ui/react-popover', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: 'Preferred popover side' },
      { prop: 'sideOffset', type: 'number', default: '4', description: 'Offset from the trigger element' },
      { prop: 'align', type: '"start" | "center" | "end"', default: '"center"', description: 'Alignment relative to trigger' },
    ],
  },
  {
    id: 'toast',
    name: 'Toast',
    path: '/docs/toast',
    description: 'A toast notification system for showing temporary messages.',
    comingSoon: false,
    demo: 'ToastDemo',
    installCmd: 'npx snitchui@latest add toast',
    deps: [
      { name: 'Toaster', file: 'components/ui/toast/toaster.jsx', source: 'TOAST_SOURCE' },
      { name: 'sonner', file: 'node_modules/sonner', source: null },
    ],
    props: [
      { prop: 'position', type: '"top-left" | "top-right" | "bottom-left" | "bottom-right" | "top-center" | "bottom-center"', default: '"bottom-right"', description: 'Toast position on screen' },
      { prop: 'richColors', type: 'boolean', default: 'false', description: 'Use rich colored toasts' },
      { prop: 'closeButton', type: 'boolean', default: 'false', description: 'Show close button on toasts' },
    ],
  },
  {
    id: 'sheet',
    name: 'Sheet',
    path: '/docs/sheet',
    description: 'A slide-in panel that opens from any side of the screen.',
    comingSoon: false,
    demo: 'SheetDemo',
    installCmd: 'npx snitchui@latest add sheet',
    deps: [
      { name: 'Sheet', file: 'components/ui/sheet/sheet.jsx', source: 'SHEET_SOURCE' },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'side', type: '"top" | "bottom" | "left" | "right"', default: '"right"', description: 'Which side the sheet slides from' },
      { prop: 'position', type: '"fixed" | "absolute"', default: '"fixed"', description: 'Positioning mode. Use absolute for contained previews' },
      { prop: 'overlay', type: 'boolean', default: 'true', description: 'Show the backdrop overlay' },
      { prop: 'open', type: 'boolean', default: '-', description: 'Controlled open state' },
      { prop: 'onOpenChange', type: '(open: boolean) => void', default: '-', description: 'Callback when open state changes' },
    ],
  },
  {
    id: 'command',
    name: 'Command',
    path: '/docs/command',
    description: 'A command palette component for keyboard-driven navigation and search.',
    comingSoon: false,
    demo: 'CommandDemo',
    installCmd: 'npx snitchui@latest add command',
    deps: [
      { name: 'Command', file: 'components/ui/command/command.jsx', source: 'COMMAND_SOURCE' },
      { name: 'cmdk', file: 'node_modules/cmdk', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'shouldFilter', type: 'boolean', default: 'true', description: 'Whether to filter items by input' },
      { prop: 'defaultValue', type: 'string', default: '-', description: 'Default selected value' },
      { prop: 'value', type: 'string', default: '-', description: 'Controlled selected value' },
      { prop: 'onValueChange', type: '(value: string) => void', default: '-', description: 'Callback when selected value changes' },
    ],
  },
  {
    id: 'pagination',
    name: 'Pagination',
    path: '/docs/pagination',
    description: 'A page navigation component for splitting content across multiple pages.',
    comingSoon: false,
    demo: 'PaginationDemo',
    installCmd: 'npx snitchui@latest add pagination',
    deps: [
      { name: 'Pagination', file: 'components/ui/pagination/pagination.jsx', source: 'PAGINATION_SOURCE' },
      { name: '@radix-ui/react-slot', file: 'node_modules/@radix-ui/react-slot', source: null },
      { name: 'class-variance-authority', file: 'node_modules/class-variance-authority', source: null },
      { name: 'lucide-react', file: 'node_modules/lucide-react', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'page', type: 'number', default: '-', description: 'Controlled current page' },
      { prop: 'defaultPage', type: 'number', default: '1', description: 'Default page for uncontrolled usage' },
      { prop: 'totalPages', type: 'number', default: '-', description: 'Total number of pages' },
      { prop: 'onPageChange', type: '(page: number) => void', default: '-', description: 'Callback when the page changes' },
      { prop: 'siblingCount', type: 'number', default: '1', description: 'Page numbers shown on each side of the current page' },
      { prop: 'boundaryCount', type: 'number', default: '1', description: 'Page numbers always shown at the start and end' },
      { prop: 'showFirstLast', type: 'boolean', default: 'false', description: 'Show first and last page jump buttons' },
      { prop: 'disabled', type: 'boolean', default: 'false', description: 'Disables all pagination controls' },
      { prop: 'size', type: '"sm" | "md" | "lg"', default: '"md"', description: 'Size of the pagination controls' },
    ],
  },
  {
    id: 'table',
    name: 'Table',
    path: '/docs/table',
    description: 'A responsive data table with per-column sorting and search.',
    comingSoon: false,
    demo: 'TableDemo',
    installCmd: 'npx snitchui@latest add table',
    deps: [
      { name: 'Table', file: 'components/ui/table/table.jsx', source: 'TABLE_SOURCE' },
      { name: 'DataTable', file: 'components/ui/table/data-table.jsx', source: 'DATA_TABLE_SOURCE' },
      { name: 'Pagination', file: 'components/ui/pagination/pagination.jsx', source: 'PAGINATION_SOURCE' },
      { name: 'lucide-react', file: 'node_modules/lucide-react', source: null },
      { name: 'utils', file: 'lib/utils.js', source: 'UTILS_SOURCE' },
    ],
    props: [
      { prop: 'columns', type: 'Column[]', default: '-', description: 'Column config with key, header, sortable, searchable, accessor, render, width, align' },
      { prop: 'data', type: 'any[]', default: '[]', description: 'Row data to display' },
      { prop: 'pageSize', type: 'number', default: '10', description: 'Number of rows per page' },
      { prop: 'showPageSize', type: 'boolean', default: 'false', description: 'Show the rows-per-page selector' },
      { prop: 'pageSizeOptions', type: 'number[]', default: '[5, 10, 20, 50]', description: 'Options for the rows-per-page selector' },
      { prop: 'searchPlaceholder', type: 'string', default: '"Search..."', description: 'Placeholder for column search inputs' },
      { prop: 'emptyMessage', type: 'string', default: '"No results found."', description: 'Message shown when no rows match' },
      { prop: 'showActions', type: 'boolean', default: 'false', description: 'Append an actions column to the table' },
      { prop: 'actions', type: '(row) => ReactNode', default: '-', description: 'Render function for the actions column cell' },
      { prop: 'actionsHeader', type: 'string', default: '"Actions"', description: 'Header label for the actions column' },
    ],
  },

]

const sourceMap = { BUTTON_SOURCE, LABEL_SOURCE, INPUT_SOURCE, SELECT_SOURCE, UTILS_SOURCE, CHECKBOX_SOURCE, COMBOBOX_SOURCE, DATEPICKER_SOURCE, RADIOBUTTON_SOURCE, SWITCH_SOURCE, TEXTAREA_SOURCE, TIMEPICKER_SOURCE, CARD_SOURCE, BADGE_SOURCE, DIALOG_SOURCE, DROPDOWN_SOURCE, TABS_SOURCE, ACCORDION_SOURCE, AVATAR_SOURCE, ALERT_SOURCE, TOOLTIP_SOURCE, POPOVER_SOURCE, TOAST_SOURCE, SHEET_SOURCE, COMMAND_SOURCE, PAGINATION_SOURCE, TABLE_SOURCE, DATA_TABLE_SOURCE }

export function getComponent(id) {
  return components.find((c) => c.id === id)
}

export function resolveDeps(deps) {
  return deps.map((d) => ({ ...d, source: d.source ? sourceMap[d.source] : null }))
}