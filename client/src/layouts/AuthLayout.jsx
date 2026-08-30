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
    description: "Track inventory across multiple warehouses.",
  },
  {
    icon: Factory,
    title: "Production Management",
    description: "Manage BOM and production workflows.",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Orders",
    description: "Handle orders, invoices and shipments.",
  },
  {
    icon: BarChart3,
    title: "Business Reports",
    description: "Generate powerful business insights.",
  },
];

export default function AuthLayout({
  title,
  subtitle,
  children,
}) {
  return (
    <main
      className="
        min-h-screen
        bg-gradient-to-br
        from-slate-100
        via-slate-50
        to-emerald-50
        lg:h-screen
        lg:overflow-hidden
        lg:p-5
      "
    >
      <div
        className="
          mx-auto
          flex
          min-h-screen
          w-full
          max-w-7xl
          overflow-hidden
          bg-white
          shadow-xl
          lg:min-h-0
          lg:h-full
          lg:rounded-3xl
        "
      >

        {/* ================= MOBILE BRAND HEADER ================= */}

        <div
          className="
            absolute
            left-0
            top-0
            w-full
            bg-slate-900
            px-6
            py-5
            text-white
            lg:hidden
          "
        >
          <h1 className="text-2xl font-bold">
            Stock
            <span className="text-emerald-400">
              Flow
            </span>
          </h1>

          <p className="mt-1 text-xs text-slate-400">
            Modern Manufacturing ERP
          </p>
        </div>


        {/* ================= LEFT PANEL ================= */}

        <section
          className="
            relative
            hidden
            w-1/2
            overflow-hidden
            bg-slate-900
            p-8
            text-white
            lg:flex
            xl:p-10
          "
        >

          {/* Background Effects */}

          <div
            className="
              absolute
              -right-24
              -top-24
              h-72
              w-72
              rounded-full
              bg-emerald-500/10
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              h-60
              w-60
              rounded-full
              bg-cyan-500/10
              blur-3xl
            "
          />

          <div
            className="
              relative
              flex
              h-full
              w-full
              flex-col
              overflow-hidden
            "
          >

            {/* Logo */}

            <div className="shrink-0">

              <h1 className="text-3xl font-bold xl:text-4xl">
                Stock
                <span className="text-emerald-400">
                  Flow
                </span>
              </h1>

              <p className="mt-2 text-sm text-slate-400">
                Modern Manufacturing ERP
              </p>

            </div>


            {/* Main Content */}

            <div
              className="
                flex
                min-h-0
                flex-1
                flex-col
                justify-center
                py-4
              "
            >

              {/* Illustration */}

              <div
                className="
                  flex
                  justify-center
                  overflow-hidden
                "
              >

                <img
                  src="/warehouse.png"
                  alt="Warehouse"
                  className="
                    w-full
                    max-w-[220px]
                    object-contain
                    xl:max-w-[280px]
                  "
                />

              </div>


              {/* Heading */}

              <div className="mt-4">

                <h2
                  className="
                    text-3xl
                    font-bold
                    leading-tight
                    xl:text-4xl
                  "
                >
                  Smart Inventory
                  <br />
                  Management
                </h2>

                <p
                  className="
                    mt-3
                    max-w-lg
                    text-sm
                    leading-6
                    text-slate-300
                    xl:text-base
                  "
                >
                  Manage inventory, production, suppliers,
                  warehouses, sales, purchases and reports
                  from one modern platform.
                </p>

              </div>


              {/* Features */}

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-2
                  xl:gap-3
                "
              >

                {features.map((feature) => {

                  const Icon = feature.icon;

                  return (
                    <div
                      key={feature.title}
                      className="
                        flex
                        items-start
                        gap-3
                        rounded-xl
                        border
                        border-white/10
                        bg-white/5
                        p-3
                        backdrop-blur-sm
                      "
                    >

                      <div
                        className="
                          shrink-0
                          rounded-lg
                          bg-emerald-500/20
                          p-2
                        "
                      >

                        <Icon
                          size={18}
                          className="text-emerald-400"
                        />

                      </div>

                      <div className="min-w-0">

                        <h3 className="text-sm font-semibold">
                          {feature.title}
                        </h3>

                        <p
                          className="
                            mt-1
                            line-clamp-2
                            text-xs
                            leading-5
                            text-slate-400
                          "
                        >
                          {feature.description}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>


            {/* Bottom Stats */}

            <div
              className="
                shrink-0
                border-t
                border-white/10
                pt-4
              "
            >

              <div className="grid grid-cols-3 gap-4">

                <div>

                  <p className="text-xl font-bold text-emerald-400">
                    1200+
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Businesses
                  </p>

                </div>


                <div>

                  <p className="text-xl font-bold text-emerald-400">
                    40K+
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Orders
                  </p>

                </div>


                <div>

                  <div className="flex items-center gap-1">

                    <ShieldCheck
                      size={16}
                      className="text-emerald-400"
                    />

                    <span className="text-xl font-bold text-emerald-400">
                      99%
                    </span>

                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Accuracy
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================= RIGHT PANEL ================= */}

        <section
          className="
            flex
            min-h-screen
            w-full
            items-center
            justify-center
            px-5
            py-28
            sm:px-8
            lg:min-h-0
            lg:w-1/2
            lg:p-8
            xl:p-12
          "
        >

          <div
            className="
              w-full
              max-w-md
            "
          >

            {/* Mobile Logo Spacer */}

            <div className="lg:hidden mb-8" />


            {/* Heading */}

            <div className="mb-6 lg:mb-7">

              <p
                className="
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wider
                  text-emerald-600
                "
              >
                Welcome to StockFlow
              </p>

              <h2
                className="
                  mt-2
                  text-3xl
                  font-bold
                  text-slate-900
                  sm:text-4xl
                "
              >
                {title}
              </h2>

              <p
                className="
                  mt-2
                  text-sm
                  leading-6
                  text-slate-500
                "
              >
                {subtitle}
              </p>

            </div>


            {/* Form Content */}

            {children}


            {/* Footer */}

            <div
              className="
                mt-7
                border-t
                border-slate-200
                pt-5
                text-center
                text-xs
                text-slate-500
              "
            >

              <div className="flex items-center justify-center gap-2">

                <Building2 size={15} />

                Secure ERP Platform

              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}