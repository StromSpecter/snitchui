import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem, DropdownSeparator, DropdownLabel } from './dropdown.jsx'
import { Button } from '../button/button.jsx'
import { User, Settings, LogOut, ChevronDown } from 'lucide-react'

export function DropdownDemo() {
  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">Default Dropdown</h3>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="outline">
              Options <ChevronDown className="size-4" />
            </Button>
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem onClick={() => alert('Profile clicked')}>
              <User className="mr-2 size-4" />
              Profile
            </DropdownItem>
            <DropdownItem onClick={() => alert('Settings clicked')}>
              <Settings className="mr-2 size-4" />
              Settings
            </DropdownItem>
            <DropdownSeparator />
            <DropdownItem onClick={() => alert('Logout clicked')}>
              <LogOut className="mr-2 size-4" />
              Logout
            </DropdownItem>
          </DropdownContent>
        </Dropdown>
      </section>

      <section>
        <h3 className="mb-4 text-sm font-medium text-muted-foreground">With Label & Align End</h3>
        <Dropdown>
          <DropdownTrigger asChild>
            <Button variant="secondary">
              User Menu <ChevronDown className="size-4" />
            </Button>
          </DropdownTrigger>
          <DropdownContent align="end">
            <DropdownLabel>Account</DropdownLabel>
            <DropdownItem>Profile</DropdownItem>
            <DropdownItem>Billing</DropdownItem>
            <DropdownSeparator />
            <DropdownLabel>Actions</DropdownLabel>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </section>
    </div>
  )
}
