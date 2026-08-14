import { useState } from "react";
import {
  Search,
  Calendar,
  Download,
  ChevronDown,
  MoreVertical,
} from "lucide-react";

const orders = [
  {
    id: "SO-1025",
    customer: "ABC Super Market",
    date: "12 Jul 2026",
    amount: "$2,450",
    payment: "Paid",
    status: "Delivered",
  },
  {
    id: "SO-1026",
    customer: "Fresh Mart",
    date: "12 Jul 2026",
    amount: "$1,860",
    payment: "Pending",
    status: "Processing",
  },
  {
    id: "SO-1027",
    customer: "Metro Hyper",
    date: "11 Jul 2026",
    amount: "$4,820",
    payment: "Paid",
    status: "Shipped",
  },
  {
    id: "SO-1028",
    customer: "City Wholesale",
    date: "11 Jul 2026",
    amount: "$980",
    payment: "Pending",
    status: "Pending",
  },
  {
    id: "SO-1029",
    customer: "Food Plaza",
    date: "10 Jul 2026",
    amount: "$3,200",
    payment: "Paid",
    status: "Delivered",
  },
];

const statusBadge = (status) => {
  const styles = {
    Delivered: "bg-green-50 text-green-600",
    Shipped: "bg-blue-50 text-blue-600",
    Processing: "bg-orange-50 text-orange-600",
    Pending: "bg-slate-100 text-slate-600",
  };

  return styles[status];
};

const paymentBadge = (status) => {
  return status === "Paid"
    ? "bg-green-50 text-green-600"
    : "bg-red-50 text-red-600";
};

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

      <div
        className="
          flex
          min-w-0
          flex-col
          gap-3
          border-b
          border-slate-100
          px-4
          py-4
          sm:px-5
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-slate-800">
            Sales Orders
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Manage and track customer orders
          </p>
        </div>

        {/* Export */}

        <button
          type="button"
          className="
            flex
            h-9
            w-full
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-slate-200
            px-3
            text-xs
            font-medium
            text-slate-600
            transition
            hover:bg-slate-50
            sm:w-auto
          "
        >
          <Download size={15} />
          Export
        </button>
      </div>

      {/* ================================================= */}
      {/* FILTERS */}
      {/* ================================================= */}

      <div
        className="
          border-b
          border-slate-100
          bg-slate-50
          p-3
          sm:p-4
        "
      >
        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-2.5
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* Search */}

          <div
            className="
              relative
              min-w-0
              sm:col-span-2
              lg:col-span-2
            "
          >
            <Search
              size={16}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order..."
              className="
                h-10
                w-full
                min-w-0
                rounded-lg
                border
                border-slate-200
                bg-white
                py-2
                pl-9
                pr-3
                text-xs
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-green-400
                focus:ring-2
                focus:ring-green-50
              "
            />
          </div>

          {/* Date */}

          <button
            type="button"
            className="
              flex
              h-10
              min-w-0
              w-full
              items-center
              justify-between
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-xs
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <span className="flex min-w-0 items-center gap-2">
              <Calendar
                size={14}
                className="shrink-0"
              />

              <span className="truncate">
                Date
              </span>
            </span>

            <ChevronDown
              size={14}
              className="shrink-0"
            />
          </button>

          {/* Status */}

          <button
            type="button"
            className="
              flex
              h-10
              min-w-0
              w-full
              items-center
              justify-between
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-xs
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <span className="truncate">
              Status
            </span>

            <ChevronDown
              size={14}
              className="shrink-0"
            />
          </button>

          {/* Payment */}

          <button
            type="button"
            className="
              flex
              h-10
              min-w-0
              w-full
              items-center
              justify-between
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-xs
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <span className="truncate">
              Payment
            </span>

            <ChevronDown
              size={14}
              className="shrink-0"
            />
          </button>
        </div>
      </div>

      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <div className="block md:hidden">
        <div className="space-y-3 p-3">
          {filteredOrders.map((order) => (
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
              {/* Order Header */}

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
                  <p className="text-xs font-medium text-slate-400">
                    Order ID
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
                    {order.id}
                  </h3>
                </div>

                <button
                  type="button"
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    text-slate-500
                    transition
                    hover:bg-slate-100
                  "
                >
                  <MoreVertical size={17} />
                </button>
              </div>

              {/* Customer */}

              <div
                className="
                  mt-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                <p className="text-xs text-slate-400">
                  Customer
                </p>

                <p className="mt-1 truncate text-sm font-medium text-slate-700">
                  {order.customer}
                </p>
              </div>

              {/* Details */}

              <div
                className="
                  mt-4
                  grid
                  grid-cols-2
                  gap-x-4
                  gap-y-4
                  border-t
                  border-slate-100
                  pt-4
                "
              >
                {/* Date */}

                <div className="min-w-0">
                  <p className="text-xs text-slate-400">
                    Date
                  </p>

                  <p className="mt-1 truncate text-sm font-medium text-slate-700">
                    {order.date}
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

                {/* Payment */}

                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-slate-400">
                    Payment
                  </p>

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
                </div>

                {/* Status */}

                <div className="min-w-0">
                  <p className="mb-1.5 text-xs text-slate-400">
                    Status
                  </p>

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
                </div>
              </div>
            </article>
          ))}

          {/* Empty State */}

          {filteredOrders.length === 0 && (
            <div className="px-4 py-8 text-center">
              <p className="text-sm font-medium text-slate-600">
                No orders found
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Try searching with a different order or customer name.
              </p>
            </div>
          )}
        </div>
      </div>

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
                  <button
                    type="button"
                    className="
                      rounded-lg
                      p-1.5
                      text-slate-500
                      transition
                      hover:bg-slate-100
                      hover:text-slate-700
                    "
                  >
                    <MoreVertical size={17} />
                  </button>
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