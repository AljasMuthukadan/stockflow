import {
  ShoppingCart,
  DollarSign,
  Package,
  Wallet,
  Users,
} from "lucide-react";

export const stats = [
  {
    title: "Today's Orders",
    value: "8",
    sub: "₹1,25,750",
    change: "+25%",
    icon: ShoppingCart,
    color: "green",
  },

  {
    title: "This Month Sales",
    value: "₹18,75,450",
    sub: "vs last month",
    change: "+22.4%",
    icon: DollarSign,
    color: "blue",
  },

  {
    title: "Total Orders",
    value: "128",
    sub: "Active Orders",
    change: "",
    icon: Package,
    color: "orange",
  },

  {
    title: "Average Order Value",
    value: "₹14,680",
    sub: "vs last month",
    change: "+8.6%",
    icon: Wallet,
    color: "indigo",
  },

  {
    title: "Customers",
    value: "86",
    sub: "Active Customers",
    change: "",
    icon: Users,
    color: "green",
  },
];