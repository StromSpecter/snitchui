import { Menu, Moon, Star, Sun } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../lib/theme.jsx'
import { useState, useEffect } from 'react'

function StarCount() {
  const [stars, setStars] = useState(null)

  useEffect(() => {
    fetch('https://api.github.com/repos/StromSpecter/snitchui')
      .then((r) => r.json())
      .then((data) => setStars(data.stargazers_count))
      .catch(() => {})
  }, [])

  if (stars === null) return null

  return (
    <span className="flex items-center gap-1 text-xs text-muted-foreground">
      <Star className="size-3.5 fill-yellow-400 text-yellow-400" />
      {stars.toLocaleString()}
    </span>
  )
}

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/docs/installation', label: 'Install' },
  { to: '/docs/button', label: 'Button' },
]

export function Header({ onMenuClick }) {
  const { theme, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-lg font-bold tracking-tight">
          snitchui
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <StarCount />

          <button
            onClick={toggle}
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>

          <a
            href="https://github.com/StromSpecter/snitchui"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          <button
            className="lg:hidden"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
