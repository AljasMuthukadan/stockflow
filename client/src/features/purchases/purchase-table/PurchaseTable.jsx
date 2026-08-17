import PurchaseRow from "./PurchaseRow.jsx";
import { purchaseOrders } from "../purchaseData.js";
import Pagination from "../../../components/common/Pagination.jsx";

export default function PurchaseTable() {
  return (
    <div
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <div className="block md:hidden">
        <div
          className="
            max-h-[calc(100vh-300px)]
            space-y-3
            overflow-y-auto
            p-3
            scrollbar-none
          "
        >
          {purchaseOrders.map((order) => (
            <article
              key={order.id}
              className="
                w-full
                min-w-0
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
              {/* PURCHASE ORDER HEADER */}
              {/* ================================================= */}

              <div
                className="
                  flex
                  min-w-0
                  items-start
                  justify-between
                  gap-3
                "
              >
                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    PO Number
                  </p>

                  <h3
                    className="
                      mt-1
                      truncate
                      text-sm
                      font-semibold
                      text-slate-800
                    "
                  >
                    {order.poNumber || order.id}
                  </h3>
                </div>

                {/* Status */}

                <span
                  className="
                    shrink-0
                    rounded-full
                    bg-slate-100
                    px-2.5
                    py-1
                    text-xs
                    font-medium
                    text-slate-600
                  "
                >
                  {order.status}
                </span>
              </div>

              {/* ================================================= */}
              {/* SUPPLIER + DATE */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                {/* Supplier */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Supplier
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-700">
                    {order.supplier}
                  </p>
                </div>

                {/* Date */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Date
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-700">
                    {order.date}
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* ORDER DETAILS */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                {/* Items */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Items
                  </p>

                  <p className="mt-1 text-sm font-medium text-slate-700">
                    {order.items}
                  </p>
                </div>

                {/* Amount */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Amount
                  </p>

                  <p className="mt-1 text-sm font-semibold text-slate-800">
                    {order.amount}
                  </p>
                </div>
              </div>

              {/* ================================================= */}
              {/* STATUS + PAYMENT */}
              {/* ================================================= */}

              <div
                className="
                  mt-4
                  flex
                  min-w-0
                  flex-col
                  gap-4
                  border-t
                  border-slate-100
                  pt-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                {/* Status */}

                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-slate-400">
                    Status
                  </p>

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-slate-100
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-slate-600
                    "
                  >
                    {order.status}
                  </span>
                </div>

                {/* Payment */}

                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-slate-400">
                    Payment
                  </p>

                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-slate-100
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      text-slate-600
                    "
                  >
                    {order.payment}
                  </span>
                </div>
              </div>
            </article>
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
          md:block
        "
      >
        <table className="w-full min-w-[1000px]">
          {/* ================================================= */}
          {/* TABLE HEADER */}
          {/* ================================================= */}

          <thead className="bg-slate-50">
            <tr>
              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                PO Number
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Supplier
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Date
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Items
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Amount
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Status
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-left
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Payment
              </th>

              <th
                className="
                  whitespace-nowrap
                  px-6
                  py-4
                  text-right
                  text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-slate-500
                "
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* ================================================= */}
          {/* TABLE BODY */}
          {/* ================================================= */}

          <tbody>
            {purchaseOrders.map((order) => (
              <PurchaseRow
                key={order.id}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>

      {/* ================================================= */}
      {/* PAGINATION */}
      {/* ================================================= */}

      <div
        className="
          flex
          flex-col
          gap-3
          border-t
          border-slate-200
          px-4
          py-4
          sm:flex-row
          sm:items-center
          sm:justify-between
          sm:px-6
        "
      >
        {/* Information */}

        <p className="text-xs text-slate-500 sm:text-sm">
          Showing{" "}
          <strong className="font-semibold text-slate-700">
            1–5
          </strong>{" "}
          of{" "}
          <strong className="font-semibold text-slate-700">
            {purchaseOrders.length}
          </strong>{" "}
          orders
        </p>

        {/* Pagination */}

        <Pagination/>
      </div>
    </div>
  );
}