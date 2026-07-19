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
];

export default function TopSellingProducts() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4">

        <h3 className="text-lg font-semibold">
          Top Selling Products
        </h3>

        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>This Month</option>
          <option>This Week</option>
        </select>

      </div>

      <div className="space-y-6 p-6">

        {products.map((product) => (

          <div key={product.name}>

            <div className="mb-2 flex justify-between text-sm">

              <span className="font-medium">
                {product.name}
              </span>

              <span className="text-slate-500">
                {product.sold} units
              </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-200">

              <div
                className="h-full rounded-full bg-emerald-500"
                style={{
                  width: `${product.progress}%`,
                }}
              />

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}