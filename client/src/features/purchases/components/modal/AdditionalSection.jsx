import {
  FileText,
  ChevronDown,
} from "lucide-react";

const AdditionalSection = ({
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

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
            <FileText
              size={18}
              className="text-slate-600"
            />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Additional Information
            </h3>

            <p className="text-xs text-slate-500">
              Payment, delivery and notes
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

      {open && (
        <div className="border-t border-slate-100 p-5">

          <div className="space-y-4">

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Payment Terms
              </label>

              <input
                type="text"
                name="paymentTerms"
                value={formData.paymentTerms}
                onChange={handleChange}
                placeholder="Example: Net 30 Days"
                className="
                  w-full rounded-lg
                  border border-slate-200
                  px-3 py-2 text-sm
                  outline-none
                  focus:border-green-500
                "
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Delivery Address
              </label>

              <textarea
                rows={3}
                name="deliveryAddress"
                value={formData.deliveryAddress}
                onChange={handleChange}
                placeholder="Enter delivery address"
                className="
                  w-full resize-none
                  rounded-lg border border-slate-200
                  px-3 py-2 text-sm
                  outline-none
                  focus:border-green-500
                "
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Notes
              </label>

              <textarea
                rows={3}
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                placeholder="Add additional notes"
                className="
                  w-full resize-none
                  rounded-lg border border-slate-200
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

export default AdditionalSection;