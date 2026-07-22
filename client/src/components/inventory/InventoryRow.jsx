import { MoreVertical } from "lucide-react";
import StatusBadge from "./StatusBadge";

const InventoryRow = ({ item }) => {
  return (
    <tr className="hover:bg-slate-50 border-b transition">

      <td className="p-4">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-xl">
            {item.image}
          </div>

          <div>

            <h3 className="font-semibold text-slate-800">
              {item.name}
            </h3>

            <p className="text-xs text-slate-400">
              {item.sku}
            </p>

          </div>

        </div>

      </td>

      <td>{item.category}</td>

      <td>
        {item.stock} {item.unit}
      </td>

      <td>
        {item.reorder} {item.unit}
      </td>

      <td>
        <StatusBadge status={item.status} />
      </td>

      <td>

        <button
          className="
          w-9
          h-9
          rounded-lg
          hover:bg-slate-100
          flex
          items-center
          justify-center
          "
        >
          <MoreVertical size={18} />
        </button>

      </td>

    </tr>
  );
};

export default InventoryRow;