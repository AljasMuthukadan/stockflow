import {
  ClipboardList,
  CalendarDays,
  ChevronDown,
} from "lucide-react";

const BasicInfoSection = ({
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

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-100">
            <ClipboardList
              size={18}
              className="text-blue-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Basic Information
            </h3>

            <p className="text-xs text-slate-500">
              Enter purchase order details
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

            {/* PO Number */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Purchase Order Number
              </label>

              <input
                type="text"
                name="purchaseOrderNumber"
                value={formData.purchaseOrderNumber}
                onChange={handleChange}
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2 text-sm
                  outline-none
                  focus:border-green-500
                  focus:ring-2
                  focus:ring-green-100
                "
              />
            </div>

            {/* Status */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Status
              </label>

              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2 text-sm
                  outline-none
                  focus:border-green-500
                "
              >
                <option>Draft</option>
                <option>Pending</option>
                <option>Approved</option>
              </select>
            </div>

            {/* Order Date */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Order Date
              </label>

              <div className="relative">
                <CalendarDays
                  size={16}
                  className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <input
                  type="date"
                  name="orderDate"
                  value={formData.orderDate}
                  onChange={handleChange}
                  className="
                    w-full rounded-lg border border-slate-200
                    py-2 pl-10 pr-3 text-sm
                    outline-none
                    focus:border-green-500
                  "
                />
              </div>
            </div>

            {/* Expected Delivery */}
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Expected Delivery Date
              </label>

              <input
                type="date"
                name="expectedDeliveryDate"
                value={formData.expectedDeliveryDate}
                onChange={handleChange}
                className="
                  w-full rounded-lg border border-slate-200
                  px-3 py-2 text-sm
                  outline-none
                  focus:border-green-500
                "
              />
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default BasicInfoSection;