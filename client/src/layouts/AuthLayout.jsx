import {
  Package,
  Factory,
  ShoppingCart,
  BarChart3,
  Building2,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Real-time Inventory",
    description: "Track inventory across multiple warehouses in real time.",
  },
  {
    icon: Factory,
    title: "Production Management",
    description: "Manage BOM, manufacturing and production workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Orders",
    description: "Handle quotations, orders, invoices and shipments.",
  },
  {
    icon: BarChart3,
    title: "Business Reports",
    description: "Generate inventory, sales and financial reports instantly.",
  },
];

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-emerald-50 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl">

        <div className="grid min-h-[720px] lg:grid-cols-2">

          {/* LEFT PANEL */}

          <section className="relative overflow-hidden bg-slate-900 p-10 text-white lg:p-12">

            {/* Background Glow */}

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

            <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative flex h-full flex-col">

              {/* Logo */}

              <div>
                <h1 className="text-4xl font-bold">
                  Stock<span className="text-emerald-400">Flow</span>
                </h1>

                <p className="mt-3 text-slate-400">
                  Modern Manufacturing ERP
                </p>
              </div>

              {/* Illustration */}

              <div className="my-10 flex justify-center">

                <img
                  src="/warehouse.png"
                  alt="Warehouse"
                  className="w-full max-w-sm"
                />

              </div>

              {/* Heading */}

              <div>

                <h2 className="text-4xl font-bold leading-tight">
                  Smart Inventory
                  <br />
                  Management
                </h2>

                <p className="mt-5 max-w-lg text-lg leading-8 text-slate-300">
                  Manage inventory, production, suppliers,
                  warehouses, sales, purchases and reports from
                  one modern platform.
                </p>

              </div>

              {/* Features */}

              <div className="mt-10 grid gap-4">

                {features.map((feature) => {
                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                    >
                      <div className="rounded-xl bg-emerald-500/20 p-3">
                        <Icon
                          size={22}
                          className="text-emerald-400"
                        />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          {feature.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-400">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}

              </div>

              {/* Bottom Stats */}

              <div className="mt-auto pt-10">

                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">

                  <div>
                    <p className="text-2xl font-bold text-emerald-400">
                      1200+
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Businesses
                    </p>
                  </div>

                  <div>
                    <p className="text-2xl font-bold text-emerald-400">
                      40K+
                    </p>

                    <p className="mt-1 text-sm text-slate-400">
                      Orders
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck
                        size={18}
                        className="text-emerald-400"
                      />

                      <span className="text-2xl font-bold text-emerald-400">
                        99%
                      </span>
                    </div>

                    <p className="mt-1 text-sm text-slate-400">
                      Accuracy
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </section>

          {/* RIGHT PANEL */}

          <section className="flex items-center justify-center bg-white p-10 lg:p-12">

            <div className="w-full max-w-md">

              <div className="mb-8">

                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Welcome to StockFlow
                </p>

                <h2 className="mt-2 text-4xl font-bold text-slate-900">
                  {title}
                </h2>

                <p className="mt-3 text-slate-500">
                  {subtitle}
                </p>

              </div>

              {children}

              <div className="mt-10 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
                <div className="flex items-center justify-center gap-2">
                  <Building2 size={16} />
                  Secure ERP Platform
                </div>
              </div>

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}