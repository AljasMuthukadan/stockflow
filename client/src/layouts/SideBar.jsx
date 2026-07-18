import {
  Boxes,
  LayoutDashboard,
  Package,
  Warehouse,
  Users,
  Factory,
  ShoppingCart,
  Truck,
  FileBarChart2,
  Settings,
  ChevronDown,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Inventory",
    icon: Package,
    dropdown: true,
  },
  {
    title: "Warehouses",
    icon: Warehouse,
  },
  {
    title: "Suppliers",
    icon: Users,
  },
  {
    title: "Production",
    icon: Factory,
  },
  {
    title: "Sales & Orders",
    icon: ShoppingCart,
    dropdown: true,
  },
  {
    title: "Purchases",
    icon: Truck,
  },
  {
    title: "Reports",
    icon: FileBarChart2,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

 function Sidebar() {
  return (
    <aside className="w-64 bg-slate-950 text-white flex flex-col">

      {/* Logo */}

      <div className="h-20 flex items-center px-6 border-b border-slate-800">

        <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
          <Boxes className="text-green-400" size={24} />
        </div>

        <h1 className="ml-3 text-2xl font-bold">
          Stock<span className="text-green-400">Flow</span>
        </h1>

      </div>

      {/* Navigation */}

      <nav className="flex-1 mt-5 px-4 space-y-2">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`
              w-full
              flex
              items-center
              justify-between
              rounded-xl
              px-4
              py-3
              transition-all
              ${
                item.active
                  ? "bg-green-600 text-white shadow"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }
              `}
            >
              <div className="flex items-center gap-3">
                <Icon size={18} />
                <span className="text-sm font-medium">
                  {item.title}
                </span>
              </div>

              {item.dropdown && (
                <ChevronDown size={16} />
              )}
            </button>
          );
        })}

      </nav>

      {/* User */}

      <div className="border-t border-slate-800 p-4">

        <button className="w-full flex items-center justify-between hover:bg-slate-800 rounded-xl p-2 transition">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-full bg-blue-600 flex items-center justify-center font-semibold">
              AD
            </div>

            <div className="text-left">

              <h4 className="font-semibold text-sm">
                Admin User
              </h4>

              <p className="text-xs text-slate-400">
                admin@stockflow.com
              </p>

            </div>

          </div>

          <ChevronDown size={18} />

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;