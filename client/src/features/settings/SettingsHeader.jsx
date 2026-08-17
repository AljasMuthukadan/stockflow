import { ChevronRight, Home } from "lucide-react";

const SettingsHeader = () => {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        lg:flex-row
        lg:items-center
        lg:justify-between
      "
    >
      {/* Left */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your preferences and configure your StockFlow system.
        </p>
      </div>

      {/* Breadcrumb */}

      <div
        className="
          flex
          items-center
          gap-2
          px-4
          py-2
          text-sm
        "
      >
        <Home
          size={16}
          className="text-slate-500"
        />

        <span className="text-slate-500">
          Home
        </span>

        <ChevronRight
          size={15}
          className="text-slate-400"
        />

        <span className="font-medium text-green-600">
          Settings
        </span>
      </div>
    </div>
  );
};

export default SettingsHeader;