import { CodeBlock } from '../components/ui/CodeBlock.jsx'

const COMMANDS = [
  {
    name: 'npx snitchui@latest add',
    desc: 'Scaffold one or more components into your project.',
    usage: 'npx snitchui@latest add button input select',
    example: null,
  },
  {
    name: 'npx snitchui@latest add-template',
    desc: 'Scaffold a page template with preview and code.',
    usage: 'npx snitchui@latest add-template signin signup',
    example: null,
  },
  {
    name: 'npx snitchui@latest remove',
    desc: 'Remove a component and its files from your project.',
    usage: 'npx snitchui@latest remove button',
    example: null,
  },
  {
    name: 'npx snitchui@latest list',
    desc: 'List all available components with their status.',
    usage: 'npx snitchui@latest list',
    example: null,
  },
  {
    name: 'npx snitchui@latest init',
    desc: 'Initialize SnitchUI configuration in an existing project.',
    usage: 'npx snitchui@latest init',
    example: null,
  },
  {
    name: 'npx snitchui@latest update',
    desc: 'Update all scaffolded components to the latest version.',
    usage: 'npx snitchui@latest update',
    example: null,
  },
]

export function CLIPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">CLI</h1>
        <p className="mt-2 text-muted-foreground">
          SnitchUI ships a CLI for scaffolding and managing components.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Installation</h2>
        <p className="text-sm text-muted-foreground mb-4">
          No install needed. The CLI is bundled with the <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">snitchui</code> package and runs via <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">npx</code>.
        </p>
        <CodeBlock code={`npx snitchui@latest --help`} filename="Terminal" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Commands</h2>
        <div className="space-y-6">
          {COMMANDS.map((cmd) => (
            <div key={cmd.name} className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary font-mono text-sm font-bold">
                  $
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold font-mono text-sm">{cmd.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{cmd.desc}</p>
                  <div className="mt-3">
                    <CodeBlock code={cmd.usage} filename="Terminal" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Component Aliases</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Use any of the following aliases when adding components:
        </p>
        <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-4">
          <code className="font-mono text-sm text-muted-foreground">
            button &middot; label &middot; input &middot; select &middot; checkbox &middot; combobox &middot; datepicker &middot; radiobutton &middot; switch &middot; textarea &middot; timepicker &middot; card &middot; badge &middot; dialog &middot; dropdown &middot; tabs &middot; accordion &middot; avatar &middot; alert
          </code>
        </div>
      </section>
    </div>
  )
}