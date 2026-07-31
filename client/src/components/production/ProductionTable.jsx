import {
  MoreVertical,
  Factory,
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
      return "bg-green-100 text-green-700 border border-green-200";

    case "In Progress":
      return "bg-blue-100 text-blue-700 border border-blue-200";

    case "Pending":
      return "bg-yellow-100 text-yellow-700 border border-yellow-200";

    default:
      return "bg-slate-100 text-slate-600";
  }
};

const progressColor = (progress) => {
  if (progress === 100) return "bg-green-500";
  if (progress > 60) return "bg-blue-500";
  if (progress > 30) return "bg-orange-500";
  return "bg-red-500";
};

const ProductionTable = () => {
  return (
    <div className="overflow-hidden mx-8 rounded-2xl border border-slate-200 bg-white shadow-sm">

      <div className="overflow-x-auto">

        <table className="min-w-[1250px] w-full">

          <thead className="border-b bg-slate-50">

            <tr className="text-xs uppercase tracking-wider text-slate-500">

              <th className="px-6 py-4">
                <input type="checkbox" />
              </th>

              <th className="px-6 py-4 text-left">
                Production Order
              </th>

              <th className="px-6 py-4 text-left">
                Batch
              </th>

              <th className="px-6 py-4 text-left">
                Quantity
              </th>

              <th className="px-6 py-4 text-left">
                Progress
              </th>

              <th className="px-6 py-4 text-left">
                Machine
              </th>

              <th className="px-6 py-4 text-left">
                Supervisor
              </th>

              <th className="px-6 py-4 text-left">
                Due Date
              </th>

              <th className="px-6 py-4 text-left">
                Status
              </th>

              <th className="px-6 py-4 text-center">
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {productionOrders.map((order) => (

              <tr
                key={order.id}
                className="border-b transition hover:bg-slate-50"
              >

                <td className="px-6 py-5">
                  <input type="checkbox" />
                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">

                      <Factory
                        size={22}
                        className="text-green-600"
                      />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-800">
                        {order.product}
                      </h3>

                      <p className="text-xs text-slate-400">
                        {order.id}
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5 font-medium text-slate-700">
                  {order.batch}
                </td>

                <td className="px-6 py-5">
                  {order.quantity} Units
                </td>

                <td className="px-6 py-5">

                  <div className="w-44">

                    <div className="mb-2 flex justify-between text-xs">

                      <span>{order.progress}%</span>

                      <span className="text-slate-400">
                        Completed
                      </span>

                    </div>

                    <div className="h-2 rounded-full bg-slate-100">

                      <div
                        className={`h-2 rounded-full ${progressColor(order.progress)}`}
                        style={{
                          width: `${order.progress}%`,
                        }}
                      />

                    </div>

                  </div>

                </td>
                                <td className="px-6 py-5">
                  <div>
                    <p className="font-medium text-slate-800">
                      {order.machine}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Production Line
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">

                  <div className="flex items-center gap-3">

                    <div
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      bg-blue-100
                      font-semibold
                      text-blue-700
                      "
                    >
                      {order.supervisor.charAt(0)}
                    </div>

                    <div>

                      <p className="font-medium text-slate-800">
                        {order.supervisor}
                      </p>

                      <p className="text-xs text-slate-400">
                        Supervisor
                      </p>

                    </div>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <div>

                    <p className="font-medium text-slate-700">
                      {order.dueDate}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Expected Completion
                    </p>

                  </div>

                </td>

                <td className="px-6 py-5">

                  <span
                    className={`
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    ${badgeStyle(order.status)}
                    `}
                  >
                    <span className="h-2 w-2 rounded-full bg-current"></span>

                    {order.status}
                  </span>

                </td>

                <td className="px-6 py-5">

                  <div className="flex justify-center">

                    <button
                      className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-xl
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

            ))}

          </tbody>

        </table>

      </div>

      {/* Footer */}

      <div
        className="
        flex
        flex-col
        gap-4
        border-t
        border-slate-200
        px-6
        py-5
        md:flex-row
        md:items-center
        md:justify-between
        "
      >

        <div>

          <p className="text-sm font-medium text-slate-700">
            Showing <span className="font-semibold">1–5</span> of{" "}
            <span className="font-semibold">148</span> production orders
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Updated 2 minutes ago
          </p>

        </div>

        <div className="flex items-center gap-2">

          <button
            className="
            rounded-xl
            border
            border-slate-200
            px-4
            py-2
            text-sm
            transition
            hover:bg-slate-50
            "
          >
            Previous
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white">
            1
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50">
            2
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50">
            3
          </button>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-50">
            4
          </button>

          <button
            className="
            rounded-xl
            border
            border-slate-200
            px-4
            py-2
            text-sm
            transition
            hover:bg-slate-50
            "
          >
            Next
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductionTable;