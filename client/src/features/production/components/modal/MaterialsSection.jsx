import {
  ChevronDown,
  Boxes,
} from "lucide-react";

import SelectField from "../../../../components/ui/SelectField";

const MaterialsSection = ({
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
        onClick={() => toggleSection("materials")}
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
              bg-blue-50
            "
          >
            <Boxes
              size={16}
              className="text-blue-600"
            />
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold text-slate-800">
              Materials & BOM
            </p>

            <p className="text-xs text-slate-500">
              Select the bill of materials for production
            </p>

          </div>

        </div>

        <ChevronDown
          size={17}
          className={`
            text-slate-400
            transition-transform
            ${openSection === "materials" ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Content */}

      {openSection === "materials" && (

        <div className="border-t border-slate-100 p-4">

          <div className="space-y-4">

            <SelectField
              label="Bill of Materials"
              name="bom"
              value={formData.bom}
              onChange={handleChange}
              required
            >

              <option value="">
                Select BOM
              </option>

              <option value="ice-cream-standard">
                Ice Cream - Standard Recipe
              </option>

              <option value="milk-shake-standard">
                Milk Shake - Standard Recipe
              </option>

              <option value="chocolate-bar-standard">
                Chocolate Bar - Standard Recipe
              </option>

            </SelectField>

            {/* Future BOM preview */}

            <div className="rounded-lg border border-slate-200 bg-slate-50 p-3">

              <p className="text-xs font-semibold text-slate-700">
                Material requirements
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Materials required for this production will be
                calculated automatically from the selected BOM.
              </p>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default MaterialsSection;