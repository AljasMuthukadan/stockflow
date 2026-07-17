import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import RegisterPage from './pages/auth/RegisterPage.jsx';
import { LoginPage } from './pages/auth/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
