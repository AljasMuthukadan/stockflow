import { MoreVertical } from "lucide-react";

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
export default ActionButton;