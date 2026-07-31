const BottomActions = () => {
  return (
    <div
      className="
        mt-5
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-5
        py-4
        shadow-sm
      "
    >
      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

        <button
          className="
            rounded-lg
            border
            border-slate-300
            px-5
            py-2
            text-sm
            font-medium
            text-slate-700
            transition
            hover:bg-slate-100
          "
        >
          Cancel
        </button>

        <button
          className="
            rounded-lg
            bg-green-600
            px-5
            py-2
            text-sm
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