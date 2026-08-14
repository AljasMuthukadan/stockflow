import {
  Upload,
  Plus,
} from "lucide-react";

const SalesHeader = () => {
  return (
    <div
      className="
        flex
        w-full
        min-w-0
        flex-col
        lg:flex-row
        gap-4
        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* ================================================= */}
      {/* TITLE */}
      {/* ================================================= */}

      <div className="min-w-0">
        <h1
          className="
            text-2xl
            font-bold
            text-slate-800
            sm:text-3xl
          "
        >
          Sales & Orders
        </h1>

        <p
          className="
            mt-1
            hidden
            text-sm
            text-slate-500
            lg:block
          "
        >
          Monitor sales performance and manage customer orders
        </p>
      </div>


      {/* ================================================= */}
      {/* ACTIONS */}
      {/* ================================================= */}

      <div
        className="
          flex
          w-full
          min-w-0
          flex-col
          gap-2
          sm:w-auto
          sm:flex-row
          sm:shrink-0
          sm:gap-3
        "
      >

        {/* Import Orders */}

        <button
          type="button"
          className="
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            text-sm
            font-medium
            text-slate-700
            shadow-sm
            transition
            hover:bg-slate-50
            sm:h-11
            sm:w-auto
            sm:px-5
          "
        >
          <Upload size={18} />

          <span>
            Import Orders
          </span>
        </button>


        {/* New Sales Order */}

        <button
          type="button"
          className="
            flex
            h-10
            w-full
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            px-4
            text-sm
            font-semibold
            text-white
            shadow
            transition
            hover:bg-green-700
            sm:h-11
            sm:w-auto
            sm:px-5
          "
        >
          <Plus size={18} />

          <span>
            New Sales Order
          </span>
        </button>

      </div>
    </div>
  );
};

export default SalesHeader;