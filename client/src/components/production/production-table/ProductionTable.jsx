import {
  MoreVertical,
  Factory,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { productionOrders } from "./data";

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

const ProductionProgress = ({ progress }) => {
  return (
    <div className="w-full min-w-0">
      <div className="mb-1.5 flex items-center justify-between text-xs">
        <span className="font-semibold text-slate-700">
          {progress}%
        </span>

        <span className="text-slate-400">
          Completed
        </span>
      </div>

      <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full transition-all ${progressColor(
            progress
          )}`}
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
};

const ProductionStatus = ({ status }) => {
  return (
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
        ${badgeStyle(status)}
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
};

const SupervisorInfo = ({ supervisor }) => {
  return (
    <div className="flex min-w-0 items-center gap-2.5">
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
        {supervisor.charAt(0)}
      </div>

      <div className="min-w-0">
        <p className="truncate font-medium text-slate-800">
          {supervisor}
        </p>

        <p className="mt-0.5 text-xs text-slate-400">
          Supervisor
        </p>
      </div>
    </div>
  );
};

const ProductionOrderInfo = ({ order }) => {
  return (
    <div className="flex min-w-0 items-center gap-3">
      <div
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          bg-green-50
        "
      >
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
  );
};

const ActionButton = () => {
  return (
    <button
      type="button"
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
  );
};

const ProductionMobileCard = ({ order }) => {
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
      {/* Order Header */}

      <div className="flex min-w-0 items-start justify-between gap-3">
        <ProductionOrderInfo order={order} />

        <ActionButton />
      </div>

      {/* Order Details */}

      <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-slate-100 pt-4">
        {/* Batch */}

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Batch
          </p>

          <p className="mt-1 truncate text-sm font-medium text-slate-700">
            {order.batch}
          </p>
        </div>

        {/* Quantity */}

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Quantity
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700">
            {order.quantity} Units
          </p>
        </div>

        {/* Machine */}

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Machine
          </p>

          <p className="mt-1 truncate text-sm font-medium text-slate-700">
            {order.machine}
          </p>

          <p className="mt-0.5 text-[11px] text-slate-400">
            Production Line
          </p>
        </div>

        {/* Due Date */}

        <div className="min-w-0">
          <p className="text-xs text-slate-400">
            Due Date
          </p>

          <p className="mt-1 text-sm font-medium text-slate-700">
            {order.dueDate}
          </p>

          <p className="mt-0.5 text-[11px] text-slate-400">
            Expected Completion
          </p>
        </div>
      </div>

      {/* Progress */}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="mb-2 text-xs text-slate-400">
          Progress
        </p>

        <ProductionProgress progress={order.progress} />
      </div>

      {/* Supervisor + Status */}

      <div className="mt-4 flex min-w-0 flex-col gap-4 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <SupervisorInfo supervisor={order.supervisor} />

        <div>
          <p className="mb-1.5 text-xs text-slate-400">
            Status
          </p>

          <ProductionStatus status={order.status} />
        </div>
      </div>
    </article>
  );
};

const ProductionTable = () => {
  return (
    <div
      className="
        mx-3
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        sm:mx-4
        md:mx-6
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
          {productionOrders.map((order) => (
            <ProductionMobileCard
              key={order.id}
              order={order}
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
          max-h-[calc(100vh-300px)]
          overflow-auto
          scrollbar-none
          md:block
        "
      >
        <table className="w-full min-w-[900px] text-sm xl:min-w-[1150px]">
          {/* ================================================= */}
          {/* HEADER */}
          {/* ================================================= */}

          <thead className="sticky top-0 z-10 border-b border-slate-200 bg-slate-50">
            <tr className="text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Production Order
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Batch
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Quantity
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Progress
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Machine
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Supervisor
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Due Date
              </th>

              <th className="px-4 py-3 lg:px-5 lg:py-4">
                Status
              </th>

              <th className="px-4 py-3 text-center lg:px-5 lg:py-4">
                Action
              </th>
            </tr>
          </thead>

          {/* ================================================= */}
          {/* BODY */}
          {/* ================================================= */}

          <tbody>
            {productionOrders.map((order) => (
              <tr
                key={order.id}
                className="
                  border-b
                  border-slate-100
                  transition
                  hover:bg-slate-50
                "
              >
                {/* Production Order */}

                <td className="px-4 py-4 lg:px-5 lg:py-4">
                  <ProductionOrderInfo order={order} />
                </td>

                {/* Batch */}

                <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-700 lg:px-5">
                  {order.batch}
                </td>

                {/* Quantity */}

                <td className="whitespace-nowrap px-4 py-4 text-slate-700 lg:px-5">
                  {order.quantity} Units
                </td>

                {/* Progress */}

                <td className="px-4 py-4 lg:px-5">
                  <div className="w-32 lg:w-40">
                    <ProductionProgress
                      progress={order.progress}
                    />
                  </div>
                </td>

                {/* Machine */}

                <td className="px-4 py-4 lg:px-5">
                  <div className="min-w-0">
                    <p className="truncate font-medium text-slate-800">
                      {order.machine}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Production Line
                    </p>
                  </div>
                </td>

                {/* Supervisor */}

                <td className="px-4 py-4 lg:px-5">
                  <SupervisorInfo
                    supervisor={order.supervisor}
                  />
                </td>

                {/* Due Date */}

                <td className="px-4 py-4 lg:px-5">
                  <div className="whitespace-nowrap">
                    <p className="font-medium text-slate-700">
                      {order.dueDate}
                    </p>

                    <p className="mt-0.5 text-xs text-slate-400">
                      Expected Completion
                    </p>
                  </div>
                </td>

                {/* Status */}

                <td className="px-4 py-4 lg:px-5">
                  <ProductionStatus
                    status={order.status}
                  />
                </td>

                {/* Action */}

                <td className="px-4 py-4 lg:px-5">
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
      {/* FOOTER / PAGINATION */}
      {/* ================================================= */}

      <div
        className="
          flex
          flex-col
          gap-4
          border-t
          border-slate-200
          px-4
          py-4
          sm:px-5
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
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
            type="button"
            className="
              flex
              h-9
              items-center
              gap-1
              rounded-lg
              border
              border-slate-200
              px-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:px-3
            "
          >
            <ChevronLeft size={16} />

            <span className="hidden sm:inline">
              Previous
            </span>
          </button>

          {/* Page 1 */}

          <button
            type="button"
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
            type="button"
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
            type="button"
            className="
              hidden
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
              sm:flex
            "
          >
            3
          </button>

          {/* Page 4 */}

          <button
            type="button"
            className="
              hidden
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
              sm:flex
            "
          >
            4
          </button>

          {/* Next */}

          <button
            type="button"
            className="
              flex
              h-9
              items-center
              gap-1
              rounded-lg
              border
              border-slate-200
              px-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:px-3
            "
          >
            <span className="hidden sm:inline">
              Next
            </span>

            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductionTable;