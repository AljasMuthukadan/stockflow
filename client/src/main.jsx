import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import RegisterPage from './pages/auth/RegisterPage.jsx';
import { LoginPage } from './pages/auth/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      {/** Dashboard Routes */}
      <Route  path="/dashboard" element={<DashboardLayout/>} >
       <Route index element={<DashboardPage />} />
      </Route>
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
