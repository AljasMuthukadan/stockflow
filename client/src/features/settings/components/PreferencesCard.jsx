import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";
import { preferences } from "./settingsData";

const colorMap = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
  },
  yellow: {
    bg: "bg-yellow-100",
    text: "text-yellow-600",
  },
};

const PreferencesCard = () => {
  const [settings, setSettings] = useState(preferences);

  const toggleSetting = (index) => {
    setSettings((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, enabled: !item.enabled }
          : item
      )
    );
  };

  return (
   <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 px-4 py-3.5">
        <h2 className="text-base font-semibold text-slate-800">
          Preferences
        </h2>

        <p className="mt-0.5 text-[11px] text-slate-500">
          Customize your StockFlow experience
        </p>

      </div>

      {/* Body */}

      <div className="divide-y divide-slate-100">

        {settings.map((item, index) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                flex
                items-center
                justify-between
                gap-3
                px-4
                py-2.5
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
                    ${colorMap[item.color].bg}
                  `}
                >
                  <Icon
                    size={16}
                    className={colorMap[item.color].text}
                  />
                </div>

                <div className="min-w-0">

                  <h3 className="truncate text-[13px] font-semibold text-slate-800">
                    {item.title}
                  </h3>

                  <p className="mt-0.5 text-[11px] leading-4 text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>

              <div className="shrink-0 scale-90">
                <ToggleSwitch
                  enabled={item.enabled}
                  onChange={() => toggleSetting(index)}
                />
              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
};

export default PreferencesCard;