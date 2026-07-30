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
└── components/
    └── templates/
        ├── SigninForm.jsx   # Signin form component
        └── SignupForm.jsx   # Signup form component`

export function FileStructurePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
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
          for IDE auto-import. You can add multiple at once:
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono"> npx snitchui@latest add button input select card</code>.
        </p>
        <CodeBlock code={componentTree} filename="src/" />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Templates</h2>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
          Running <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">npx snitchui@latest add-template signin</code> creates a
          reusable form component inside <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">src/components/templates/</code>.
          Missing UI components (<code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">button</code>,
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono"> input</code>,
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono"> label</code>,
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono"> card</code>) are auto-installed. No route or sidebar
          updates — just import and use.
        </p>
        <CodeBlock code={templateTree} filename="src/" />
      </section>
    </div>
  )
}
