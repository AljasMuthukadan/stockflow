import {
  ChevronRight,
  Shield,
  Lock,
} from "lucide-react";

import { security } from "./settingsData";

const badgeStyle = (badge) => {
  if (badge === "Enabled") {
    return "bg-green-100 text-green-700";
  }

  if (!isNaN(badge)) {
    return "bg-blue-100 text-blue-700";
  }

  return "";
};

const SecurityCard = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}
      <div className="border-b border-slate-100 px-4 py-3.5">
        <div className="flex items-center gap-2.5">

          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-100">
            <Shield
              size={17}
              className="text-red-600"
            />
          </div>

          <div className="min-w-0">
            <h2 className="text-base font-semibold text-slate-800">
              Security
            </h2>

            <p className="mt-0.5 text-[11px] text-slate-500">
              Account protection & access
            </p>
          </div>

        </div>
      </div>

      {/* Security Items */}
      <div className="divide-y divide-slate-100">

        {security.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              type="button"
              className="
                group
                flex
                w-full
                items-center
                justify-between
                gap-3
                px-4
                py-2.5
                text-left
                transition-colors
                hover:bg-slate-50
              "
            >

              {/* Left */}
              <div className="flex min-w-0 items-center gap-2.5">

                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-slate-100
                    transition-colors
                    group-hover:bg-white
                  "
                >
                  <Icon
                    size={16}
                    className="text-slate-600"
                  />
                </div>

                <div className="min-w-0">

                  <h3 className="truncate text-[13px] font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 truncate text-[11px] text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>

              {/* Right */}
              <div className="flex shrink-0 items-center gap-2">

                {item.badge && (
                  <span
                    className={`
                      rounded-full
                      px-2
                      py-0.5
                      text-[10px]
                      font-semibold
                      ${badgeStyle(item.badge)}
                    `}
                  >
                    {item.badge}
                  </span>
                )}

                <ChevronRight
                  size={15}
                  className="
                    text-slate-400
                    transition-transform
                    duration-200
                    group-hover:translate-x-0.5
                  "
                />

              </div>

            </button>
          );
        })}

      </div>

      {/* Footer */}
      <div className="border-t border-slate-100 bg-slate-50 px-4 py-2.5">

        <div className="flex items-center gap-2">

          <Lock
            size={13}
            className="shrink-0 text-green-600"
          />

          <p className="truncate text-[11px] text-slate-500">
            Your account is protected with the latest security settings.
          </p>

        </div>

      </div>

    </div>
  );
};

export default SecurityCard;