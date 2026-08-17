import {
  Download,
  Upload,
  DatabaseBackup,
  Trash2,
} from "lucide-react";

const actions = [
  {
    title: "Export Data",
    description: "Download company data",
    icon: Download,
    color: "blue",
  },
  {
    title: "Import Data",
    description: "Upload inventory files",
    icon: Upload,
    color: "green",
  },
  {
    title: "Backup",
    description: "Create database backup",
    icon: DatabaseBackup,
    color: "purple",
  },
  {
    title: "Clear Cache",
    description: "Delete temporary files",
    icon: Trash2,
    color: "red",
  },
];

const colors = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    hover: "hover:border-blue-300",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    hover: "hover:border-green-300",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    hover: "hover:border-purple-300",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    hover: "hover:border-orange-300",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    hover: "hover:border-red-300",
  },
};

const QuickActions = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm h-full">

      {/* Header */}

      <div className="border-b border-slate-100 px-5 py-4">

        <h2 className="text-lg font-semibold text-slate-800">
          Quick Actions
        </h2>

        <p className="mt-0.5 text-xs text-slate-500">
          Frequently used administrative tools
        </p>

      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 gap-3 p-5">

        {actions.map((action) => {

          const Icon = action.icon;

          return (

            <button
              key={action.title}
              className={`
                group
                rounded-xl
                border
                border-slate-200
                p-3
                text-left
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:shadow-md
                ${colors[action.color].hover}
              `}
            >

              <div
                className={`
                  mb-2
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  ${colors[action.color].bg}
                `}
              >

                <Icon
                  size={18}
                  className={colors[action.color].text}
                />

              </div>

              <h3 className="text-sm font-semibold text-slate-800">
                {action.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-500">
                {action.description}
              </p>

            </button>

          );

        })}

      </div>

    </div>
  );
};

export default QuickActions;