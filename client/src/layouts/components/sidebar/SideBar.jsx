import {
  Boxes,
  ChevronDown,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { menu } from "./sideBarMenu";

function Sidebar() {
  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-slate-200 bg-white text-slate-800">

      {/* Logo */}

      <div className="flex h-20 shrink-0 items-center border-b border-slate-200 px-6">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50">
          <Boxes
            className="text-emerald-600"
            size={24}
          />
        </div>

        <h1 className="ml-3 text-2xl font-bold text-slate-900">
          Stock
          <span className="text-emerald-600">
            Flow
          </span>
        </h1>

      </div>


      {/* Navigation */}

      <nav className="mt-5 flex-1 space-y-1.5 px-3">

        {menu.map((item) => {

          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) => `
                group
                relative
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                transition-all
                duration-200

                ${
                  isActive
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }
              `}
            >

              {({ isActive }) => (
                <>
                  {/* Active Indicator */}

                  {isActive && (
                    <span className="absolute left-0 top-1/2 h-7 w-1 -translate-y-1/2 rounded-r-full bg-emerald-600" />
                  )}

                  <div className="flex items-center gap-3">

                    <Icon
                      size={18}
                      className={
                        isActive
                          ? "text-emerald-600"
                          : "text-slate-500 group-hover:text-slate-700"
                      }
                    />

                    <span className="text-sm font-medium">
                      {item.title}
                    </span>

                  </div>


                  {item.dropdown && (
                    <ChevronDown
                      size={16}
                      className={
                        isActive
                          ? "text-emerald-600"
                          : "text-slate-400"
                      }
                    />
                  )}

                </>
              )}

            </NavLink>
          );

        })}

      </nav>


      {/* User */}

      <div className="border-t border-slate-200 p-4">

        <button
          type="button"
          className="
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            p-2
            transition
            hover:bg-slate-50
          "
        >

          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-emerald-100
                font-semibold
                text-emerald-700
              "
            >
              AD
            </div>

            <div className="text-left">

              <h4 className="text-sm font-semibold text-slate-800">
                Admin User
              </h4>

              <p className="text-xs text-slate-500">
                admin@stockflow.com
              </p>

            </div>

          </div>

          <ChevronDown
            size={18}
            className="text-slate-400"
          />

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;