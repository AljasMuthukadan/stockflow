import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";

import LoginPage from "./pages/auth/LoginPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";

import DashboardLayout from "./layouts/DashboardLayout.jsx";

import DashboardPage from "./pages/DashboardPage.jsx";
import InventoryPage from "./pages/InventoryPage.jsx";
import ProductionPage from "./pages/ProductionPage.jsx";
import SuppliersPage from "./pages/SuppliersPage.jsx";
import PurchaseOrdersPage from "./pages/PurchaseOrdersPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import SalesOrdersPage from "./pages/SalesOrdersPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>

          {/* /dashboard */}
          <Route index element={<DashboardPage />} />

          {/* /dashboard/inventory */}
          <Route path="inventory" element={<InventoryPage />} />

          {/* /dashboard/production */}
          <Route path="production" element={<ProductionPage />} />

          {/* /dashboard/suppliers */}
          <Route path="suppliers" element={<SuppliersPage />} />

          {/* /dashboard/purchase */}
          <Route path="purchase" element={<PurchaseOrdersPage />} />

          {/* /dashboard/reports */}
          <Route path="reports" element={<ReportsPage />} />

          {/* /dashboard/settings */}
          <Route path="settings" element={<SettingsPage />} />

          {/* /dashboard/sales */}
          <Route path="sales" element={<SalesOrdersPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  </StrictMode>
);