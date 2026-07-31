import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Route, Routes} from "react-router-dom"
import RegisterPage from './pages/auth/RegisterPage.jsx';
import LoginPage  from './pages/auth/LoginPage.jsx';
import DashboardPage from './pages/DashboardPage.jsx';
import DashboardLayout from './layouts/DashboardLayout.jsx';
import InventoryPage from './pages/InventoryPage.jsx';
import ProductionPage from './pages/ProductionPage.jsx';
import SuppliersPage from './pages/SuppliersPage.jsx';
import PurchaseOrdersPage from './pages/PurchaseOrdersPage.jsx';
import ReportsPage from './pages/ReportsPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import SalesOrdersPage from './pages/SalesOrdersPage.jsx';


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
       <Route path="inventory" element={<InventoryPage />} />
        <Route path="production" element={<ProductionPage />} />
        <Route path="suppliers" element={<SuppliersPage />} />
        <Route path="purchase" element={<PurchaseOrdersPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage/>} />
        <Route path="sales" element={<SalesOrdersPage />} />
      </Route>
      
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
