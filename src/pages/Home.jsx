import { Link } from 'react-router-dom'
import { components } from '../constants/components.js'

export function Home() {
  const available = components.filter((c) => !c.comingSoon)
  const planned = components.filter((c) => c.comingSoon)

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          uitemplate
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
          A growing collection of copy-paste UI components built with
          React & Tailwind CSS.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/docs/installation"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground text-sm font-medium shadow-sm hover:bg-primary/90 transition-colors"
          >
            Get Started
          </Link>
          <Link
            to="/docs/button"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-input bg-background text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Browse Components
          </Link>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">
          Available Components
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {available.map((c) => (
            <Link
              key={c.id}
              to={c.path}
              className="group rounded-lg border border-border p-5 hover:border-ring transition-colors"
            >
              <h3 className="font-medium group-hover:text-foreground transition-colors">
                {c.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {c.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {planned.length > 0 && (
        <section>
          <h2 className="mb-6 text-2xl font-semibold tracking-tight">
            Coming Soon
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {planned.map((c) => (
              <div
                key={c.id}
                className="rounded-lg border border-border p-5 opacity-50"
              >
                <h3 className="font-medium">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {c.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
