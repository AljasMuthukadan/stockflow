import {
  ClipboardList,
  Clock3,
  CircleCheckBig,
  IndianRupee,
  TriangleAlert,
} from "lucide-react";


export default function PurchaseStats({po}) {
  const pendingPo = po.filter((order) => order.status === "Pending");
  const completedPo = po.filter((order) => order.status === "Completed");
  const overduePo = po.filter((order) => order.status === "Overdue");
  const status = [
    {
    title: "Total Orders",
    value: po.length,
    change: "+12 this month",
    icon: ClipboardList,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Pending Orders",
    value: pendingPo.length,
    change: "Need approval",
    icon: Clock3,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    changeColor: "text-orange-600",
  },
  {
    title: "Completed",
    value: completedPo.length ,
    change: "92% completion",
    icon: CircleCheckBig,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Total Purchase Value",
    value: "₹12,45,000",
    change: "+8.5% this month",
    icon: IndianRupee,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    changeColor: "text-emerald-600",
  },
  {
    title: "Overdue Orders",
    value: overduePo.length,
    change: "Urgent attention",
    icon: TriangleAlert,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    changeColor: "text-red-500",
  },

  ]
  return (
    <div className="grid gap-5 grid-cols-2 sm:grid-cols-2 xl:grid-cols-5">
      {status.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-5
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-lg lg:text-4xl font-bold text-slate-900">
                  {stat.value}
                </h2>

                <p
                  className={`mt-3 text-sm font-medium ${stat.changeColor}`}
                >
                  {stat.change}
                </p>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${stat.iconBg}`}
              >
                <Icon
                  className={stat.iconColor}
                  size={28}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}