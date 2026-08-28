const FormFooter = ({ onClose }) => {
  return (
    <div className="flex shrink-0 items-center justify-end gap-3 border-t border-slate-200 bg-white px-4 py-3">

      <button
        type="button"
        onClick={onClose}
        className="
          rounded-lg
          border
          border-slate-200
          px-4
          py-2
          text-sm
          font-medium
          text-slate-700
          transition
          hover:bg-slate-50
        "
      >
        Cancel
      </button>

      <button
        type="submit"
        className="
          rounded-lg
          bg-emerald-600
          px-4
          py-2
          text-sm
          font-medium
          text-white
          transition
          hover:bg-emerald-700
        "
      >
        Create Production
      </button>

    </div>
  );
};

export default FormFooter;