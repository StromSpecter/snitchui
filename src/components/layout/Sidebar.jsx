import { NavLink } from 'react-router-dom'
import { cn } from '../../lib/utils.js'
import { X } from 'lucide-react'
import { components } from '../../constants/components.js'

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
          'fixed inset-y-0 left-0 z-50 w-64 border-r border-border bg-background transform transition-transform duration-200 lg:translate-x-0 overflow-y-auto',
          open ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-14 items-center border-b border-border px-6">
          <NavLink to="/" className="text-lg font-semibold tracking-tight">
            veloraui
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
          <div className="mb-3 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Getting Started
          </div>
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

          <div className="mb-3 mt-6 px-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Components
          </div>

          {components.map((c) => (
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
              {c.comingSoon && (
                <span className="ml-auto text-[10px] text-muted-foreground border border-border rounded px-1.5 py-0.5">
                  Soon
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}
