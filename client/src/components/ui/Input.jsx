const Input = ({
  className = "",
  ...props
}) => {
  return (
    <input
      className={`
        h-10
        w-full
        rounded-lg
        border
        border-slate-200
        bg-white
        px-3
        text-sm
        text-slate-700
        outline-none
        transition

        placeholder:text-slate-400

        focus:border-emerald-500
        focus:ring-2
        focus:ring-emerald-500/20

        disabled:cursor-not-allowed
        disabled:bg-slate-100
        disabled:text-slate-400

        ${className}
      `}
      {...props}
    />
  );
};

export default Input;

