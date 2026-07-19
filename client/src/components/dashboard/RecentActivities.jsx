import {
  PackagePlus,
  Factory,
  ArrowRightLeft,
  Users,
  ShoppingCart,
} from "lucide-react";

import ActivityItem from "./ActivityItem";

 function RecentActivities() {
  const activities = [
    {
      title: "Added 200kg Raw Sugar",
      category: "Inventory",
      time: "10:30 AM",
      icon: PackagePlus,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
    {
      title: "Production completed: Ice Cream 500 units",
      category: "Production",
      time: "09:15 AM",
      icon: Factory,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Stock transfer to Warehouse B",
      category: "Warehouse",
      time: "Yesterday",
      icon: ArrowRightLeft,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      title: "New supplier added: ABC Foods",
      category: "Suppliers",
      time: "Yesterday",
      icon: Users,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Purchase order #PO-2456 created",
      category: "Purchases",
      time: "2 days ago",
      icon: ShoppingCart,
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
    },
  ];

  return (
  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between p-5 border-b border-slate-100">

        <h3 className="text-lg font-semibold text-slate-800">
          Recent Activities
        </h3>

        <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
          View All
        </button>

      </div>

      {/* Activity List */}

     <div className="flex-1 overflow-y-auto px-5">

        {activities.map((activity, index) => (
          <ActivityItem
            key={index}
            {...activity}
          />
        ))}

      </div>

    </div>
  );
}

export default RecentActivities;