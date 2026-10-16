import ProductionProgress from "./ProductionProgress";
import ProductionStatus from "./ProductionStatus";
import SupervisorInfo from "./Supervisorinfo";
import ProductionOrderInfo from "./ProductionOrderInfo";
import ProductionTableMobile from "./mobile/ProductionTableMobile";
import ProductionTableHeader from "./ProductionTableHeader";
import ActionButton from "../../../../components/common/ActionButton";

const ProductionTable = ({ data = [] }) => {
  return (
    <div
      className="
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
      "
    >
      {/* Mobile View */}
      <div className="md:hidden">
        <ProductionTableMobile />
      </div>

      {/* Tablet + Desktop */}
      <div
        className="
          hidden
          h-[448px]
          min-h-0
          flex-col
          overflow-auto
          scrollbar-none
          md:flex
        "
      >
        <table className="w-full min-w-[900px] shrink-0 text-sm xl:min-w-[1150px]">
          <ProductionTableHeader />

          <tbody>
            {data.length > 0 ? (
              data.map((order) => (
                <tr
                  key={order._id}
                  className="
                    border-b
                    border-slate-100
                    transition-colors
                    hover:bg-slate-50
                  "
                >
                  {/* Production Order */}
                  <td className="px-4 py-4 lg:px-5">
                    <ProductionOrderInfo order={order} />
                  </td>

                  {/* Batch */}
                  <td className="whitespace-nowrap px-4 py-4 font-medium text-slate-700 lg:px-5">
                    {order.batch}
                  </td>

                  {/* Quantity */}
                  <td className="whitespace-nowrap px-4 py-4 text-slate-700 lg:px-5">
                    {order.stock}
                  </td>

                  {/* Progress */}
                  <td className="px-4 py-4 lg:px-5">
                    <div className="w-32 lg:w-40">
                      <ProductionProgress
                        progress={order?.progress? order.progress : 0}
                      />
                    </div>
                  </td>

                  {/* Machine */}
                  <td className="px-4 py-4 lg:px-5">
                    <div className="min-w-0">
                      <p className="truncate font-medium text-slate-800">
                        {order?.machine || "None"}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Production Line
                      </p>
                    </div>
                  </td>

                  {/* Supervisor */}
                  <td className="px-4 py-4 lg:px-5">
                    <SupervisorInfo
                      supervisor={order?.supervisor || "Not assigned"}
                    />
                  </td>

                  {/* Due Date */}
                  <td className="px-4 py-4 lg:px-5">
                    <div className="whitespace-nowrap">
                      <p className="font-medium text-slate-700">
                        {order?.dueDate || ""}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-400">
                        Expected Completion
                      </p>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4 lg:px-5">
                    <ProductionStatus status={order?.status} />
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-4 lg:px-5">
                    <div className="flex justify-center">
                      <ActionButton />
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={9}
                  className="h-48 text-center text-sm text-slate-500"
                >
                  No production orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductionTable;