import { ChevronRight, Home } from "lucide-react";

const SettingsHeader = () => {
  return (
    <header className="flex items-center justify-between gap-4">

      {/* Left */}
      <div className="min-w-0">

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Settings
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage your preferences and configure your StockFlow system.
        </p>

      </div>

      {/* Breadcrumb */}
      <div className="hidden shrink-0 items-center gap-1.5 text-xs sm:flex">

        <Home
          size={14}
          className="text-slate-400"
        />

        <span className="text-slate-500">
          Home
        </span>

        <ChevronRight
          size={13}
          className="text-slate-400"
        />

        <span className="font-medium text-green-600">
          Settings
        </span>

      </div>

    </header>
  );
};

export default SettingsHeader;