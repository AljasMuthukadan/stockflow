const ToggleSwitch = ({ enabled = false, onChange }) => {
  return (
    <button
      type="button"
      onClick={onChange}
      className={`
        relative
        inline-flex
        h-7
        w-12
        items-center
        rounded-full
        transition-all
        duration-300
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
          h-5
          w-5
          transform
          rounded-full
          bg-white
          shadow-md
          transition-all
          duration-300
          ${
            enabled
              ? "translate-x-6"
              : "translate-x-1"
          }
        `}
      />
    </button>
  );
};

export default ToggleSwitch;