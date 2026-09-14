import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { useState } from "react";

const ActionButton = ({ item, onEdit, onDelete }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Action button */}
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
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <MoreVertical size={18} />
      </button>

      {/* Action menu */}
      {isOpen && (
        <div
          className="
            absolute
            right-0
            top-10
            z-50
            w-36
            rounded-xl
            border
            border-slate-200
            bg-white
            p-1
            shadow-lg
          "
        >
          <button
            type="button"
            onClick={() => {
              onEdit(item);
              setIsOpen(false);
            }}
            className="
              flex
              w-full
              items-center
              gap-2
              rounded-lg
              px-3
              py-2
              text-sm
              text-slate-700
              transition
              hover:bg-slate-100
            "
          >
            <Pencil size={15} />
            Edit
          </button>

          <button
            type="button"
            onClick={() => {
              onDelete?.(item);
              setIsOpen(false);
            }}
            className="
              flex
              w-full
              items-center
              gap-2
              rounded-lg
              px-3
              py-2
              text-sm
              text-red-600
              transition
              hover:bg-red-50
            "
          >
            <Trash2 size={15} />
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default ActionButton;