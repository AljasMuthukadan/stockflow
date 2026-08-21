import { ChevronRight } from "lucide-react";
import { settingsMenu } from "./settingsData";

const SettingsSidebar = () => {
  return (
    <aside
      className="
        sticky
        top-24
        w-full
        h-[calc(100vh-7.5rem)]
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        overflow-hidden
      "
    >
      {/* Header */}

      <div className="border-b border-slate-100 px-5 py-4">

        <h2 className="text-base font-semibold text-slate-800">
          Settings
        </h2>

        <p className="mt-0.5 text-xs text-slate-500">
          System Configuration
        </p>

      </div>

      {/* Menu */}

      <nav
        className="
          h-[calc(100%-68px)]
          overflow-y-auto
          px-2
          py-2
        "
      >

        {settingsMenu.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className={`
                group
                mb-1
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-3
                py-2
                transition-all
                duration-200

                ${
                  item.active
                    ? "bg-green-50 text-green-700"
                    : "text-slate-600 hover:bg-slate-50"
                }
              `}
            >

              <div className="flex items-center gap-3">

                <div
                  className={`
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-lg
                    transition

                    ${
                      item.active
                        ? "bg-green-100"
                        : "bg-slate-100 group-hover:bg-white"
                    }
                  `}
                >

                  <Icon size={16} />

                </div>

                <span className="text-[13px] font-medium">
                  {item.title}
                </span>

              </div>

              <ChevronRight
                size={14}
                className={`
                  transition-all

                  ${
                    item.active
                      ? "text-green-600"
                      : "text-slate-400 group-hover:translate-x-1"
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