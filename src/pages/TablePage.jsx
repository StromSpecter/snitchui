import { TableDemo } from '../components/ui/table/table.demo.jsx'
import { CodeBlock } from '../components/ui/CodeBlock.jsx'
import { HighlightedCode } from '../components/ui/HighlightedCode.jsx'
import { CopyButton } from '../components/ui/CopyButton.jsx'
import { components, resolveDeps } from '../constants/components.js'

export function TablePage() {
  const meta = components.find((c) => c.id === 'table')
  const deps = resolveDeps(meta.deps)

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="mt-2 text-muted-foreground">{meta.description}</p>
      </div>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Preview</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl p-8">
          <TableDemo />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Installation
        </h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Run the CLI from your project root. It installs dependencies, the table component, and its required pagination component automatically.
        </p>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <div className="flex items-center justify-between bg-muted px-4 py-2.5 border-b border-border/50">
            <span className="text-sm font-medium">CLI</span>
            <CopyButton text={meta.installCmd} label="install-btn" />
          </div>
          <HighlightedCode code={meta.installCmd} language="bash" />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { DataTable } from '@/components/ui/table'
import { Pencil, Trash2 } from 'lucide-react'

const columns = [
  { key: 'name', header: 'Name', sortable: true, searchable: true },
  { key: 'email', header: 'Email', sortable: true, searchable: true },
  { key: 'role', header: 'Role', sortable: true, searchable: false },
]

export function Example() {
  const data = [
    { id: 1, name: 'Olivia Martin', email: 'olivia@example.com', role: 'Admin' },
    { id: 2, name: 'Jackson Lee', email: 'jackson@example.com', role: 'Member' },
  ]

  return (
    <DataTable
      columns={columns}
      data={data}
      pageSize={5}
      showPageSize
      showActions
      actions={(row) => (
        <div className="flex items-center justify-end gap-1">
          <button aria-label={\`Edit \${row.name}\`} className="p-2 text-muted-foreground hover:text-foreground">
            <Pencil className="size-3.5" />
          </button>
          <button aria-label={\`Delete \${row.name}\`} className="p-2 text-muted-foreground hover:text-destructive">
            <Trash2 className="size-3.5" />
          </button>
        </div>
      )}
    />
  )
}`}
        />
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Props</h2>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/50 backdrop-blur-sm">
                <th className="px-4 py-3 text-left font-medium">Prop</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Default</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {meta.props.map((p, i) => (
                <tr key={p.prop} className={i < meta.props.length - 1 ? 'border-b border-border/50' : ''}>
                  <td className="px-4 py-3 font-mono text-xs">{p.prop}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.default}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3 className="mb-2 mt-6 text-sm font-semibold tracking-tight">Column config</h3>
        <div className="rounded-lg border border-border/50 bg-card/70 backdrop-blur-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 bg-muted/50 backdrop-blur-sm">
                <th className="px-4 py-3 text-left font-medium">Key</th>
                <th className="px-4 py-3 text-left font-medium">Type</th>
                <th className="px-4 py-3 text-left font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                { key: 'key', type: 'string', desc: 'Unique column identifier, used to read the row value' },
                { key: 'header', type: 'string | ReactNode', desc: 'Column header content' },
                { key: 'sortable', type: 'boolean', desc: 'Enable ascending/descending sort on click (default false)' },
                { key: 'searchable', type: 'boolean', desc: 'Render a search input for this column (default false)' },
                { key: 'accessor', type: '(row) => any', desc: 'Custom value getter (defaults to row[key])' },
                { key: 'render', type: '(value, row) => ReactNode', desc: 'Custom cell renderer' },
                { key: 'sortFn', type: '(a, b) => number', desc: 'Custom comparator for sorting' },
                { key: 'width', type: 'string', desc: 'Tailwind width class, e.g. "min-w-[200px]" to force horizontal scroll' },
                { key: 'align', type: '"left" | "center" | "right"', desc: 'Cell and header alignment (default left)' },
              ].map((p, i) => (
                <tr key={p.key} className={i < 8 ? 'border-b border-border/50' : ''}>
                  <td className="px-4 py-3 font-mono text-xs">{p.key}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.type}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">Source</h2>
        {deps.map((dep) => (
          <div key={dep.file} className="mb-4">
            <CodeBlock code={dep.source} filename={dep.file} />
          </div>
        ))}
      </section>
    </div>
  )
}
