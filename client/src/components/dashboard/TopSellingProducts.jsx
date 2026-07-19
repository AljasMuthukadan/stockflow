const products = [
  {
    name: "Ice Cream",
    sold: 2450,
    progress: 100,
  },
  {
    name: "Milk Shake",
    sold: 1850,
    progress: 75,
  },
  {
    name: "Chocolate Bar",
    sold: 1250,
    progress: 55,
  },
  {
    name: "Vanilla Cone",
    sold: 950,
    progress: 42,
  },
  {
    name: "Butter Scotch",
    sold: 760,
    progress: 34,
  },
  {
    name: "Mango Delight",
    sold: 640,
    progress: 28,
  },
  {
    name: "Strawberry Cup",
    sold: 510,
    progress: 22,
  },
];

export default function TopSellingProducts() {
  return (
    <div className="flex max-h-[330px] scrollbar-none overflow-y-auto flex-col rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">
        <h3 className="text-lg font-semibold">
          Top Selling Products
        </h3>

        <button className="text-sm font-medium text-emerald-600 hover:text-emerald-700">
          View All
        </button>
      </div>

      {/* Product List */}
      <div className="py-3 px-6">
        <div className="space-y-6">
          {products.slice(0, 5).map((product) => (
            <div key={product.name}>
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">
                  {product.name}
                </span>

                <span className="text-slate-500">
                  {product.sold.toLocaleString()} units
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                <div
                  className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                  style={{
                    width: `${product.progress}%`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}