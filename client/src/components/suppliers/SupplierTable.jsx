import { MoreVertical } from "lucide-react";
import { suppliers } from "./supplierData";
import SupplierFilters from "./SupplierFilters";

const partyBadge = (type) => {
  switch (type) {
    case "Sundry Creditor":
      return "bg-red-50 text-red-700 border-red-200";

    case "Sundry Debtor":
      return "bg-green-50 text-green-700 border-green-200";

    default:
      return "bg-slate-100 text-slate-700 border-slate-200";
  }
};

const outstandingBadge = (type) => {
  switch (type) {
    case "Payable":
      return "bg-red-100 text-red-700";

    case "Receivable":
      return "bg-green-100 text-green-700";

    default:
      return "bg-slate-100 text-slate-600";
  }
};

const SupplierTable = () => {
  return (
    <div
      className="
      overflow-hidden
      rounded-2xl
      border
      border-slate-200
      bg-white
      shadow-sm
      "
    >
      {/* Filters */}

      <SupplierFilters />

      {/* Table */}

      <div className="overflow-x-auto">
        <table className="min-w-[1150px] w-full">
          <thead
            className="
            sticky
            top-0
            z-10
            bg-slate-50
            "
          >
            <tr className="text-left text-sm text-slate-500">
              <th className="px-30  py-4 font-semibold">Supplier</th>

              <th className="px-4 py-4 font-semibold">Party Type</th>

              <th className="px-3 py-4 font-semibold">Supplies</th>

              <th className="px-4 py-4 font-semibold">Contact</th>

              <th className="px-4 py-4 font-semibold">Outstanding</th>

              <th className="px-4 py-4 font-semibold">Orders</th>

              <th className="px-4 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {suppliers.map((supplier) => (
              <tr
                key={supplier.id}
                className="
                border-t
                border-slate-200
                transition
                hover:bg-slate-50
                "
              >
                {/* Company */}

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-green-100
                      font-bold
                      text-green-700
                      "
                    >
                      {supplier.avatar}
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-800">
                        {supplier.company}
                      </h3>

                      <p className="mt-1 text-xs text-slate-500">
                        GSTIN : {supplier.gstin}
                      </p>

                      <p className="text-xs text-slate-400">{supplier.city}</p>
                    </div>
                  </div>
                </td>

                {/* Party Type */}

                <td className="px-4">
                  <span
                    className={`
                    rounded-full
                    border
                    px-3
                    py-1
                    text-xs
                    font-medium
                    ${partyBadge(supplier.partyType)}
                    `}
                  >
                    {supplier.partyType}
                  </span>
                </td>

                {/* Supplies */}

                {/* Supplies */}

                <td className="px-3   py-5 w-56">
                  <div className="flex flex-wrap gap-2">
                    {supplier.supplyCategory.slice(0, 2).map((item) => (
                      <span
                        key={item}
                        className="
            rounded-md
            bg-slate-100
            px-2.5
            py-1
            text-xs
            font-medium
            text-slate-700
            whitespace-nowrap
          "
                      >
                        {item}
                      </span>
                    ))}

                    {supplier.supplyCategory.length > 2 && (
                      <span
                        className="
          rounded-md
          bg-emerald-50
          px-2.5
          py-1
          text-xs
          font-semibold
          text-emerald-700
          whitespace-nowrap
        "
                      >
                        +{supplier.supplyCategory.length - 2}
                      </span>
                    )}
                  </div>
                </td>

                {/* Contact */}

                <td className="px-4">
                  <div>
                    <p className="font-medium text-slate-800">
                      {supplier.contact}
                    </p>

                    <p className="text-xs text-slate-500">{supplier.phone}</p>

                    <p className="text-xs text-slate-400">{supplier.email}</p>
                  </div>
                </td>

                {/* Outstanding */}
                <td className="px-4 py-5 text-center">
                  <div className="flex flex-col items-center">
                    <h4 className="font-semibold text-slate-800">
                      ₹{supplier.outstanding.toLocaleString()}
                    </h4>

                    <span
                      className={`
        mt-2
        inline-flex
        rounded-full
        px-3
        py-1
        text-xs
        font-medium
        ${outstandingBadge(supplier.outstandingType)}
      `}
                    >
                      {supplier.outstandingType}
                    </span>
                  </div>
                </td>

                {/* Orders */}

                <td className="px-4">
                  <span
                    className="
                    rounded-lg
                    bg-slate-100
                    px-3
                    py-2
                    text-sm
                    font-semibold
                    "
                  >
                    {supplier.orders}
                  </span>
                </td>

                {/* Actions */}

                <td className="px-4">
                  <div className="flex justify-center">
                    <button
                      className="
                      rounded-lg
                      p-2
                      transition
                      hover:bg-slate-200
                      "
                    >
                      <MoreVertical size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupplierTable;
