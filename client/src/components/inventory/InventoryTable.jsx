import { MoreVertical } from "lucide-react";

const inventory = [
  {
    id: 1,
    name: "Raw Sugar",
    sku: "RS-1001",
    category: "Raw Materials",
    stock: "120 kg",
    unit: "kg",
    reorder: "250 kg",
    status: "Low Stock",
  },
  {
    id: 2,
    name: "Milk Powder",
    sku: "MP-1002",
    category: "Raw Materials",
    stock: "80 kg",
    unit: "kg",
    reorder: "200 kg",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Chocolate Syrup",
    sku: "CS-1003",
    category: "Raw Materials",
    stock: "25 L",
    unit: "L",
    reorder: "100 L",
    status: "Critical",
  },
  {
    id: 4,
    name: "Packaging Box",
    sku: "PB-1004",
    category: "Packaging",
    stock: "150 pcs",
    unit: "pcs",
    reorder: "300 pcs",
    status: "Low Stock",
  },
  {
    id: 5,
    name: "Vanilla Essence",
    sku: "VE-1005",
    category: "Raw Materials",
    stock: "10 L",
    unit: "L",
    reorder: "50 L",
    status: "Critical",
  },
  {
    id: 6,
    name: "Ice Cream Cup",
    sku: "IC-1006",
    category: "Packaging",
    stock: "2500 pcs",
    unit: "pcs",
    reorder: "1000 pcs",
    status: "In Stock",
  },
  {
    id: 7,
    name: "Sprinkles",
    sku: "SP-1007",
    category: "Raw Materials",
    stock: "5 kg",
    unit: "kg",
    reorder: "25 kg",
    status: "Low Stock",
  },
];

const badgeStyle = (status) => {
  switch (status) {
    case "In Stock":
      return "bg-green-100 text-green-700";

    case "Low Stock":
      return "bg-orange-100 text-orange-700";

    case "Critical":
      return "bg-red-100 text-red-700";

    default:
      return "bg-slate-100";
  }
};

const InventoryTable = () => {
  return (
    <div className="px-8 mt-5">
        <div className="bg-white  rounded-2xl border border-slate-200 overflow-hidden">

      <table className="w-full">

        <thead className="bg-slate-50">

          <tr className="text-left text-sm text-slate-500">

            <th className="p-4">Item</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Unit</th>
            <th>Reorder Level</th>
            <th>Status</th>
            <th className="text-center">Actions</th>

          </tr>

        </thead>

        <tbody>

          {inventory.map((item) => (
            <tr
              key={item.id}
              className="border-t hover:bg-slate-50 transition"
            >
              <td className="p-4 font-medium">
                {item.name}
              </td>

              <td>{item.sku}</td>

              <td>{item.category}</td>

              <td>{item.stock}</td>

              <td>{item.unit}</td>

              <td>{item.reorder}</td>

              <td>
                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-medium
                  ${badgeStyle(item.status)}
                  `}
                >
                  {item.status}
                </span>
              </td>

              <td>

                <div className="flex justify-center">

                  <button className="hover:bg-slate-100 p-2 rounded-lg">

                    <MoreVertical size={18} />

                  </button>

                </div>

              </td>

            </tr>
          ))}

        </tbody>

      </table>

      {/* Footer */}

      <div className="flex items-center justify-between p-5 border-t">

        <p className="text-sm text-slate-500">
          Showing 1–7 of 1,250 items
        </p>

        <div className="flex gap-2">

          <button className="w-9 h-9 rounded-lg border">
            &lt;
          </button>

          <button className="w-9 h-9 rounded-lg bg-green-600 text-white">
            1
          </button>

          <button className="w-9 h-9 rounded-lg border">
            2
          </button>

          <button className="w-9 h-9 rounded-lg border">
            3
          </button>

          <button className="w-9 h-9 rounded-lg border">
            &gt;
          </button>

        </div>

      </div>

    </div>
    </div>
  );
};

export default InventoryTable;