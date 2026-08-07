import LowstockHeader from "./LowstockHeader";
import { LowStockMobileTable } from "./LowStockMobileTable";
import RestockButton from "./RestockButton";

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
    <div
      className="
        flex
        h-full
        lg:min-h-[330px]
        h-[500px]
        lg:max-h-[330px]
        min-h-0
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
      "
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <LowstockHeader products={products} />

      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <LowStockMobileTable products={products} />

      {/* ================================================= */}
      {/* TABLE VIEW - TABLET + DESKTOP */}
      {/* ================================================= */}

      <div
        className="
          hidden
          min-h-0
          flex-1
          overflow-auto
          md:block
          scrollbar-none
        "
      >
        <table className="w-full min-w-[680px] text-sm">
          {/* Table Header */}

          <thead className="sticky top-0 z-10 bg-slate-50">
            <tr className="border-b border-slate-100">
              <th
                className="
                  whitespace-nowrap
                  px-4
                  py-3
                  text-left
                  text-xs
                  font-semibold
                  text-slate-500
                  lg:px-5
                "
              >
                Product
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-4
                  py-3
                  text-left
                  text-xs
                  font-semibold
                  text-slate-500
                  lg:px-5
                "
              >
                Category
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-4
                  py-3
                  text-left
                  text-xs
                  font-semibold
                  text-slate-500
                  lg:px-5
                "
              >
                Current Stock
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-4
                  py-3
                  text-left
                  text-xs
                  font-semibold
                  text-slate-500
                  lg:px-5
                "
              >
                Minimum Stock
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-4
                  py-3
                  text-left
                  text-xs
                  font-semibold
                  text-slate-500
                  lg:px-5
                "
              >
                Status
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-4
                  py-3
                  text-right
                  text-xs
                  font-semibold
                  text-slate-500
                  lg:px-5
                "
              >
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}

          <tbody>
            {products.map((item) => (
              <tr
                key={item.product}
                className="
                  border-b
                  border-slate-100
                  transition
                  hover:bg-slate-50
                "
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
                    className={`
                      rounded-full
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      ${
                        item.status === "Critical"
                          ? "bg-red-100 text-red-600"
                          : "bg-orange-100 text-orange-600"
                      }
                    `}
                  >
                    {item.status}
                  </span>
                </td>

                {/* Action */}

                <td className="whitespace-nowrap px-4 py-3 text-right lg:px-5 lg:py-3.5">
                  <RestockButton />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}