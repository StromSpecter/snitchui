import { Combobox, ComboboxItem } from './combobox.jsx'
import { useState } from 'react'

export function ComboboxDemo() {
  const [selected, setSelected] = useState([])

  const frameworks = [
    'React', 'Vue', 'Svelte', 'Angular',
    'Solid', 'Preact', 'Lit', 'Qwik',
  ]
  const fruits = [
    'Apple', 'Banana', 'Blueberry',
    'Grapes', 'Orange', 'Pineapple',
  ]

  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Multi-Select</h3>
        <Combobox
          value={selected}
          onChange={setSelected}
          placeholder="Select frameworks"
        >
          {frameworks.map((fw) => (
            <ComboboxItem key={fw} value={fw}>
              {fw}
            </ComboboxItem>
          ))}
        </Combobox>
        <p className="mt-2 text-sm text-muted-foreground">
          Selected: {selected.length ? selected.join(', ') : 'none'}
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Search</h3>
        <Combobox
          value={selected}
          onChange={setSelected}
          placeholder="Pick fruits (try typing 'ap')"
          searchPlaceholder="Search fruits..."
        >
          {fruits.map((fw) => (
            <ComboboxItem key={fw} value={fw}>
              {fw}
            </ComboboxItem>
          ))}
        </Combobox>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Empty State</h3>
        <Combobox
          value={[]}
          placeholder="Select items"
          emptyMessage="Nothing to show here."
        >
          {[]}
        </Combobox>
      </section>
    </div>
  )
}
