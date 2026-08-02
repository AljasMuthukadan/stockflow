import {
  LayoutDashboard,
  Package,
  Users,
  Factory,
  ShoppingCart,
  Truck,
  FileBarChart2,
  Settings,
} from "lucide-react";

export const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },

  {
    title: "Inventory",
    icon: Package,
    path: "/dashboard/inventory",
  },
  {
    title: "Suppliers",
    icon: Users,
    path    : "/dashboard/suppliers",
  },

  {
    title: "Production",
    icon: Factory,
    path: "/dashboard/production",
  },

  {
    title: "Sales & Orders",
    icon: ShoppingCart,
    path: "/dashboard/sales",
    dropdown: true,
  },

  {
    title: "Purchases",
    icon: Truck,
    path: "/dashboard/purchase",
    dropdown: true,
  },

  {
    title: "Reports",
    icon: FileBarChart2,
    path: "/dashboard/reports",
  },

  {
    title: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
  },
];