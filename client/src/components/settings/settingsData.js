import {
  Building2,
  Users,
  Boxes,
  Factory,
  ShoppingCart,
  BadgeDollarSign,
  Bell,
  Shield,
  Puzzle,
  DatabaseBackup,
  Moon,
  Mail,
  Cloud,
  TriangleAlert,
  ClipboardList,
  ShoppingCartIcon,
  Lock,
  Monitor,
  Trash2,
  FileDown,
  FileText,
  Wrench,
} from "lucide-react";

/* ---------------- Left Menu ---------------- */

export const settingsMenu = [
  {
    title: "General",
    icon: Building2,
    active: true,
  },
  {
    title: "Company Profile",
    icon: Building2,
  },
  {
    title: "Users & Roles",
    icon: Users,
  },
  {
    title: "Inventory Settings",
    icon: Boxes,
  },
  {
    title: "Production Settings",
    icon: Factory,
  },
  {
    title: "Purchase Settings",
    icon: ShoppingCart,
  },
  {
    title: "Sales Settings",
    icon: BadgeDollarSign,
  },
  {
    title: "Notifications",
    icon: Bell,
  },
  {
    title: "Security",
    icon: Shield,
  },
  {
    title: "Integrations",
    icon: Puzzle,
  },
  {
    title: "Backup & Restore",
    icon: DatabaseBackup,
  },
];

/* ---------------- Preferences ---------------- */

export const preferences = [
  {
    title: "Dark Mode",
    description: "Enable dark theme",
    icon: Moon,
    enabled: false,
    color: "purple",
  },
  {
    title: "Email Notifications",
    description: "Receive email alerts",
    icon: Mail,
    enabled: true,
    color: "blue",
  },
  {
    title: "Auto Backup",
    description: "Automatically backup data",
    icon: Cloud,
    enabled: true,
    color: "green",
  },
  {
    title: "Low Stock Alerts",
    description: "Notify when stock is low",
    icon: TriangleAlert,
    enabled: true,
    color: "orange",
  },
  {
    title: "Production Alerts",
    description: "Production notifications",
    icon: ClipboardList,
    enabled: true,
    color: "purple",
  },
  {
    title: "Purchase Approval",
    description: "Require approval",
    icon: ShoppingCartIcon,
    enabled: false,
    color: "yellow",
  },
];

/* ---------------- Security ---------------- */

export const security = [
  {
    title: "Change Password",
    description: "Update your password",
    icon: Lock,
    badge: "",
  },
  {
    title: "Two-Factor Authentication",
    description: "Additional account security",
    icon: Shield,
    badge: "Enabled",
  },
  {
    title: "Active Sessions",
    description: "Manage logged-in devices",
    icon: Monitor,
    badge: "3",
  },
];

/* ---------------- Quick Actions ---------------- */

export const quickActions = [
  {
    title: "Clear Cache",
    description: "Remove temporary files",
    icon: Trash2,
    color: "blue",
  },
  {
    title: "Export Data",
    description: "Download ERP data",
    icon: FileDown,
    color: "green",
  },
  {
    title: "System Logs",
    description: "View application logs",
    icon: FileText,
    color: "purple",
  },
  {
    title: "Maintenance Mode",
    description: "Enable maintenance",
    icon: Wrench,
    color: "orange",
  },
];

/* ---------------- Company ---------------- */

export const company = {
  name: "StockFlow Technologies Pvt Ltd",

  email: "info@stockflow.com",

  phone: "+91 98765 43210",

  gst: "32ABCDE1234F1Z5",

  industry: "Manufacturing",

  registration: "U24290KL2025PTC068123",

  address:
    "Kinfra Industrial Park, Malappuram, Kerala, India",

  timezone: "(GMT +05:30) Asia/Kolkata",

  currency: "Indian Rupee (INR)",

  language: "English (India)",
};

/* ---------------- System ---------------- */

export const systemInfo = {
  version: "v2.4.1",

  database: "Connected",

  backup: "14 Jul 2026, 02:30 AM",

  storage: 62,
};