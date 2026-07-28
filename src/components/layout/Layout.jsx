import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar.jsx'
import { Header } from './Header.jsx'

export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex flex-col min-w-0 lg:ml-64">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
          <p>Built with React + Tailwind CSS. Inspired by shadcn/ui.</p>
        </footer>
      </div>
    </div>
  )
}
