import { CodeBlock } from '../components/ui/CodeBlock.jsx'

const componentTree = `src/
├── lib/
│   └── utils.js              # cn() utility (auto-created on first add)
└── components/
    └── ui/
        ├── button/
        │   ├── button.jsx     # Button component
        │   └── index.js       # Barrel export
        ├── input/
        │   ├── input.jsx      # Input component
        │   └── index.js
        ├── card/
        │   ├── card.jsx       # Card + subcomponents
        │   └── index.js
        └── ...                # More components`

const templateTree = `src/
└── pages/
    ├── SigninPage.jsx   # Signin template (preview + code)
    └── SignupPage.jsx   # Signup template (preview + code)`

export function FileStructurePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">File Structure</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">
          SnitchUI CLI scaffolds components and templates into predictable
          locations inside your <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/</code> directory.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Components</h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Running <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">npx snitchui@latest add button</code> creates files inside
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono"> src/components/ui/{'{name}'}/</code>. Each component gets its own
          folder with the component file and a barrel <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">index.js</code>
          for IDE auto-import.
        </p>
        <CodeBlock code={componentTree} filename="src/" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Templates</h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Running <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">npx snitchui@latest add-template signin</code> creates a
          page file inside <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/pages/</code>. The CLI also patches
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono"> App.jsx</code> (adds route) and <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">Sidebar.jsx</code> (adds nav entry).
        </p>
        <CodeBlock code={templateTree} filename="src/" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Auto-updated files</h2>

        <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-6">
          <h3 className="mb-3 text-sm font-semibold">App.jsx</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Route added by <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">add-template</code>:
          </p>
          <CodeBlock code={`<Route path="docs/signin" element={<SigninPage />} />`} filename="src/App.jsx" />
        </div>

        <div className="rounded-xl border border-border/50 bg-card/70 backdrop-blur-xl p-6 mt-4">
          <h3 className="mb-3 text-sm font-semibold">Sidebar.jsx</h3>
          <p className="text-sm text-muted-foreground mb-3">
            Navigation entry added by <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">add-template</code>:
          </p>
          <CodeBlock code={`<NavLink to="/docs/signin" />`} filename="src/components/layout/Sidebar.jsx" />
        </div>
      </section>
    </div>
  )
}
