import { BrowserRouter } from 'react-router-dom'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import AuthProvider from './context/AuthProvider'
import PermissionProvider from './context/PermissionContext'
import { AppProvider } from './context/appContext'

function App() {
  return (
    <BrowserRouter>
      <div data-theme="finance" className="min-h-screen bg-background font-sans text-foreground">
        <AuthProvider>
          <PermissionProvider>
            <AppProvider>
              <AppRoutes />
            </AppProvider>
          </PermissionProvider>
        </AuthProvider>
      </div>
    </BrowserRouter>
  )
}

export default App

