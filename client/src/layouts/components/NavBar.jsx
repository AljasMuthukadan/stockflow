import {
  Menu,
  Search,
  Bell,
  Moon,
  ChevronDown,
  Building2,
} from "lucide-react";

function Navbar({ onMenuClick }) {
  return (
    <header
      className="
        flex
        h-15
        w-full
        shrink-0
        items-center
        justify-between
        border-b
        border-slate-200
        bg-white
        px-4
        sm:px-5
        lg:px-6
      "
    >

      {/* ================================= */}
      {/* LEFT */}
      {/* ================================= */}

      <div className="flex items-center">

        {/* Mobile Menu */}

        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open sidebar"
          className="
            rounded-lg
            p-2
            text-slate-500
            transition
            hover:bg-slate-100
            hover:text-slate-700
            lg:hidden
          "
        >
          <Menu size={22} />
        </button>

      </div>


      {/* ================================= */}
      {/* RIGHT */}
      {/* ================================= */}

      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">

        {/* Search */}

        <div className="relative hidden w-[340px] lg:block">

          <Search
            size={17}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search anything..."
            className="
              h-11
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-11
              pr-20
              text-sm
              outline-none
              transition
              focus:border-green-500
              focus:bg-white
            "
          />

          <span
            className="
              absolute
              right-3
              top-1/2
              -translate-y-1/2
              rounded-md
              border
              border-slate-200
              bg-white
              px-2
              py-1
              text-xs
              text-slate-500
            "
          >
            Ctrl + K
          </span>

        </div>


        {/* Notification */}

        <button
          type="button"
          aria-label="Notifications"
          className="
            relative
            rounded-lg
            p-2
            text-slate-600
            transition
            hover:bg-slate-100
            hover:text-green-600
          "
        >
          <Bell size={21} />

          <span
            className="
              absolute
              right-1
              top-1
              flex
              h-4
              w-4
              items-center
              justify-center
              rounded-full
              bg-red-500
              text-[10px]
              text-white
            "
          >
            3
          </span>

        </button>


        {/* Theme */}

        <button
          type="button"
          aria-label="Toggle theme"
          className="
            rounded-lg
            p-2
            text-slate-600
            transition
            hover:bg-slate-100
            hover:text-green-600
          "
        >
          <Moon size={20} />
        </button>


        {/* Profile */}

        <button
          type="button"
          className="
            flex
            items-center
            gap-2
            rounded-xl
            px-2
            py-1.5
            transition
            hover:bg-slate-100
            sm:gap-3
            sm:px-3
            sm:py-2
          "
        >

          <div
            className="
              flex
              h-9
              w-9
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-slate-900
              text-white
              sm:h-10
              sm:w-10
            "
          >
            <Building2 size={18} />
          </div>


          <div className="hidden text-left sm:block">

            <h4 className="text-sm font-semibold text-slate-800">
              ABC Industries
            </h4>

          </div>


          <ChevronDown
            size={18}
            className="hidden text-slate-500 sm:block"
          />

        </button>

      </div>

    </header>
  );
}

export default Navbar;