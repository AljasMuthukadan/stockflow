import {
  Truck,
  BookOpen,
  FileText,
  ChevronDown,
} from "lucide-react";

const SupplierSection = ({
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
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* Header */}
      <button
        type="button"
        onClick={onToggle}
        className="
          flex w-full items-center justify-between
          px-5 py-4
          text-left
          transition
          hover:bg-slate-50
        "
      >
        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">
            <Truck
              size={18}
              className="text-purple-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Supplier Information
            </h3>

            <p className="text-xs text-slate-500">
              Select supplier and purchase ledger
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

            {/* Supplier */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Supplier
              </label>

              <select
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2 text-sm
                  outline-none
                  focus:border-green-500
                "
              >
                <option value="">
                  Select Supplier
                </option>

                <option>ABC Raw Materials</option>
                <option>Kerala Polymers</option>
                <option>India Industrial Supplies</option>
              </select>
            </div>

            {/* Purchase Ledger */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Purchase Ledger
              </label>

              <div className="relative">

                <BookOpen
                  size={16}
                  className="
                    pointer-events-none
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="purchaseLedger"
                  value={formData.purchaseLedger}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg border border-slate-200
                    py-2 pl-10 pr-3 text-sm
                    outline-none
                    focus:border-green-500
                  "
                >
                  <option value="">
                    Select Ledger
                  </option>

                  <option>Purchase Account</option>
                  <option>Raw Material Purchase</option>
                  <option>Consumables Purchase</option>
                </select>

              </div>
            </div>

            {/* Supplier Reference */}
            <div className="md:col-span-2">

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Supplier Reference Number
              </label>

              <div className="relative">

                <FileText
                  size={16}
                  className="
                    pointer-events-none
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="text"
                  name="supplierReference"
                  value={formData.supplierReference}
                  onChange={handleChange}
                  placeholder="Enter supplier quotation or reference number"
                  className="
                    w-full rounded-lg border border-slate-200
                    py-2 pl-10 pr-3 text-sm
                    outline-none
                    focus:border-green-500
                  "
                />

              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default SupplierSection;