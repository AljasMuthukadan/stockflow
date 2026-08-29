import {
  Building2,
  BookOpen,
  ChevronDown,
} from "lucide-react";

const CustomerSection = ({
  open,
  onToggle,
  formData,
  setFormData,
}) => {

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          px-5
          py-4
          text-left
          transition
          hover:bg-slate-50
        "
      >

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
            <Building2
              size={18}
              className="text-blue-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Customer & Party Details
            </h3>

            <p className="text-xs text-slate-500">
              Select customer and ledger information
            </p>
          </div>

        </div>

        <ChevronDown
          size={18}
          className={`
            text-slate-400
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Content */}
      {open && (
        <div className="border-t border-slate-100 p-5">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* Party */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Party / Customer
              </label>

              <select
                name="customer"
                value={formData.customer}
                onChange={handleChange}
                className="
                  w-full
                  rounded-lg
                  border
                  border-slate-200
                  px-3
                  py-2
                  text-sm
                  outline-none
                  focus:border-green-500
                "
              >
                <option value="">
                  Select Customer
                </option>

                <option>
                  ABC Enterprises
                </option>

                <option>
                  XYZ Industries
                </option>

                <option>
                  Tech Solutions Pvt Ltd
                </option>

              </select>
            </div>

            {/* Ledger */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Sales Ledger
              </label>

              <div className="relative">

                <BookOpen
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="ledger"
                  value={formData.ledger}
                  onChange={handleChange}
                  className="
                    w-full
                    appearance-none
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    focus:border-green-500
                  "
                >
                  <option value="">
                    Select Ledger
                  </option>

                  <option>
                    Sales Account
                  </option>

                  <option>
                    Domestic Sales
                  </option>

                  <option>
                    Export Sales
                  </option>

                </select>

              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default CustomerSection;