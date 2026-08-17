import {
  IceCream,
  Candy,
  CupSoda,
  Cookie,
  Package,
  TrendingUp,
} from "lucide-react";

const products = [
  {
    name: "Chocolate Ice Cream",
    produced: 2450,
    target: 3000,
    growth: "+12%",
    icon: IceCream,
    color: "bg-green-100 text-green-600",
  },
  {
    name: "Vanilla Ice Cream",
    produced: 2100,
    target: 2800,
    growth: "+9%",
    icon: IceCream,
    color: "bg-blue-100 text-blue-600",
  },
  {
    name: "Chocolate Bar",
    produced: 1850,
    target: 2500,
    growth: "+6%",
    icon: Candy,
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Strawberry Milkshake",
    produced: 1600,
    target: 2200,
    growth: "+4%",
    icon: CupSoda,
    color: "bg-pink-100 text-pink-600",
  },
  {
    name: "Butter Cookies",
    produced: 1350,
    target: 2000,
    growth: "+3%",
    icon: Cookie,
    color: "bg-purple-100 text-purple-600",
  },
];

const TopProducts = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header */}

      <div className="border-b border-slate-100 p-5">

        <div className="flex items-center justify-between">

          <div>

            <h2 className="text-lg font-semibold text-slate-800">
              Top Products
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Highest production this month
            </p>

          </div>

          <Package
            size={22}
            className="text-slate-400"
          />

        </div>

      </div>

      {/* Products */}

      <div className="divide-y divide-slate-100">

        {products.map((product) => {

          const Icon = product.icon;

          const progress = Math.min(
            (product.produced / product.target) * 100,
            100
          );

          return (

            <div
              key={product.name}
              className="p-5 transition hover:bg-slate-50"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-xl
                  ${product.color}
                  `}
                >
                  <Icon size={22} />
                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-medium text-slate-800">
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1 text-green-600">

                      <TrendingUp size={15} />

                      <span className="text-sm font-semibold">
                        {product.growth}
                      </span>

                    </div>

                  </div>

                  <div className="mt-2 flex justify-between text-sm">

                    <span className="text-slate-500">
                      {product.produced.toLocaleString()} Units
                    </span>

                    <span className="font-medium text-slate-600">
                      {Math.round(progress)}%
                    </span>

                  </div>

                  <div className="mt-2 h-2 rounded-full bg-slate-100">

                    <div
                      className="h-2 rounded-full bg-green-500"
                      style={{
                        width: `${progress}%`,
                      }}
                    />

                  </div>

                  <p className="mt-2 text-xs text-slate-400">
                    Target: {product.target.toLocaleString()} Units
                  </p>

                </div>

              </div>

            </div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="border-t border-slate-100 p-4">

        <button
          className="
          w-full
          rounded-xl
          border
          border-slate-200
          py-2.5
          text-sm
          font-medium
          text-slate-600
          transition
          hover:bg-slate-50
          hover:text-slate-800
          "
        >
          View Production Report
        </button>

      </div>

    </div>
  );
};

export default TopProducts;