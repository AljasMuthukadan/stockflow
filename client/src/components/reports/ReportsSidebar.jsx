import {
  Boxes,
  ShoppingCart,
  Factory,
  DollarSign,
  BarChart3,
  Plus,
  CalendarClock,
  Upload,
  ArrowRight,
  Lightbulb,
} from "lucide-react";

const categories = [
  {
    title: "Inventory",
    count: 8,
    icon: Boxes,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Purchases",
    count: 5,
    icon: ShoppingCart,
    color: "bg-orange-100 text-orange-600",
  },
  {
    title: "Production",
    count: 4,
    icon: Factory,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Sales",
    count: 3,
    icon: BarChart3,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Finance",
    count: 4,
    icon: DollarSign,
    color: "bg-red-100 text-red-600",
  },
];


export default function ReportsSidebar() {
  return (
    <aside className="space-y-2 w-full mb-5">
      {/* Categories */}

      <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <h3 className="mb-2 text-sm font-semibold text-slate-800">
          Report Categories
        </h3>

        <div className="space-y-1.5">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className="
                  flex
                  w-full
                  items-center
                  justify-between
                  rounded-lg
                  px-2.5
                  py-2
                  transition
                  hover:bg-slate-50
                "
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.color}`}
                  >
                    <Icon size={15} />
                  </div>

                  <span className="text-sm font-medium text-slate-700">
                    {item.title}
                  </span>
                </div>

                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <h3 className="mb-4 text-sm font-semibold text-slate-800">
    Quick Actions
  </h3>

  <div className="space-y-1">
    <button className="group flex w-full items-start gap-3 rounded-lg p-3 transition hover:bg-slate-50">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
        <CalendarClock
          size={18}
          className="text-blue-600"
        />
      </div>

      <div className="text-left">
        <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600">
          Schedule New Report
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          Automate report generation
        </p>
      </div>
    </button>

    <button className="group flex w-full items-start gap-3 rounded-lg p-3 transition hover:bg-slate-50">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
        <Plus
          size={18}
          className="text-blue-600"
        />
      </div>

      <div className="text-left">
        <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600">
          Create Custom Report
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          Build custom reports
        </p>
      </div>
    </button>

    <button className="group flex w-full items-start gap-3 rounded-lg p-3 transition hover:bg-slate-50">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
        <CalendarClock
          size={18}
          className="text-blue-600"
        />
      </div>

      <div className="text-left">
        <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600">
          Manage Schedules
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          View and edit scheduled reports
        </p>
      </div>
    </button>

    <button className="group flex w-full items-start gap-3 rounded-lg p-3 transition hover:bg-slate-50">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50">
        <Upload
          size={18}
          className="text-blue-600"
        />
      </div>

      <div className="text-left">
        <p className="text-sm font-medium text-slate-800 group-hover:text-blue-600">
          Report Templates
        </p>

        <p className="mt-0.5 text-xs text-slate-500">
          Use predefined templates
        </p>
      </div>
    </button>
  </div>
</div>

{/* Report Tips */}

<div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
  <div className="flex items-center gap-2">
    <Lightbulb
      size={16}
      className="text-orange-500"
    />

    <h3 className="text-sm font-semibold text-slate-800">
      Report Tips
    </h3>
  </div>

  <p className="mt-4 text-sm leading-6 text-slate-500">
    Schedule reports to get automatic email delivery.
  </p>

  <button className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700">
    Learn more

    <ArrowRight size={15} />
  </button>
</div>   </aside>
  );
}