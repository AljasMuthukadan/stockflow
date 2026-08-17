import {
  Factory,
  CircleCheckBig,
  PackageCheck,
  Wrench,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Production Order Started",
    description: "Chocolate Ice Cream • PRD-1001",
    details: "Started by John David",
    time: "5 min ago",
    icon: Factory,
    color: "green",
  },
  {
    id: 2,
    title: "Batch Completed",
    description: "Vanilla Ice Cream • Batch BCH-2102",
    details: "Quality Inspection Passed",
    time: "18 min ago",
    icon: CircleCheckBig,
    color: "blue",
  },
  {
    id: 3,
    title: "Raw Materials Issued",
    description: "Milk Powder • 250 kg",
    details: "Warehouse A",
    time: "1 hour ago",
    icon: PackageCheck,
    color: "orange",
  },
  {
    id: 4,
    title: "Machine Maintenance",
    description: "Mixer A",
    details: "Scheduled Preventive Maintenance",
    time: "2 hours ago",
    icon: Wrench,
    color: "purple",
  },
  {
    id: 5,
    title: "Production Delay",
    description: "Chocolate Syrup Shortage",
    details: "Awaiting Supplier",
    time: "Yesterday",
    icon: AlertTriangle,
    color: "red",
  },
  {
    id: 6,
    title: "Production Completed",
    description: "Butter Scotch Cone",
    details: "700 Units Produced",
    time: "Yesterday",
    icon: CircleCheckBig,
    color: "green",
  },
  {
    id: 7,
    title: "New Work Order",
    description: "Chocolate Milkshake",
    details: "Assigned to Mixer B",
    time: "2 days ago",
    icon: Factory,
    color: "blue",
  },
];

const colors = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    line: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    line: "bg-blue-500",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    line: "bg-orange-500",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    line: "bg-purple-500",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    line: "bg-red-500",
  },
};

const RecentActivities = () => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-200 p-5">

        <div>

          <h2 className="text-xl font-bold text-slate-800">
            Recent Activities
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Live manufacturing timeline
          </p>

        </div>

        <button className="flex items-center gap-2 rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-sm font-medium text-green-600 transition hover:bg-green-100">

          View All

          <ArrowRight size={16} />

        </button>

      </div>

      {/* Activities */}

      <div className="flex-1 overflow-y-auto">

        {activities.map((activity, index) => {

          const Icon = activity.icon;

          return (

            <div
              key={activity.id}
              className="group relative flex gap-4 px-6 py-5 transition hover:bg-slate-50"
            >

              {/* Timeline */}

              {index !== activities.length - 1 && (

                <div
                  className={`absolute left-[43px] top-16 h-full w-[2px] ${colors[activity.color].line} opacity-20`}
                />

              )}

              {/* Icon */}

              <div
                className={`
                relative z-10
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-xl
                ${colors[activity.color].bg}
                transition
                group-hover:scale-105
                `}
              >

                <Icon
                  size={22}
                  className={colors[activity.color].text}
                />

              </div>

              {/* Content */}

              <div className="flex-1">

                <div className="flex flex-wrap items-start justify-between gap-3">

                  <div>

                    <h3 className="font-semibold text-slate-800">
                      {activity.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {activity.description}
                    </p>

                    <p className="mt-2 text-xs text-slate-400">
                      {activity.details}
                    </p>

                  </div>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    {activity.time}
                  </span>

                </div>

              </div>

            </div>

          );
        })}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-200 p-5">

        <div className="grid grid-cols-3 gap-4">

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <p className="text-xs text-slate-500">
              Today
            </p>

            <h3 className="mt-1 text-lg font-bold text-slate-800">
              25
            </h3>

          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <p className="text-xs text-slate-500">
              Running
            </p>

            <h3 className="mt-1 text-lg font-bold text-blue-600">
              8
            </h3>

          </div>

          <div className="rounded-xl bg-slate-50 p-3 text-center">

            <p className="text-xs text-slate-500">
              Completed
            </p>

            <h3 className="mt-1 text-lg font-bold text-green-600">
              17
            </h3>

          </div>

        </div>

      </div>

    </div>
  );
};

export default RecentActivities;