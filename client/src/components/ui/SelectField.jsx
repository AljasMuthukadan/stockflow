import { ChevronDown } from "lucide-react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  children,
  required = false,
}) => {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <div className="relative">

        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="
            h-10
            w-full
            appearance-none
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            pr-9
            text-sm
            text-slate-700
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-50
          "
        >
          {children}
        </select>

        <ChevronDown
          size={15}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

      </div>
    </div>
  );
};

export default SelectField