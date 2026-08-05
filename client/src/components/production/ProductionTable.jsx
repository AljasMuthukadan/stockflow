import { useState } from "react";
import {
  MoreVertical,
  Factory,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const productionOrders = [
  {
    id: "PRD-1001",
    product: "Chocolate Ice Cream",
    batch: "BCH-2101",
    quantity: 500,
    machine: "Mixer A",
    supervisor: "John David",
    startDate: "20 Jul 2026",
    dueDate: "25 Jul 2026",
    progress: 85,
    status: "In Progress",
  },
  {
    id: "PRD-1002",
    product: "Vanilla Ice Cream",
    batch: "BCH-2102",
    quantity: 350,
    machine: "Mixer B",
    supervisor: "Sarah Wilson",
    startDate: "18 Jul 2026",
    dueDate: "22 Jul 2026",
    progress: 100,
    status: "Completed",
  },
  {
    id: "PRD-1003",
    product: "Strawberry Milkshake",
    batch: "BCH-2103",
    quantity: 200,
    machine: "Blender A",
    supervisor: "Michael",
    startDate: "21 Jul 2026",
    dueDate: "26 Jul 2026",
    progress: 45,
    status: "In Progress",
  },
  {
    id: "PRD-1004",
    product: "Chocolate Bar",
    batch: "BCH-2104",
    quantity: 1200,
    machine: "Packing Line",
    supervisor: "Emma",
    startDate: "22 Jul 2026",
    dueDate: "27 Jul 2026",
    progress: 15,
    status: "Pending",
  },
  {
    id: "PRD-1005",
    product: "Butter Scotch Cone",
    batch: "BCH-2105",
    quantity: 700,
    machine: "Cone Line",
    supervisor: "David",
    startDate: "17 Jul 2026",
    dueDate: "21 Jul 2026",
    progress: 100,
    status: "Completed",
  },
];

const badgeStyle = (status) => {
  switch (status) {
    case "Completed":
      return "border border-green-200 bg-green-50 text-green-700";

    case "In Progress":
      return "border border-blue-200 bg-blue-50 text-blue-700";

    case "Pending":
      return "border border-yellow-200 bg-yellow-50 text-yellow-700";

    default:
      return "border border-slate-200 bg-slate-50 text-slate-600";
  }
};

const progressColor = (progress) => {
  if (progress === 100) {
    return "bg-green-500";
  }

  if (progress > 60) {
    return "bg-blue-500";
  }

  if (progress > 30) {
    return "bg-orange-500";
  }

  return "bg-red-500";
};

const ProductionTable = () => {
  const [selectedOrders, setSelectedOrders] = useState([]);

  const allSelected =
    selectedOrders.length === productionOrders.length;

  const toggleAll = () => {
    if (allSelected) {
      setSelectedOrders([]);
    } else {
      setSelectedOrders(productionOrders.map((order) => order.id));
    }
  };

  const toggleOrder = (id) => {
    setSelectedOrders((current) =>
      current.includes(id)
        ? current.filter((orderId) => orderId !== id)
        : [...current, id]
    );
  };

  return (
    <div className="mx-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

      {/* ========================= */}
      {/* TABLE */}
      {/* ========================= */}

      <div className="overflow-x-auto">

        <table className="min-w-[1250px] w-full">

          {/* ========================= */}
          {/* HEADER */}
          {/* ========================= */}

          <thead className="border-b border-slate-200 bg-slate-50">

            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">

              <th className="w-12 px-5 py-4 text-center">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  className="h-4 w-4 rounded border-slate-300 accent-green-600"
                />
              </th>

              <th className="px-5 py-4">
                Production Order
              </th>

              <th className="px-5 py-4">
                Batch
              </th>

              <th className="px-5 py-4">
                Quantity
              </th>

              <th className="px-5 py-4">
                Progress
              </th>

              <th className="px-5 py-4">
                Machine
              </th>

              <th className="px-5 py-4">
                Supervisor
              </th>

              <th className="px-5 py-4">
                Due Date
              </th>

              <th className="px-5 py-4">
                Status
              </th>

              <th className="px-5 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          {/* ========================= */}
          {/* BODY */}
          {/* ========================= */}

          <tbody>

            {productionOrders.map((order) => {

              const isSelected = selectedOrders.includes(order.id);

              return (
                <tr
                  key={order.id}
                  className={`
                    border-b
                    border-slate-100
                    transition
                    hover:bg-slate-50
                    ${
                      isSelected
                        ? "bg-green-50/40"
                        : "bg-white"
                    }
                  `}
                >

                  {/* Checkbox */}

                  <td className="px-5 py-4 text-center">

                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => toggleOrder(order.id)}
                      className="h-4 w-4 rounded border-slate-300 accent-green-600"
                    />

                  </td>

                  {/* Production Order */}

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50">

                        <Factory
                          size={19}
                          className="text-green-600"
                        />

                      </div>

                      <div className="min-w-0">

                        <p className="truncate font-semibold text-slate-800">
                          {order.product}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          {order.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Batch */}

                  <td className="px-5 py-4">

                    <span className="font-medium text-slate-700">
                      {order.batch}
                    </span>

                  </td>

                  {/* Quantity */}

                  <td className="px-5 py-4">

                    <div>
                      <p className="font-medium text-slate-700">
                        {order.quantity.toLocaleString()}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Units
                      </p>
                    </div>

                  </td>

                  {/* Progress */}

                  <td className="px-5 py-4">

                    <div className="w-44">

                      <div className="mb-1.5 flex items-center justify-between">

                        <span className="text-xs font-semibold text-slate-700">
                          {order.progress}%
                        </span>

                        <span className="text-[11px] text-slate-400">
                          Completed
                        </span>

                      </div>

                      <div className="h-1.5 overflow-hidden rounded-full bg-slate-100">

                        <div
                          className={`h-full rounded-full transition-all ${progressColor(
                            order.progress
                          )}`}
                          style={{
                            width: `${order.progress}%`,
                          }}
                        />

                      </div>

                    </div>

                  </td>

                  {/* Machine */}

                  <td className="px-5 py-4">

                    <div>

                      <p className="font-medium text-slate-800">
                        {order.machine}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Production Line
                      </p>

                    </div>

                  </td>

                  {/* Supervisor */}

                  <td className="px-5 py-4">

                    <div className="flex items-center gap-2.5">

                      <div
                        className="
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-50
                          text-xs
                          font-semibold
                          text-blue-700
                        "
                      >
                        {order.supervisor.charAt(0)}
                      </div>

                      <div className="min-w-0">

                        <p className="truncate font-medium text-slate-800">
                          {order.supervisor}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          Supervisor
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* Due Date */}

                  <td className="px-5 py-4">

                    <div>

                      <p className="font-medium text-slate-700">
                        {order.dueDate}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Expected Completion
                      </p>

                    </div>

                  </td>

                  {/* Status */}

                  <td className="px-5 py-4">

                    <span
                      className={`
                        inline-flex
                        items-center
                        gap-2
                        whitespace-nowrap
                        rounded-full
                        px-2.5
                        py-1
                        text-xs
                        font-semibold
                        ${badgeStyle(order.status)}
                      `}
                    >

                      <span className="h-1.5 w-1.5 rounded-full bg-current" />

                      {order.status}

                    </span>

                  </td>

                  {/* Action */}

                  <td className="px-5 py-4">

                    <div className="flex justify-center">

                      <button
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-lg
                          text-slate-500
                          transition
                          hover:bg-slate-100
                          hover:text-slate-700
                        "
                      >
                        <MoreVertical size={18} />
                      </button>

                    </div>

                  </td>

                </tr>
              );
            })}

          </tbody>

        </table>

      </div>

      {/* ========================= */}
      {/* FOOTER / PAGINATION */}
      {/* ========================= */}

      <div className="flex flex-col gap-4 border-t border-slate-200 px-5 py-4 md:flex-row md:items-center md:justify-between">

        {/* Information */}

        <div>

          <p className="text-sm font-medium text-slate-700">
            Showing{" "}
            <span className="font-semibold">
              1–5
            </span>{" "}
            of{" "}
            <span className="font-semibold">
              148
            </span>{" "}
            production orders
          </p>

          <p className="mt-0.5 text-xs text-slate-400">
            Updated 2 minutes ago
          </p>

        </div>

        {/* Pagination */}

        <div className="flex items-center gap-1.5">

          {/* Previous */}

          <button
            className="
              flex
              h-9
              items-center
              gap-1
              rounded-lg
              border
              border-slate-200
              px-3
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {/* Page 1 */}

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-green-600
              text-sm
              font-semibold
              text-white
            "
          >
            1
          </button>

          {/* Page 2 */}

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            2
          </button>

          {/* Page 3 */}

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            3
          </button>

          {/* Page 4 */}

          <button
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            4
          </button>

          {/* Next */}

          <button
            className="
              flex
              h-9
              items-center
              gap-1
              rounded-lg
              border
              border-slate-200
              px-3
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            Next
            <ChevronRight size={16} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductionTable;