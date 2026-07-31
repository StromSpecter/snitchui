import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils.js'
import { X, ChevronDown } from 'lucide-react'
import { components } from '../../constants/components.js'

function CollapsibleSection({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="space-y-1">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-2 px-3 py-1.5 text-xs font-medium text-muted-foreground uppercase tracking-wider transition-colors hover:text-foreground"
      >
        {title}
        <ChevronDown
          className={cn(
            'ml-auto size-3 transition-transform duration-200',
            open ? 'rotate-180' : ''
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-200',
          open ? 'max-h-[2000px]' : 'max-h-0'
        )}
      >
        <div className="space-y-0.5 px-1">{children}</div>
      </div>
    </div>
  )
}

export function Sidebar({ open, onClose }) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 border-r border-border/50 bg-background/95 transform transition-transform duration-200 lg:translate-x-0 overflow-y-auto',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-14 items-center border-b border-border px-6">
          <NavLink to="/" className="text-lg font-semibold tracking-tight">
            SnitchUI
          </NavLink>
          <button
            className="ml-auto lg:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="size-5" />
          </button>
        </div>

        <nav className="space-y-1 p-4">
          <CollapsibleSection title="Getting Started">
            <NavLink
              to="/"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              Introduction
            </NavLink>
            <NavLink
              to="/docs/installation"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              Installation
            </NavLink>
            <NavLink
              to="/docs/file-structure"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              File Structure
            </NavLink>
            <NavLink
              to="/docs/cli"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              CLI
            </NavLink>
            <NavLink
              to="/docs/theming"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              Theming
            </NavLink>
          </CollapsibleSection>

          <CollapsibleSection title="Templates">
            <NavLink
              to="/docs/signin"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Signin</span>
            </NavLink>
            <NavLink
              to="/docs/signup"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Signup</span>
            </NavLink>
            <NavLink
              to="/docs/forgot-password"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Forgot Password</span>
            </NavLink>
            <NavLink
              to="/docs/reset-password"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Reset Password</span>
            </NavLink>
            <NavLink
              to="/docs/check-email"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Check Your Email</span>
            </NavLink>
            <NavLink
              to="/docs/verify-email"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Verify Email</span>
            </NavLink>
            <NavLink
              to="/docs/email-verified"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>Email Verified</span>
            </NavLink>
            <NavLink
              to="/docs/otp-verification"
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-accent text-accent-foreground font-medium'
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )
              }
            >
              <span>OTP Verification</span>
            </NavLink>
          </CollapsibleSection>

          <CollapsibleSection title="Components">
            {[...components]
              .filter((c) => !c.comingSoon)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((c) => (
                <NavLink
                  key={c.id}
                  to={c.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )
                  }
                >
                  <span>{c.name}</span>
                </NavLink>
              ))}

            {[...components]
              .filter((c) => c.comingSoon)
              .sort((a, b) => a.name.localeCompare(b.name))
              .map((c) => (
                <NavLink
                  key={c.id}
                  to={c.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    cn(
                      'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                      isActive
                        ? 'bg-accent text-accent-foreground font-medium'
                        : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                    )
                  }
                >
                  <span>{c.name}</span>
                  <span className="ml-auto text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
                    Soon
                  </span>
                </NavLink>
              ))}
          </CollapsibleSection>
        </nav>
      </aside>
    </>
  )
}