import { MoreVertical } from "lucide-react";

const ActionButton = () => {
  return (
    <button
      type="button"
      className="
        flex
        h-9
        w-9
        shrink-0
        items-center
        justify-center
        rounded-lg
        text-slate-500
        transition
        hover:bg-slate-100
        hover:text-slate-800
      "
    >
      <MoreVertical size={18} />
    </button>
  );
};

export default ActionButton;