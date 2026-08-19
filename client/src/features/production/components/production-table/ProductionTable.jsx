import { productionOrders } from "./data";
import ProductionProgress from "./ProductionProgress";
import ProductionStatus from "./ProductionStatus";
import SupervisorInfo from "./Supervisorinfo";
import ProductionOrderInfo from "./ProductionOrderInfo";
import ProductionTableMobile from "./mobile/ProductionTableMobile";
import ProductionTableHeader from "./ProductionTableHeader";
import Pagination from "../../../../components/common/Pagination";
import ActionButton from "../../../../components/common/ActionButton";

const ProductionTable = () => {
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
      {/* ================================================= */}
      {/* MOBILE VIEW */}
      {/* ================================================= */}

      <ProductionTableMobile />

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

          <ProductionTableHeader />

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
                    <ProductionProgress progress={order.progress} />
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
                  <SupervisorInfo supervisor={order.supervisor} />
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
                  <ProductionStatus status={order.status} />
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

      <Pagination />
    </div>
  );
};

export default ProductionTable;
