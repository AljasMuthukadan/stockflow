import { Building2, X } from "lucide-react";

const ModalHeader = ({ onClose }) => {
  return (
    <div
      className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-slate-100
            px-4
            py-3
            sm:px-5
            sm:py-4
          "
    >
      <div className="flex items-center gap-3">
        <div
          className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
              "
        >
          <Building2 size={20} className="text-emerald-600" />
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-900">
            Add Supplier
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Add a new supplier to your directory.
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={onClose}
        className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
      >
        <X size={18} />
      </button>
    </div>
  );
};

export default ModalHeader;
