import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

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

const RadioButtonLabel = forwardRef(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Label
      className={cn('text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', className)}
      ref={ref}
      {...props}
    />
  )
})
RadioButtonLabel.displayName = 'RadioButtonLabel'

export { RadioButtonGroup, RadioButtonItem, RadioButtonLabel }
