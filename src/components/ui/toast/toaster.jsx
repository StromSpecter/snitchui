import { Toaster as SonnerToaster } from 'sonner'
import { useTheme } from '../../../lib/theme.jsx'

function Toaster() {
  const { theme } = useTheme()

  return (
    <SonnerToaster
      theme={theme}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-background/80 group-[.toaster]:text-foreground group-[.toaster]:border-border/50 group-[.toaster]:shadow-lg group-[.toaster]:backdrop-blur-xl',
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

export { Toaster }
