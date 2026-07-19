import {
  Package,
  DollarSign,
  AlertTriangle,
  Clock,
  Factory,
  Users,
} from "lucide-react";

import StatCard from "./StatCard";

export default function StatsGrid() {
  const stats = [
    {
      title: "Total Products",
      value: "1,250",
      change: "+12.5%",
      subtitle: "vs last month",
      icon: Package,
      color: "bg-green-100 text-green-600",
      positive: true,
    },
    {
      title: "Inventory Value",
      value: "₹2,45,000",
      change: "+8.2%",
      subtitle: "vs last month",
      icon: DollarSign,
      color: "bg-blue-100 text-blue-600",
      positive: true,
    },
    {
      title: "Low Stock Items",
      value: "32",
      change: "+5",
      subtitle: "need attention",
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
      positive: false,
    },
    {
      title: "Pending Orders",
      value: "28",
      change: "-3",
      subtitle: "vs yesterday",
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
      positive: true,
    },
    {
      title: "Today's Production",
      value: "1,450",
      change: "+15.3%",
      subtitle: "units produced",
      icon: Factory,
      color: "bg-emerald-100 text-emerald-600",
      positive: true,
    },
    {
      title: "Total Suppliers",
      value: "48",
      change: "+2",
      subtitle: "new this month",
      icon: Users,
      color: "bg-purple-100 text-purple-600",
      positive: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-6">
        {/** Dashboard Stats */}
      {stats.map((card) => (
        <StatCard
          key={card.title}
          title={card.title}
          value={card.value}
          change={card.change}
          subtitle={card.subtitle}
          icon={card.icon}
          color={card.color}
          positive={card.positive}
        />
      ))}
    </div>
  );
}