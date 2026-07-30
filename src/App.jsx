import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Installation } from './pages/Installation.jsx'
import { FileStructurePage } from './pages/FileStructurePage.jsx'
import { CLIPage } from './pages/CLIPage.jsx'
import { ThemingPage } from './pages/ThemingPage.jsx'
import { SigninPage } from './pages/SigninPage.jsx'
import { SignupPage } from './pages/SignupPage.jsx'
import { ComponentPage } from './pages/ComponentPage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="docs/cli" element={<CLIPage />} />
        <Route path="docs/theming" element={<ThemingPage />} />
        <Route path="docs/installation" element={<Installation />} />
        <Route path="docs/file-structure" element={<FileStructurePage />} />
        <Route path="docs/signin" element={<SigninPage />} />
        <Route path="docs/signup" element={<SignupPage />} />
        <Route path="docs/:id" element={<ComponentPage />} />
      </Route>
    </Routes>
  )
}

export default App
