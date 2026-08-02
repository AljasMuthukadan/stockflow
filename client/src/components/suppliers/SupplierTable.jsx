import { useState } from "react";
import {
  MoreVertical,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

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


const ITEMS_PER_PAGE = 10;


const SupplierTable = () => {

  const [currentPage, setCurrentPage] = useState(1);


  // Total pages

  const totalPages = Math.ceil(
    suppliers.length / ITEMS_PER_PAGE
  );


  // Starting index

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;


  // Suppliers for current page

  const currentSuppliers = suppliers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );


  // Previous page

  const handlePrevious = () => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 1)
    );
  };


  // Next page

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  };


  // Direct page navigation

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


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

      {/* ================= FILTERS ================= */}

      <SupplierFilters />


      {/* ================= TABLE ================= */}

      <div className="overflow-x-auto">

        <table className="min-w-[1150px] w-full">

          {/* Header */}

          <thead className="bg-slate-50">

            <tr className="text-left text-sm text-slate-500">

              <th className="px-30 py-3 font-semibold">
                Supplier
              </th>

              <th className="px-4 py-3 font-semibold">
                Party Type
              </th>

              <th className="px-3 py-3 font-semibold">
                Supplies
              </th>

              <th className="px-4 py-3 font-semibold">
                Contact
              </th>

              <th className="px-4 py-3 font-semibold">
                Outstanding
              </th>

              <th className="px-4 py-3 font-semibold">
                Orders
              </th>

              <th className="px-4 py-3 font-semibold text-center">
                Actions
              </th>

            </tr>

          </thead>


          {/* Body */}

          <tbody>

            {currentSuppliers.map((supplier) => (

              <tr
                key={supplier.id}
                className="
                  border-t
                  border-slate-200
                  transition
                  hover:bg-slate-50
                "
              >

                {/* ================= SUPPLIER ================= */}

                <td className="px-6 py-3">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-green-100
                        text-sm
                        font-bold
                        text-green-700
                      "
                    >
                      {supplier.avatar}
                    </div>


                    <div className="min-w-0">

                      <h3 className="truncate font-semibold text-slate-800">
                        {supplier.company}
                      </h3>

                      <p className="mt-0.5 text-[11px] text-slate-500">
                        GSTIN : {supplier.gstin}
                      </p>

                      <p className="text-[11px] text-slate-400">
                        {supplier.city}
                      </p>

                    </div>

                  </div>

                </td>


                {/* ================= PARTY TYPE ================= */}

                <td className="px-4 py-3">

                  <span
                    className={`
                      inline-flex
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


                {/* ================= SUPPLIES ================= */}

                <td className="w-56 px-3 py-3">

                  <div className="flex flex-wrap gap-1.5">

                    {supplier.supplyCategory
                      .slice(0, 2)
                      .map((item) => (

                        <span
                          key={item}
                          className="
                            whitespace-nowrap
                            rounded-md
                            bg-slate-100
                            px-2.5
                            py-1
                            text-[11px]
                            font-medium
                            text-slate-700
                          "
                        >
                          {item}
                        </span>

                      ))}


                    {supplier.supplyCategory.length > 2 && (

                      <span
                        className="
                          whitespace-nowrap
                          rounded-md
                          bg-emerald-50
                          px-2.5
                          py-1
                          text-[11px]
                          font-semibold
                          text-emerald-700
                        "
                      >
                        +{supplier.supplyCategory.length - 2}
                      </span>

                    )}

                  </div>

                </td>


                {/* ================= CONTACT ================= */}

                <td className="px-4 py-3">

                  <div>

                    <p className="font-medium text-slate-800">
                      {supplier.contact}
                    </p>

                    <p className="text-[11px] text-slate-500">
                      {supplier.phone}
                    </p>

                    <p className="text-[11px] text-slate-400">
                      {supplier.email}
                    </p>

                  </div>

                </td>


                {/* ================= OUTSTANDING ================= */}

                <td className="px-4 py-3 text-center">

                  <div className="flex flex-col items-center">

                    <h4 className="font-semibold text-slate-800">
                      ₹{supplier.outstanding.toLocaleString()}
                    </h4>

                    <span
                      className={`
                        mt-1.5
                        inline-flex
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-medium
                        ${outstandingBadge(
                          supplier.outstandingType
                        )}
                      `}
                    >
                      {supplier.outstandingType}
                    </span>

                  </div>

                </td>


                {/* ================= ORDERS ================= */}

                <td className="px-4 py-3">

                  <span
                    className="
                      rounded-lg
                      bg-slate-100
                      px-3
                      py-1.5
                      text-sm
                      font-semibold
                    "
                  >
                    {supplier.orders}
                  </span>

                </td>


                {/* ================= ACTION ================= */}

                <td className="px-4 py-3">

                  <div className="flex justify-center">

                    <button
                      type="button"
                      className="
                        rounded-lg
                        p-2
                        text-slate-500
                        transition
                        hover:bg-slate-100
                        hover:text-slate-800
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


      {/* ================= PAGINATION ================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-slate-200
          px-6
          py-3
        "
      >

        {/* Result information */}

        <p className="text-xs text-slate-500">

          Showing{" "}

          <span className="font-semibold text-slate-700">
            {startIndex + 1}
          </span>

          {" - "}

          <span className="font-semibold text-slate-700">
            {Math.min(
              startIndex + ITEMS_PER_PAGE,
              suppliers.length
            )}
          </span>

          {" of "}

          <span className="font-semibold text-slate-700">
            {suppliers.length}
          </span>

          {" suppliers"}

        </p>


        {/* Pagination controls */}

        <div className="flex items-center gap-1.5">

          {/* Previous */}

          <button
            type="button"
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-slate-500
              transition
              hover:bg-slate-50
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronLeft size={16} />
          </button>


          {/* Page numbers */}

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((page) => (

            <button
              key={page}
              type="button"
              onClick={() => handlePageChange(page)}
              className={`
                flex
                h-8
                min-w-8
                items-center
                justify-center
                rounded-lg
                px-2
                text-xs
                font-semibold
                transition

                ${
                  currentPage === page
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "border border-slate-200 text-slate-600 hover:bg-slate-50"
                }
              `}
            >
              {page}
            </button>

          ))}


          {/* Next */}

          <button
            type="button"
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-slate-500
              transition
              hover:bg-slate-50
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronRight size={16} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default SupplierTable;