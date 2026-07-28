import { useParams } from 'react-router-dom'
import { components } from '../constants/components.js'
import { ButtonPage } from './ButtonPage.jsx'

const pageMap = {
  button: ButtonPage,
}

export function ComponentPage() {
  const { id } = useParams()
  const meta = components.find((c) => c.id === id)

  if (!meta) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-lg border border-border p-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            Component not found
          </h2>
          <p className="mt-2 text-muted-foreground">
            This component does not exist yet.
          </p>
        </div>
      </div>
    )
  }

  if (meta.comingSoon) {
    return (
      <div className="mx-auto max-w-4xl px-6 py-10">
        <div className="rounded-lg border border-border p-12 text-center">
          <h2 className="text-2xl font-semibold tracking-tight">
            {meta.name} — Coming Soon
          </h2>
          <p className="mt-2 text-muted-foreground">
            {meta.description}
          </p>
        </div>
      </div>
    )
  }

  const Page = pageMap[id]
  if (Page) return <Page />

  return <ButtonPage />
}
