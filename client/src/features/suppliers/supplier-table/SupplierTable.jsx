import {  ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { suppliers } from "../supplierData";
import { SupplyCategories, 
  PartyType, 
  SupplierInfo, 
  ContactInfo, 
  OutstandingInfo, 
  OrdersInfo , 
  ActionButton } from "./Components";
import SupplierFilters from "../SupplierFilters";



/* ================================================= */
/* PAGINATION */
/* ================================================= */

const ITEMS_PER_PAGE = 10;


/* ================================================= */
/* MOBILE CARD */
/* ================================================= */

const SupplierMobileCard = ({ supplier }) => {
  return (
    <article
      className="
        rounded-xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-sm
        transition
        hover:shadow-md
      "
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <div className="flex min-w-0 items-start justify-between gap-3">
        <SupplierInfo supplier={supplier} />

        <ActionButton />
      </div>

      {/* ================================================= */}
      {/* PARTY TYPE */}
      {/* ================================================= */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Party Type
        </p>

        <PartyType type={supplier.partyType} />
      </div>

      {/* ================================================= */}
      {/* SUPPLIES */}
      {/* ================================================= */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Supplies
        </p>

        <SupplyCategories categories={supplier.supplyCategory} />
      </div>

      {/* ================================================= */}
      {/* CONTACT + ORDERS */}
      {/* ================================================= */}

      <div className="mt-4 grid grid-cols-2 gap-4 border-t border-slate-100 pt-4">
        {/* Contact */}

        <div className="min-w-0">
          <p className="mb-1.5 text-xs text-slate-400">
            Contact
          </p>

          <ContactInfo supplier={supplier} />
        </div>

        {/* Orders */}

        <div>
          <p className="mb-1.5 text-xs text-slate-400">
            Orders
          </p>

          <OrdersInfo orders={supplier.orders} />
        </div>
      </div>

      {/* ================================================= */}
      {/* OUTSTANDING */}
      {/* ================================================= */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-1.5 text-xs text-slate-400">
          Outstanding
        </p>

        <OutstandingInfo supplier={supplier} />
      </div>
    </article>
  );
};

/* ================================================= */
/* PAGINATION */
/* ================================================= */

const Pagination = ({
  currentPage,
  totalPages,
  startIndex,
  totalItems,
  handlePrevious,
  handleNext,
  handlePageChange,
}) => {
  return (
    <div
      className="
        flex
        flex-col
        gap-3
        border-t
        border-slate-200
        px-4
        py-3
        sm:flex-row
        sm:items-center
        sm:justify-between
        sm:px-6
      "
    >
      {/* Result information */}

      <p className="text-xs text-slate-500">
        Showing{" "}
        <span className="font-semibold text-slate-700">
          {totalItems === 0 ? 0 : startIndex + 1}
        </span>{" "}
        -{" "}
        <span className="font-semibold text-slate-700">
          {Math.min(
            startIndex + ITEMS_PER_PAGE,
            totalItems
          )}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-slate-700">
          {totalItems}
        </span>{" "}
        suppliers
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
  );
};

/* ================================================= */
/* MAIN COMPONENT */
/* ================================================= */

const SupplierTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  /* ================================================= */
  /* PAGINATION CALCULATIONS */
  /* ================================================= */

  const totalPages = Math.ceil(
    suppliers.length / ITEMS_PER_PAGE
  );

  const startIndex =
    (currentPage - 1) * ITEMS_PER_PAGE;

  const currentSuppliers = suppliers.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  /* ================================================= */
  /* PAGE HANDLERS */
  /* ================================================= */

  const handlePrevious = () => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 1)
    );
  };

  const handleNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, totalPages)
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div
      className="
        mb-3
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* ================================================= */}
      {/* FILTERS */}
      {/* ================================================= */}

      <SupplierFilters />

      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <div className="block md:hidden">
        <div
          className="
            max-h-[calc(100vh-330px)]
            space-y-3
            overflow-y-auto
            p-3
            scrollbar-none
          "
        >
          {currentSuppliers.map((supplier) => (
            <SupplierMobileCard
              key={supplier.id}
              supplier={supplier}
            />
          ))}
        </div>
      </div>

      {/* ================================================= */}
      {/* TABLET + DESKTOP */}
      {/* ================================================= */}

      <div
        className="
          hidden
          overflow-x-auto
          scrollbar-none
          md:block
        "
      >
        <table className="w-full min-w-[1150px]">
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <thead className="bg-slate-50">
            <tr className="text-left text-sm text-slate-500">
              <th className="px-6 py-3 font-semibold">
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

              <th className="px-4 py-3 text-center font-semibold">
                Actions
              </th>
            </tr>
          </thead>

          {/* ================================================= */}
          {/* BODY */}
          {/* ================================================= */}

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
                {/* Supplier */}

                <td className="px-6 py-3">
                  <SupplierInfo supplier={supplier} />
                </td>

                {/* Party Type */}

                <td className="px-4 py-3">
                  <PartyType
                    type={supplier.partyType}
                  />
                </td>

                {/* Supplies */}

                <td className="w-56 px-3 py-3">
                  <SupplyCategories
                    categories={supplier.supplyCategory}
                  />
                </td>

                {/* Contact */}

                <td className="px-4 py-3">
                  <ContactInfo supplier={supplier} />
                </td>

                {/* Outstanding */}

                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center">
                    <OutstandingInfo
                      supplier={supplier}
                    />
                  </div>
                </td>

                {/* Orders */}

                <td className="px-4 py-3">
                  <OrdersInfo
                    orders={supplier.orders}
                  />
                </td>

                {/* Action */}

                <td className="px-4 py-3">
                  <div className="flex justify-center">
                    <ActionButton />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================================================= */}
      {/* PAGINATION */}
      {/* ================================================= */}

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        startIndex={startIndex}
        totalItems={suppliers.length}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default SupplierTable;