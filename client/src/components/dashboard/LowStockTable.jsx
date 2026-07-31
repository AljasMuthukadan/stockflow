const products = [
  {
    product: "Raw Sugar",
    category: "Raw Materials",
    stock: "120 kg",
    minimum: "250 kg",
    status: "Low",
  },
  {
    product: "Milk Powder",
    category: "Raw Materials",
    stock: "80 kg",
    minimum: "200 kg",
    status: "Low",
  },
  {
    product: "Chocolate Syrup",
    category: "Raw Materials",
    stock: "25 L",
    minimum: "100 L",
    status: "Critical",
  },
  {
    product: "Packaging Box",
    category: "Packaging",
    stock: "150 pcs",
    minimum: "300 pcs",
    status: "Low",
  },
  {
    product: "Vanilla Essence",
    category: "Raw Materials",
    stock: "10 L",
    minimum: "50 L",
    status: "Critical",
  },
  {
    product: "Cocoa Powder",
    category: "Raw Materials",
    stock: "45 kg",
    minimum: "100 kg",
    status: "Low",
  },
  {
    product: "Plastic Cups",
    category: "Packaging",
    stock: "180 pcs",
    minimum: "500 pcs",
    status: "Critical",
  },
];

export default function LowStockTable() {
  return (
    <div className="flex h-[330px] min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* Header - Fixed */}
      <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-3">
        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Low Stock Alerts
          </h3>

          <p className="mt-0.5 text-xs text-slate-400">
            Products that need attention
          </p>
        </div>

        <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
          {products.length} Alerts
        </span>
      </div>

      {/* Table Area */}
      <div className="min-h-0 flex-1 overflow-hidden">

        {/* Horizontal scroll for smaller screens */}
        <div className="h-full scrollbar-none overflow-x-auto">

          <table className="min-w-[760px] w-full text-sm">

            {/* Table Header - Fixed */}
            <thead className="sticky top-0 z-10 bg-slate-50">

              <tr className="border-b border-slate-100">

                <th className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold text-slate-500">
                  Product
                </th>

                <th className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold text-slate-500">
                  Category
                </th>

                <th className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold text-slate-500">
                  Current Stock
                </th>

                <th className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold text-slate-500">
                  Minimum Stock
                </th>

                <th className="whitespace-nowrap px-5 py-3 text-left text-xs font-semibold text-slate-500">
                  Status
                </th>

                <th className="whitespace-nowrap px-5 py-3 text-right text-xs font-semibold text-slate-500">
                  Action
                </th>

              </tr>

            </thead>

            {/* ONLY BODY SCROLLS */}
            <tbody>

              {products.map((item) => (

                <tr
                  key={item.product}
                  className="border-b border-slate-100 transition hover:bg-slate-50"
                >

                  {/* Product */}

                  <td className="whitespace-nowrap px-5 py-3.5">
                    <span className="font-medium text-slate-800">
                      {item.product}
                    </span>
                  </td>

                  {/* Category */}

                  <td className="whitespace-nowrap px-5 py-3.5 text-slate-500">
                    {item.category}
                  </td>

                  {/* Current Stock */}

                  <td className="whitespace-nowrap px-5 py-3.5">
                    <span
                      className={
                        item.status === "Critical"
                          ? "font-semibold text-red-600"
                          : "font-semibold text-orange-600"
                      }
                    >
                      {item.stock}
                    </span>
                  </td>

                  {/* Minimum Stock */}

                  <td className="whitespace-nowrap px-5 py-3.5 text-slate-500">
                    {item.minimum}
                  </td>

                  {/* Status */}

                  <td className="whitespace-nowrap px-5 py-3.5">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        item.status === "Critical"
                          ? "bg-red-100 text-red-600"
                          : "bg-orange-100 text-orange-600"
                      }`}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* Action */}

                  <td className="whitespace-nowrap px-5 py-3.5 text-right">

                    <button
                      type="button"
                      className="
                        rounded-lg
                        border
                        border-slate-200
                        px-4
                        py-2
                        text-sm
                        font-medium
                        text-slate-700
                        transition
                        hover:bg-slate-100
                      "
                    >
                      Restock
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}