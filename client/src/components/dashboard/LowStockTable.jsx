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
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="flex shrink-0 items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-5">

        <div className="min-w-0">
          <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
            Low Stock Alerts
          </h3>

          <p className="mt-0.5 text-xs text-slate-400">
            Products that need attention
          </p>
        </div>

        <span className="shrink-0 rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-medium text-red-600 sm:px-3 sm:text-xs">
          {products.length} Alerts
        </span>

      </div>


      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <div className="min-h-0 flex-1 overflow-y-auto md:hidden">

        <div className="divide-y divide-slate-100">

          {products.map((item) => (

            <div
              key={item.product}
              className="px-4 py-3 transition hover:bg-slate-50"
            >

              {/* Top Row */}

              <div className="flex items-start justify-between gap-3">

                <div className="min-w-0">

                  <h4 className="truncate text-sm font-semibold text-slate-800">
                    {item.product}
                  </h4>

                  <p className="mt-0.5 truncate text-xs text-slate-400">
                    {item.category}
                  </p>

                </div>

                {/* Status */}

                <span
                  className={`shrink-0 rounded-full px-2 py-1 text-[10px] font-medium ${
                    item.status === "Critical"
                      ? "bg-red-100 text-red-600"
                      : "bg-orange-100 text-orange-600"
                  }`}
                >
                  {item.status}
                </span>

              </div>


              {/* Stock Information */}

              <div className="mt-3 flex items-center justify-between">

                <div>
                  <p className="text-[11px] text-slate-400">
                    Current
                  </p>

                  <p
                    className={`mt-0.5 text-sm font-semibold ${
                      item.status === "Critical"
                        ? "text-red-600"
                        : "text-orange-600"
                    }`}
                  >
                    {item.stock}
                  </p>
                </div>


                <div className="text-right">

                  <p className="text-[11px] text-slate-400">
                    Minimum
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-600">
                    {item.minimum}
                  </p>

                </div>

              </div>


              {/* Action */}

              <button
                type="button"
                className="
                  mt-3
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-slate-700
                  transition
                  hover:bg-slate-100
                "
              >
                Restock
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* ================================================= */}
      {/* TABLE VIEW - TABLET + DESKTOP */}
      {/* ================================================= */}

      <div className="hidden min-h-0 flex-1 overflow-auto md:block">

        <table className="w-full min-w-[680px] text-sm">

          {/* Table Header */}

          <thead className="sticky top-0 z-10 bg-slate-50">

            <tr className="border-b border-slate-100">

              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-500 lg:px-5">
                Product
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-500 lg:px-5">
                Category
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-500 lg:px-5">
                Current Stock
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-500 lg:px-5">
                Minimum Stock
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-left text-xs font-semibold text-slate-500 lg:px-5">
                Status
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-right text-xs font-semibold text-slate-500 lg:px-5">
                Action
              </th>

            </tr>

          </thead>


          {/* Table Body */}

          <tbody>

            {products.map((item) => (

              <tr
                key={item.product}
                className="border-b border-slate-100 transition hover:bg-slate-50"
              >

                {/* Product */}

                <td className="whitespace-nowrap px-4 py-3 lg:px-5 lg:py-3.5">

                  <span className="font-medium text-slate-800">
                    {item.product}
                  </span>

                </td>


                {/* Category */}

                <td className="whitespace-nowrap px-4 py-3 text-slate-500 lg:px-5 lg:py-3.5">
                  {item.category}
                </td>


                {/* Current Stock */}

                <td className="whitespace-nowrap px-4 py-3 lg:px-5 lg:py-3.5">

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

                <td className="whitespace-nowrap px-4 py-3 text-slate-500 lg:px-5 lg:py-3.5">
                  {item.minimum}
                </td>


                {/* Status */}

                <td className="whitespace-nowrap px-4 py-3 lg:px-5 lg:py-3.5">

                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                      item.status === "Critical"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }`}
                  >
                    {item.status}
                  </span>

                </td>


                {/* Action */}

                <td className="whitespace-nowrap px-4 py-3 text-right lg:px-5 lg:py-3.5">

                  <button
                    type="button"
                    className="
                      rounded-lg
                      border
                      border-slate-200
                      px-3
                      py-1.5
                      text-xs
                      font-medium
                      text-slate-700
                      transition
                      hover:bg-slate-100
                      lg:px-4
                      lg:py-2
                      lg:text-sm
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
  );
}