import { forwardRef } from 'react'
import { cn } from '../../../lib/utils.js'

const inputVariants = {
  sm: 'h-8 px-2.5 text-xs',
  md: 'h-9 px-3 py-1 text-sm',
  lg: 'h-10 px-4 text-base',
}

const Input = forwardRef(
  ({ className, type, size = 'md', startIcon, endIcon, error, ...props }, ref) => {
    return (
      <div className={cn('relative', className)}>
        {startIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none [&_svg]:size-4">
            {startIcon}
          </div>
        )}
        <input
          type={type}
          className={cn(
            'flex w-full rounded-md border bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50',
            inputVariants[size],
            startIcon && 'pl-9',
            endIcon && 'pr-9',
            error
              ? 'border-destructive focus-visible:ring-destructive'
              : 'border-input focus-visible:ring-ring',
            className
          )}
          ref={ref}
          aria-invalid={error ? 'true' : undefined}
          {...props}
        />
        {endIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none [&_svg]:size-4">
            {endIcon}
          </div>
        )}
        {error && (
          <p className="mt-1 text-xs text-destructive">{error}</p>
        )}
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
