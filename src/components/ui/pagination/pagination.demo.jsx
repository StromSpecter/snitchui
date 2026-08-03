import { useState } from 'react'
import { Pagination } from './pagination.jsx'

export function PaginationDemo() {
  return (
    <div className="space-y-10">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Default</h3>
        <ControlledDemo totalPages={10} />
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With First / Last</h3>
        <ControlledDemo totalPages={10} showFirstLast />
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Sizes</h3>
        <div className="space-y-4">
          <ControlledDemo totalPages={5} size="sm" />
          <ControlledDemo totalPages={5} size="md" />
          <ControlledDemo totalPages={5} size="lg" />
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Many Pages</h3>
        <ControlledDemo totalPages={50} siblingCount={1} />
        <p className="mt-2 text-xs text-muted-foreground">
          Ellipsis renders when sibling pages fall outside the window.
        </p>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Disabled</h3>
        <ControlledDemo totalPages={6} disabled />
      </section>
    </div>
  )
}

function ControlledDemo({ totalPages, size, showFirstLast, disabled }) {
  const [page, setPage] = useState(1)

  return (
    <div>
      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
        size={size}
        showFirstLast={showFirstLast}
        disabled={disabled}
      />
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Current page: {page}
      </p>
    </div>
  )
}
