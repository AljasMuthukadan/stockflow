import {
  FileText,
  CalendarClock,
  Download,
  Clock3,
} from "lucide-react";

const stats = [
  {
    title: "Total Reports",
    value: "24",
    subtitle: "+3 this month",
    icon: FileText,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    subtitleColor: "text-emerald-600",
  },
  {
    title: "Scheduled Reports",
    value: "8",
    subtitle: "Active schedules",
    icon: CalendarClock,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    subtitleColor: "text-blue-600",
  },
  {
    title: "Reports Generated",
    value: "156",
    subtitle: "This month",
    icon: Download,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    subtitleColor: "text-purple-600",
  },
  {
    title: "Last Generated",
    value: "2 hours ago",
    subtitle: "Inventory Summary",
    icon: Clock3,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    subtitleColor: "text-orange-600",
  },
];

export default function ReportsStats() {
  return (
    <div className="grid gap-3 grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-4
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-medium text-slate-500">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-900">
                  {stat.value}
                </h2>

                <p
                  className={`mt-2 text-xs font-medium ${stat.subtitleColor}`}
                >
                  {stat.subtitle}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${stat.iconBg}`}
              >
                <Icon
                  size={22}
                  className={stat.iconColor}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}