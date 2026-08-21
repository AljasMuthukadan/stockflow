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
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full">

      {/* Header */}

      <div className="border-b border-slate-100 px-5 py-4">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100">
            <Shield
              size={18}
              className="text-red-600"
            />
          </div>

          <div>

            <h2 className="text-lg font-semibold text-slate-800">
              Security
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Account protection & access
            </p>

          </div>

        </div>

      </div>

      {/* Items */}

      <div className="divide-y divide-slate-100">

        {security.map((item) => {

          const Icon = item.icon;

          return (

            <button
              key={item.title}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                px-5
                py-3
                transition
                hover:bg-slate-50
              "
            >

              <div className="flex items-center gap-3 min-w-0">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-100 group-hover:bg-white">

                  <Icon
                    size={18}
                    className="text-slate-600"
                  />

                </div>

                <div className="min-w-0 text-left">

                  <h3 className="truncate text-sm font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">
                    {item.description}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 shrink-0">

                {item.badge && (

                  <span
                    className={`
                      rounded-full
                      px-2.5
                      py-1
                      text-[11px]
                      font-semibold
                      ${badgeStyle(item.badge)}
                    `}
                  >
                    {item.badge}
                  </span>

                )}

                <ChevronRight
                  size={16}
                  className="text-slate-400 transition group-hover:translate-x-1"
                />

              </div>

            </button>

          );

        })}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-100 bg-slate-50 px-5 py-3">

        <div className="flex items-center gap-2">

          <Lock
            size={14}
            className="text-green-600 shrink-0"
          />

          <p className="text-xs text-slate-500">
            Your account is protected with the latest security settings.
          </p>

        </div>

      </div>

    </div>
  );
};

export default SecurityCard;