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
];

export default function LowStockTable() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-100 px-6 py-4">
        <h3 className="text-lg font-semibold">
          Low Stock Alerts
        </h3>
      </div>

      <div className="overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="bg-slate-50">

            <tr>

              <th className="px-6 py-3 text-left">Product</th>

              <th className="px-6 py-3 text-left">Category</th>

              <th className="px-6 py-3 text-left">Current Stock</th>

              <th className="px-6 py-3 text-left">Minimum Stock</th>

              <th className="px-6 py-3 text-left">Status</th>

              <th className="px-6 py-3 text-right">Action</th>

            </tr>

          </thead>

          <tbody>

            {products.map((item) => (

              <tr
                key={item.product}
                className="border-t border-slate-100 hover:bg-slate-50"
              >

                <td className="px-6 py-4 font-medium">
                  {item.product}
                </td>

                <td className="px-6 py-4">
                  {item.category}
                </td>

                <td className="px-6 py-4">
                  {item.stock}
                </td>

                <td className="px-6 py-4">
                  {item.minimum}
                </td>

                <td className="px-6 py-4">

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

                <td className="px-6 py-4 text-right">

                  <button className="rounded-lg border border-slate-200 px-4 py-2 hover:bg-slate-100 transition">
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