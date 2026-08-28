import {
  ChevronDown,
  FileText,
} from "lucide-react";


const AdditionalSection = ({
  openSection,
  toggleSection,
  formData,
  handleChange,
}) => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">

      {/* Header */}

      <button
        type="button"
        onClick={() => toggleSection("additional")}
        className="
          flex
          w-full
          items-center
          justify-between
          px-4
          py-3
          transition
          hover:bg-slate-50
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-slate-100
            "
          >
            <FileText
              size={16}
              className="text-slate-600"
            />
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold text-slate-800">
              Additional Information
            </p>

            <p className="text-xs text-slate-500">
              Add notes and production references
            </p>

          </div>

        </div>

        <ChevronDown
          size={17}
          className={`
            text-slate-400
            transition-transform
            ${openSection === "additional" ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Content */}

      {openSection === "additional" && (

        <div className="border-t border-slate-100 p-4">

          <label className="mb-1.5 block text-xs font-medium text-slate-700">
            Notes
          </label>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows={4}
            placeholder="Add production notes..."
            className="
              w-full
              resize-none
              rounded-lg
              border
              border-slate-200
              px-3
              py-2.5
              text-sm
              text-slate-700
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-emerald-500
              focus:ring-2
              focus:ring-emerald-100
            "
          />

        </div>

      )}

    </section>
  );
};

export default AdditionalSection;