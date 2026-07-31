import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/layout/Layout.jsx'
import { Home } from './pages/Home.jsx'
import { Installation } from './pages/Installation.jsx'
import { FileStructurePage } from './pages/FileStructurePage.jsx'
import { CLIPage } from './pages/CLIPage.jsx'
import { ThemingPage } from './pages/ThemingPage.jsx'
import { SigninPage } from './pages/SigninPage.jsx'
import { SignupPage } from './pages/SignupPage.jsx'
import { ForgotPasswordPage } from './pages/ForgotPasswordPage.jsx'
import { ResetPasswordPage } from './pages/ResetPasswordPage.jsx'
import { CheckEmailPage } from './pages/CheckEmailPage.jsx'
import { VerifyEmailPage } from './pages/VerifyEmailPage.jsx'
import { EmailVerifiedPage } from './pages/EmailVerifiedPage.jsx'
import { OtpVerificationPage } from './pages/OtpVerificationPage.jsx'
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
        <Route path="docs/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="docs/reset-password" element={<ResetPasswordPage />} />
        <Route path="docs/check-email" element={<CheckEmailPage />} />
        <Route path="docs/verify-email" element={<VerifyEmailPage />} />
        <Route path="docs/email-verified" element={<EmailVerifiedPage />} />
        <Route path="docs/otp-verification" element={<OtpVerificationPage />} />
        <Route path="docs/:id" element={<ComponentPage />} />
      </Route>
    </Routes>
  )
}

export default App
