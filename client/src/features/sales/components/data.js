import {
  ShoppingCart,
  DollarSign,
  Package,
  Wallet,
  Users,
  Clock,
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

  {
    title: "Pending Payments",
    value: "₹2,45,800",
    sub: "12 Pending Orders",
    change: "",
    icon: Clock,
    color: "green",
  },
];

export const orders = [
  {
    id: "SO-1025",
    customer: "ABC Super Market",
    date: "12 Jul 2026",
    amount: "$2,450",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: "SO-1026",
    customer: "Fresh Mart",
    date: "12 Jul 2026",
    amount: "$1,860",
    payment: "Pending",
    status: "Processing",
  },
  {
    id: "SO-1027",
    customer: "Metro Hyper",
    date: "11 Jul 2026",
    amount: "$4,820",
    payment: "Paid",
    status: "Shipped",
  },
  {
    id: "SO-1028",
    customer: "City Wholesale",
    date: "11 Jul 2026",
    amount: "$980",
    payment: "Pending",
    status: "Pending",
  },
  {
    id: "SO-1029",
    customer: "Food Plaza",
    date: "10 Jul 2026",
    amount: "$3,200",
    payment: "Paid",
    status: "Delivered",
  },
];
