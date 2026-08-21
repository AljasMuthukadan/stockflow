import { useState } from "react";
import {orders} from '../data'
import TableHeader from "./TableHeader";
import TableFilters from "./TableFilters";
import {paymentBadge, statusBadge} from './utils'
import TableMobileview from "./TableMobileview";
import ActionButton from "../../../../components/common/ActionButton";


const OrdersSection = () => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter(
    (order) =>
      order.customer
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      order.id
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <section
      className="
        w-full
        min-w-0
        overflow-hidden
        rounded-xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

     <TableHeader />

      {/* ================================================= */}
      {/* FILTERS */}
      {/* ================================================= */}

      <TableFilters search={search} setSearch={setSearch} />

      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <TableMobileview filteredOrders={filteredOrders} />

      {/* ================================================= */}
      {/* TABLET + DESKTOP */}
      {/* ================================================= */}

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[850px] text-sm">
          <thead
            className="
              bg-slate-50
              text-xs
              uppercase
              text-slate-500
            "
          >
            <tr>
              {[
                "Order ID",
                "Customer",
                "Date",
                "Amount",
                "Payment",
                "Status",
                "",
              ].map((head) => (
                <th
                  key={head}
                  className="
                    whitespace-nowrap
                    px-5
                    py-3
                    text-left
                    font-semibold
                  "
                >
                  {head}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                key={order.id}
                className="
                  border-t
                  border-slate-100
                  transition
                  hover:bg-slate-50
                "
              >
                {/* Order ID */}

                <td
                  className="
                    whitespace-nowrap
                    px-5
                    py-3
                    font-semibold
                    text-slate-700
                  "
                >
                  {order.id}
                </td>

                {/* Customer */}

                <td className="px-5 py-3 text-slate-700">
                  {order.customer}
                </td>

                {/* Date */}

                <td
                  className="
                    whitespace-nowrap
                    px-5
                    py-3
                    text-slate-500
                  "
                >
                  {order.date}
                </td>

                {/* Amount */}

                <td
                  className="
                    whitespace-nowrap
                    px-5
                    py-3
                    font-medium
                  "
                >
                  {order.amount}
                </td>

                {/* Payment */}

                <td className="px-5 py-3">
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      ${paymentBadge(order.payment)}
                    `}
                  >
                    {order.payment}
                  </span>
                </td>

                {/* Status */}

                <td className="px-5 py-3">
                  <span
                    className={`
                      inline-flex
                      rounded-full
                      px-2.5
                      py-1
                      text-xs
                      font-medium
                      ${statusBadge(order.status)}
                    `}
                  >
                    {order.status}
                  </span>
                </td>

                {/* Action */}

                <td
                  className="
                    px-5
                    py-3
                    text-right
                  "
                >
              <ActionButton />
                </td>
              </tr>
            ))}

            {/* Empty State */}

            {filteredOrders.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-5 py-10 text-center"
                >
                  <p className="text-sm font-medium text-slate-600">
                    No orders found
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Try searching with a different order or customer name.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrdersSection;