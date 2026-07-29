import { Combobox, ComboboxItem } from './combobox.jsx'
import { useState } from 'react'

export function ComboboxDemo() {
  const [selected, setSelected] = useState([])
  const frameworks = ['React', 'Vue', 'Svelte', 'Angular', 'Solid', 'Preact', 'Lit', 'Qwik']

  return (
    <div className="space-y-4">
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
      <div className="text-sm text-muted-foreground">
        Selected: {selected.length ? selected.join(', ') : 'none'}
      </div>
      <Combobox
        value={selected}
        onChange={setSelected}
        placeholder="Multi-select (try typing 'Re')"
      >
        {frameworks.map((fw) => (
          <ComboboxItem key={fw} value={fw}>
            {fw}
          </ComboboxItem>
        ))}
      </Combobox>
    </div>
  )
}
