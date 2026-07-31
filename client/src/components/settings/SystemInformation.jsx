import {
  Database,
  HardDrive,
  ShieldCheck,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const systemInfo = [
  {
    title: "Application Version",
    value: "StockFlow v2.5.1",
    icon: ShieldCheck,
    color: "green",
  },
  {
    title: "Database",
    value: "Connected",
    badge: true,
    icon: Database,
    color: "blue",
  },
  {
    title: "Last Backup",
    value: "Today • 02:15 AM",
    icon: Clock3,
    color: "orange",
  },
];

const colors = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
};

const storageUsed = 72;

const SystemInformation = () => {
  return (
    <div className="h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-4 py-3">

        <h2 className="text-base font-semibold text-slate-800">
          System Information
        </h2>

        <p className="mt-0.5 text-[11px] text-slate-500">
          Current system status & resources
        </p>

      </div>

      {/* Information */}

      <div className="divide-y divide-slate-100">

        {systemInfo.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                px-4
                py-2
                transition
                hover:bg-slate-50
              "
            >

              <div className="flex min-w-0 items-center gap-2.5">

                <div
                  className={`
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    ${colors[item.color].bg}
                  `}
                >
                  <Icon
                    size={16}
                    className={colors[item.color].text}
                  />
                </div>

                <div className="min-w-0">

                  <h3 className="truncate text-[13px] font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="text-[11px] text-slate-500">
                    {item.value}
                  </p>

                </div>

              </div>

              {item.badge && (

                <span className="rounded-full bg-green-100 px-2 py-0.5 text-[10px] font-semibold text-green-700">
                  Connected
                </span>

              )}

            </div>

          );

        })}

      </div>

      {/* Storage */}

      <div className="border-t border-slate-100 px-4 py-3">

        <div className="mb-2 flex items-center justify-between">

          <div className="flex items-center gap-2.5">

            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">

              <HardDrive
                size={16}
                className="text-purple-600"
              />

            </div>

            <div>

              <h3 className="text-[13px] font-semibold text-slate-800">
                Storage Usage
              </h3>

              <p className="text-[11px] text-slate-500">
                72 GB of 100 GB used
              </p>

            </div>

          </div>

          <span className="text-[13px] font-semibold text-slate-700">
            {storageUsed}%
          </span>

        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">

          <div
            className="h-full rounded-full bg-green-500 transition-all duration-700"
            style={{
              width: `${storageUsed}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5">

        <div className="flex items-center gap-2">

          <CheckCircle2
            size={14}
            className="shrink-0 text-green-600"
          />

          <p className="text-[11px] text-slate-500">
            All services are running normally.
          </p>

        </div>

      </div>

    </div>
  );
};

export default SystemInformation;