const Modal = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-center justify-center
        bg-slate-900/45
        p-4
        backdrop-blur-[2px]
      "
    >
      <div
        className={`
          flex max-h-[92vh] w-full max-w-2xl
          flex-col overflow-hidden
          rounded-2xl border border-slate-200
          bg-white shadow-2xl
          ${className}
        `}
        {...props}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;