const FormFooter = ({ onClose }) => {
  return (
    <div className="flex items-center justify-end gap-3 border-t border-slate-200 bg-white px-6 py-4">

      <button
        type="button"
        onClick={onClose}
        className="
          rounded-lg
          border border-slate-300
          px-4 py-2
          text-sm font-medium text-slate-700
          transition
          hover:bg-slate-50
        "
      >
        Cancel
      </button>

      <button
        type="button"
        className="
          rounded-lg
          bg-green-600
          px-5 py-2
          text-sm font-medium text-white
          transition
          hover:bg-green-700
        "
      >
        Create Purchase Order
      </button>

    </div>
  );
};

export default FormFooter;