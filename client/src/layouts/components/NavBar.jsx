import {
  Menu,
  Search,
  Bell,
  Moon,
  ChevronDown,
  Building2,
} from "lucide-react";

 function Navbar() {
  return (
    <header className="h-15  w-full bg-white border-b border-slate-200 flex items-center justify-between px-6">

      {/* Left */}
      <div className="flex items-center gap-5">
        <button className="text-slate-500 hover:text-slate-700">
          <Menu size={22} />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative w-[340px]">

          <Search
            size={17}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search anything..."
            className="
            w-full
            h-11
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            pl-11
            pr-20
            text-sm
            outline-none
            focus:bg-white
            focus:border-green-500
            transition
            "
          />

          <span
            className="
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-xs
            bg-white
            border
            rounded-md
            px-2
            py-1
            text-slate-500
            "
          >
            Ctrl + K
          </span>
        </div>

        {/* Notification */}

        <button className="relative">
          <Bell
            size={21}
            className="text-slate-600 hover:text-green-600"
          />

          <span
            className="
            absolute
            -top-1
            -right-1
            w-4
            h-4
            rounded-full
            bg-red-500
            text-white
            text-[10px]
            flex
            items-center
            justify-center
            "
          >
            3
          </span>
        </button>

        {/* Theme */}

        <button className="hover:text-green-600">
          <Moon size={20} />
        </button>

        {/* Profile */}

        <button
          className="
          flex
          items-center
          gap-3
          px-3
          py-2
          rounded-xl
          hover:bg-slate-100
          transition
          "
        >
          <div
            className="
            w-10
            h-10
            rounded-full
            bg-slate-900
            text-white
            flex
            items-center
            justify-center
            "
          >
            <Building2 size={18} />
          </div>

          <div className="text-left">
            <h4 className="text-sm font-semibold">
              ABC Industries
            </h4>
          </div>

          <ChevronDown
            size={18}
            className="text-slate-500"
          />
        </button>

      </div>
    </header>
  );
}

export default Navbar;