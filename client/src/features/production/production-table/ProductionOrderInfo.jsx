import { Factory } from "lucide-react";

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
export default ProductionOrderInfo;