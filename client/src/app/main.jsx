import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App.jsx";

import LoginPage from "../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../features/auth/pages/RegisterPage.jsx";

import DashboardLayout from "../layouts/DashboardLayout.jsx";

import DashboardPage from "../features/dashboard/pages/DashboardPage.jsx";
import InventoryPage from "../features/inventory/pages/InventoryPage.jsx";
import ProductionPage from "../features/production/pages/ProductionPage.jsx";
import SuppliersPage from "../features/suppliers/pages/SuppliersPage.jsx";
import PurchaseOrdersPage from "../features/purchases/pages/PurchaseOrdersPage.jsx";
import ReportsPage from "../features/reports/pages/ReportsPage.jsx";
import SettingsPage from "../features/settings/pages/SettingsPage.jsx";
import SalesOrdersPage from "../features/sales/pages/SalesOrdersPage.jsx";

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