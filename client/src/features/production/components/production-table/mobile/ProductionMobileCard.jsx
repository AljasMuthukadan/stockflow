
import ActionButton from "../../../../../components/common/ActionButton";
import ProductionOrderInfo from "../ProductionOrderInfo";
import ProductionProgress from "../ProductionProgress";
import ProductionStatus from "../ProductionStatus";
import SupervisorInfo from "../Supervisorinfo";

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

        <ProductionProgress progress={order.progress}  />
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

export default ProductionMobileCard;