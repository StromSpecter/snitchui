import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from './table.jsx'
import { DataTable } from './data-table.jsx'
import { Badge } from '../badge/badge.jsx'
import { Pencil, Trash2 } from 'lucide-react'

const invoices = [
  { invoice: 'INV001', status: 'Paid', method: 'Credit Card', amount: 250.0 },
  { invoice: 'INV002', status: 'Pending', method: 'PayPal', amount: 150.0 },
  { invoice: 'INV003', status: 'Unpaid', method: 'Bank Transfer', amount: 350.0 },
  { invoice: 'INV004', status: 'Paid', method: 'Credit Card', amount: 450.0 },
  { invoice: 'INV005', status: 'Paid', method: 'PayPal', amount: 550.0 },
  { invoice: 'INV006', status: 'Pending', method: 'Bank Transfer', amount: 200.0 },
]

const users = [
  { id: 1, name: 'Olivia Martin', email: 'olivia@example.com', role: 'Admin', status: 'Active', joined: '2024-01-12', company: 'Acme Corp' },
  { id: 2, name: 'Jackson Lee', email: 'jackson@example.com', role: 'Member', status: 'Active', joined: '2024-02-03', company: 'Globex' },
  { id: 3, name: 'Isabella Nguyen', email: 'isabella@example.com', role: 'Editor', status: 'Inactive', joined: '2023-11-19', company: 'Initech' },
  { id: 4, name: 'William Kim', email: 'william@example.com', role: 'Member', status: 'Active', joined: '2024-05-27', company: 'Umbrella Corp' },
  { id: 5, name: 'Sofia Davis', email: 'sofia@example.com', role: 'Admin', status: 'Active', joined: '2023-08-09', company: 'Stark Industries' },
  { id: 6, name: 'Ethan Walker', email: 'ethan@example.com', role: 'Viewer', status: 'Inactive', joined: '2024-03-30', company: 'Wayne Enterprises' },
  { id: 7, name: 'Ava Robinson', email: 'ava@example.com', role: 'Editor', status: 'Active', joined: '2024-06-14', company: 'ACME Corp' },
  { id: 8, name: 'Lucas Brown', email: 'lucas@example.com', role: 'Member', status: 'Pending', joined: '2024-07-01', company: 'Hooli' },
  { id: 9, name: 'Mia Garcia', email: 'mia@example.com', role: 'Viewer', status: 'Active', joined: '2023-12-05', company: 'Pied Piper' },
  { id: 10, name: 'Noah Miller', email: 'noah@example.com', role: 'Admin', status: 'Inactive', joined: '2024-04-18', company: 'Vandelay Industries' },
  { id: 11, name: 'Emma Wilson', email: 'emma@example.com', role: 'Member', status: 'Active', joined: '2024-08-22', company: 'Dunder Mifflin' },
  { id: 12, name: 'Liam Taylor', email: 'liam@example.com', role: 'Editor', status: 'Pending', joined: '2024-09-10', company: 'Northwind' },
  { id: 13, name: 'Charlotte Moore', email: 'charlotte@example.com', role: 'Viewer', status: 'Active', joined: '2023-10-28', company: 'Contoso' },
]

const columns = [
  {
    key: 'name',
    header: 'Name',
    sortable: true,
    searchable: true,
    width: 'min-w-[180px]',
  },
  {
    key: 'email',
    header: 'Email',
    sortable: true,
    searchable: true,
    width: 'min-w-[200px]',
  },
  {
    key: 'role',
    header: 'Role',
    sortable: true,
    searchable: true,
    width: 'min-w-[120px]',
  },
  {
    key: 'status',
    header: 'Status',
    sortable: true,
    searchable: true,
    width: 'min-w-[120px]',
    render: (value) => (
      <Badge
        variant={
          value === 'Active'
            ? 'success'
            : value === 'Inactive'
              ? 'secondary'
              : 'warning'
        }
      >
        {value}
      </Badge>
    ),
  },
  {
    key: 'company',
    header: 'Company',
    sortable: false,
    searchable: true,
    width: 'min-w-[180px]',
  },
  {
    key: 'joined',
    header: 'Joined',
    sortable: true,
    searchable: false,
    width: 'min-w-[140px]',
  },
]

export function TableDemo() {
  return (
    <div className="space-y-10">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Static Table
        </h3>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="font-medium">{invoice.invoice}</TableCell>
                <TableCell>{invoice.status}</TableCell>
                <TableCell>{invoice.method}</TableCell>
                <TableCell className="text-right">
                  ${invoice.amount.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">
                ${invoices.reduce((sum, i) => sum + i.amount, 0).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Data Table — Sort &amp; Search
        </h3>
        <p className="mb-4 text-xs text-muted-foreground">
          Click a column header to sort. Each searchable column has its own
          search input. Horizontally scrollable when columns exceed container
          width.
        </p>
        <DataTable
          columns={columns}
          data={users}
          showPageSize
          pageSize={5}
        />
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">
          Data Table — With Actions Column
        </h3>
        <p className="mb-4 text-xs text-muted-foreground">
          Pass <code className="text-xs bg-muted px-1.5 py-0.5 rounded">showActions</code> and an{' '}
          <code className="text-xs bg-muted px-1.5 py-0.5 rounded">actions</code> render function to
          append an action column.
        </p>
        <DataTable
          columns={columns}
          data={users}
          pageSize={5}
          showActions
          actions={(row) => (
            <div className="flex items-center justify-end gap-1">
              <button
                type="button"
                aria-label={`Edit ${row.name}`}
                className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Pencil className="size-3.5" />
              </button>
              <button
                type="button"
                aria-label={`Delete ${row.name}`}
                className="flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="size-3.5" />
              </button>
            </div>
          )}
        />
      </section>
    </div>
  )
}
