import { Link } from 'react-router-dom'
import { components } from '../constants/components.js'

const features = [
  { label: 'React 19', desc: 'Built with latest React' },
  { label: 'Tailwind CSS v4', desc: 'Utility-first styling' },
  { label: 'Dark Mode', desc: 'Auto light & dark' },
  { label: 'Accessible', desc: 'Keyboard & ARIA' },
  { label: 'Responsive', desc: 'Mobile first' },
  { label: 'Tree-shakable', desc: 'Import only what you use' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-gradient-to-b from-background to-muted/30 px-6 py-16 sm:py-24">
      {/* Decorative blur */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          SnitchUI
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A modern UI component library inspired by shadcn/ui.
          Copy-paste ready components built with React &amp; Tailwind CSS.
          Open source, free to use, and easy to customize.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/docs/installation"
            className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
          >
            Get Started
            <svg
              className="size-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <Link
            to="/docs/button"
            className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Browse Components
          </Link>
        </div>

        {/* Feature badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {features.map((f) => (
            <span
              key={f.label}
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            >
              <span className="size-1.5 rounded-full bg-primary" />
              {f.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Home() {
  const available = components.filter((c) => !c.comingSoon)
  const planned = components.filter((c) => c.comingSoon)

  return (
    <div className="mx-auto max-w-5xl px-6 py-10">
      <Hero />

      <section className="mt-16">
        <h2 className="mb-6 text-2xl font-bold tracking-tight">
          Available Components
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {available.map((c) => (
            <Link
              key={c.id}
              to={c.path}
              className="group rounded-xl border border-border p-5 hover:border-ring hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-8 items-center justify-center rounded-md bg-primary/10 text-primary text-xs font-bold">
                  {c.name.charAt(0)}
                </span>
                <h3 className="font-semibold group-hover:text-primary transition-colors">
                  {c.name}
                </h3>
              </div>
              <p className="mt-2 text-sm text-muted-leading-relaxed">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {planned.length > 0 && (
        <section className="mt-16">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">
            Coming Soon
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {planned.map((c) => (
              <div
                key={c.id}
                className="rounded-xl border border-border p-5 opacity-60"
              >
                <div className="flex items-center gap-2">
                  <span className="flex size-8 items-center justify-center rounded-md bg-muted text-muted-foreground text-xs font-bold">
                    {c.name.charAt(0)}
                  </span>
                  <h3 className="font-semibold">{c.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {c.description}
                </p>
                <span className="mt-3 inline-block text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-0.5">
                  Soon
                </span>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16 mb-8">
        <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Ready to get started?
          </h2>
          <p className="mt-2 text-muted-foreground max-w-md mx-auto">
            Install snitchui via CLI and start building beautiful interfaces
            in seconds.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/docs/installation"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors"
            >
              Install snitchui
            </Link>
            <Link
              to="/docs/button"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              Documentation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}