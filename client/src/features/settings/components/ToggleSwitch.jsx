const ToggleSwitch = ({ enabled = false, onChange }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      aria-pressed={enabled}
      className={`
        relative
        inline-flex
        h-6
        w-10
        shrink-0
        items-center
        rounded-full
        transition-colors
        duration-200
        ${
          enabled
            ? "bg-green-600"
            : "bg-slate-300"
        }
      `}
    >
      <span
        className={`
          inline-block
          h-4
          w-4
          rounded-full
          bg-white
          shadow-sm
          transition-transform
          duration-200
          ${
            enabled
              ? "translate-x-5"
              : "translate-x-1"
          }
        `}
      />
    </button>
  );
};

export default ToggleSwitch;