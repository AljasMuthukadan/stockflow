import { ChevronRight } from "lucide-react";
import { settingsMenu } from "./settingsData";

const SettingsSidebar = () => {
  return (
    <aside
      className="
        sticky
        top-4
        hidden
        h-full
        self-stretch
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        shadow-sm
        lg:block
      "
    >
      {/* Header */}
      <div className="border-b border-slate-100 px-4 py-3.5">
        <h2 className="text-sm font-semibold text-slate-800">
          Settings
        </h2>

        <p className="mt-0.5 text-[11px] text-slate-500">
          System Configuration
        </p>
      </div>

      {/* Menu */}
      <nav className="p-2">
        {settingsMenu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              className={`
                group
                mb-0.5
                flex
                w-full
                items-center
                justify-between
                rounded-lg
                px-2.5
                py-2
                transition-colors
                ${
                  item.active
                    ? "bg-green-50 text-green-700"
                    : "text-slate-600 hover:bg-slate-50"
                }
              `}
            >
              {/* Left */}
              <div className="flex min-w-0 items-center gap-2.5">
                <div
                  className={`
                    flex
                    h-7
                    w-7
                    shrink-0
                    items-center
                    justify-center
                    rounded-md
                    ${
                      item.active
                        ? "bg-green-100"
                        : "bg-slate-100 group-hover:bg-white"
                    }
                  `}
                >
                  <Icon size={15} />
                </div>

                <span className="truncate text-xs font-medium">
                  {item.title}
                </span>
              </div>

              {/* Arrow */}
              <ChevronRight
                size={14}
                className={`
                  shrink-0
                  transition-transform
                  duration-200
                  ${
                    item.active
                      ? "text-green-600"
                      : "text-slate-400 group-hover:translate-x-0.5"
                  }
                `}
              />
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default SettingsSidebar;