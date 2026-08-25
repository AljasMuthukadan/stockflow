const BottomActions = () => {
  return (
    <div
      className="
        sticky
        bottom-3
        z-20
        mt-4
        rounded-xl
        border
        border-slate-200
        bg-white/95
        px-4
        py-3
        shadow-lg
        backdrop-blur
      "
    >
      <div className="flex items-center justify-end gap-2">

        <button
          type="button"
          className="
            rounded-lg
            border
            border-slate-300
            bg-white
            px-4
            py-2
            text-xs
            font-medium
            text-slate-700
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
            px-4
            py-2
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-green-700
          "
        >
          Save Changes
        </button>

      </div>
    </div>
  );
};

export default BottomActions;