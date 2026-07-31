import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";

const styles = {
  "In Stock": {
    icon: CheckCircle2,
    bg: "bg-green-100",
    text: "text-green-700",
  },

  "Low Stock": {
    icon: AlertTriangle,
    bg: "bg-orange-100",
    text: "text-orange-700",
  },

  Critical: {
    icon: XCircle,
    bg: "bg-red-100",
    text: "text-red-700",
  },
};

const StatusBadge = ({ status }) => {
  const item = styles[status];

  const Icon = item.icon;

  return (
    <span
      className={`
      inline-flex
      items-center
      gap-1.5
      px-3
      py-1
      rounded-full
      text-xs
      font-semibold
      ${item.bg}
      ${item.text}
      `}
    >
      <Icon size={13} />
      {status}
    </span>
  );
};

export default StatusBadge;