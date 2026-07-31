import { MoreVertical } from "lucide-react";
import StatusBadge from "./StatusBadge";
import PaymentBadge from "./PaymentBadge";

export default function PurchaseRow({ order }) {
  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50">
      <td className="px-6 py-4 font-semibold text-emerald-600">
        {order.id}
      </td>

      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-slate-800">
            {order.supplier}
          </p>

          <p className="text-sm text-slate-500">
            {order.warehouse}
          </p>
        </div>
      </td>

      <td className="px-6 py-4">{order.date}</td>

      <td className="px-6 py-4">{order.items}</td>

      <td className="px-6 py-4 font-semibold">
        {order.amount}
      </td>

      <td className="px-6 py-4">
        <StatusBadge status={order.status} />
      </td>

      <td className="px-6 py-4">
        <PaymentBadge payment={order.payment} />
      </td>

      <td className="px-6 py-4 text-right">
        <button className="rounded-lg p-2 hover:bg-slate-100">
          <MoreVertical size={18} />
        </button>
      </td>
    </tr>
  );
}