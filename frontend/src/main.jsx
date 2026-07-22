import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AdminProvider } from './context/Admincontext.jsx'
import { AppProvider } from './context/AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
    <AuthProvider>
    <AdminProvider>
    <AppProvider>
      
    <App />

    </AppProvider>
    </AdminProvider>
    </AuthProvider>
        </BrowserRouter>

  </StrictMode>,
)
