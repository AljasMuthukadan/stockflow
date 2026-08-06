import { CalendarDays } from "lucide-react";

function DashboardHeader() {
  return (
    <div
      className="
        mb-4
        flex
        flex-row
        items-center
        justify-between
        gap-3

        sm:mb-5
        sm:gap-4
      "
    >
      {/* Left */}

      <div className="min-w-0 flex-1">
        <h1
          className="
            truncate
            text-lg
            font-bold
            tracking-tight
            text-slate-900

            sm:text-2xl
            lg:text-3xl
          "
        >
          Dashboard
        </h1>

        <p
          className="
            mt-0.5
            truncate
            text-[11px]
            leading-4
            text-slate-500

            sm:mt-1
            sm:text-sm
            sm:leading-5
          "
        >
          Overview of your inventory, production and business performance.
        </p>
      </div>

      {/* Right */}

      <button
        type="button"
        className="
          flex
          shrink-0
          items-center
          justify-center
          gap-1.5
          rounded-lg
          border
          border-slate-200
          bg-white
          px-2.5
          py-2
          text-[11px]
          font-medium
          text-slate-700
          shadow-sm
          transition
          hover:bg-slate-50

          sm:gap-2
          sm:rounded-xl
          sm:px-4
          sm:py-2.5
          sm:text-sm
        "
      >
        <CalendarDays
          size={15}
          className="shrink-0 sm:h-[18px] sm:w-[18px]"
        />

        <span className="whitespace-nowrap">
          May 24 – May 30, 2024
        </span>
      </button>
    </div>
  );
}

export default DashboardHeader;