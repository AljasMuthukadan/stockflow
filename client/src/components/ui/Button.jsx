
const variants = {
  primary:
    "bg-emerald-600 text-white hover:bg-emerald-700",

  secondary:
    "border border-slate-200 bg-white text-slate-700 hover:bg-slate-50",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  ghost:
    "text-slate-600 hover:bg-slate-100",

  outline:
    "border border-slate-200 bg-transparent text-slate-700 hover:bg-slate-50",
};

const sizes = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-5 text-sm",
};


const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`
        inline-flex
        shrink-0
        items-center
        justify-center
        gap-1.5
        rounded-lg
        font-semibold
        shadow-sm
        transition
        active:scale-95
        ${variants[variant]}
        ${sizes[size]}

        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;