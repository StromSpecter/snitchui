import { Menu, Moon, Search, Star, Sun } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTheme } from '../../lib/theme.jsx'
import { components } from '../../constants/components.js'

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

function MobileSearchModal({ open, onClose }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const available = components.filter((c) => !c.comingSoon)

  useEffect(() => {
    if (open) {
      inputRef.current?.focus()
    } else {
      setQuery('')
    }
  }, [open])

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [onClose])

  const results = query
    ? available.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSelect = (id) => {
    navigate(`/docs/${id}`)
    setQuery('')
    onClose()
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 bg-black/50 lg:hidden"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-lg border border-border bg-background shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search components..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            aria-label="Search components"
          />
          <button
            onClick={onClose}
        className="text-muted-foreground hover:text-foreground"
            aria-label="Close search"
          >
            ✕
          </button>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {query && results.length > 0 ? (
            <ul className="py-1">
              {results.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleSelect(c.id)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <Search className="size-3.5 text-muted-foreground" />
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          ) : query ? (
            <p className="px-4 py-3 text-sm text-muted-foreground">
              No results found
            </p>
          ) : (
            <ul className="py-1">
              {available.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleSelect(c.id)}
                    className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export function Header({ onMenuClick }) {
  const { theme, toggle } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-6">
        <Link to="/" className="text-lg font-bold tracking-tight block md:hidden">
          snitchui
        </Link>

        {/* Desktop: inline search */}
        <div className="hidden lg:block">
          <DesktopSearch />
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile: search icon */}
          <button
            className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setSearchOpen(true)}
            aria-label="Search components"
          >
            <Search className="size-5" />
          </button>

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
            className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            aria-label="GitHub"
          >
          <StarCount />

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

      <MobileSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}

function DesktopSearch() {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const navigate = useNavigate()
  const available = components.filter((c) => !c.comingSoon)

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  const results = query
    ? available.filter((c) =>
        c.name.toLowerCase().includes(query.toLowerCase())
      )
    : []

  const handleSelect = (id) => {
    navigate(`/docs/${id}`)
    setQuery('')
    setOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search components..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          className="h-9 w-40 rounded-md border border-border bg-background pl-8 pr-3 text-sm outline-none transition-colors focus:w-64 focus:border-ring focus:ring-1 focus:ring-ring sm:w-48 lg:w-56"
          aria-label="Search components"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('')
              setOpen(false)
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {open && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 rounded-lg border border-border bg-background shadow-lg">
          <ul className="py-1">
            {results.map((c) => (
              <li key={c.id}>
                <button
                  onClick={() => handleSelect(c.id)}
                  className="flex w-full items-center gap-2 px-4 py-2 text-sm text-left hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Search className="size-3.5 text-muted-foreground" />
                  {c.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {open && query && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 z-50 rounded-lg border border-border bg-background px-4 py-2 text-sm text-muted-foreground shadow-lg">
          No results found
        </div>
      )}
    </div>
  )
}
