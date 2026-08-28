import {
  CalendarDays,
  ChevronDown,
} from "lucide-react";

import Input from "../../../../components/ui/Input";
import SelectField from "../../../../components/ui/SelectField";

const ScheduleSection = ({
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
        onClick={() => toggleSection("schedule")}
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
              bg-orange-50
            "
          >
            <CalendarDays
              size={16}
              className="text-orange-600"
            />
          </div>

          <div className="text-left">

            <p className="text-sm font-semibold text-slate-800">
              Schedule & Warehouse
            </p>

            <p className="text-xs text-slate-500">
              Set production dates and storage location
            </p>

          </div>

        </div>

        <ChevronDown
          size={17}
          className={`
            text-slate-400
            transition-transform
            ${openSection === "schedule" ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Content */}

      {openSection === "schedule" && (

        <div className="border-t border-slate-100 p-4">

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Warehouse */}

            <SelectField
              label="Production Warehouse"
              name="warehouse"
              value={formData.warehouse}
              onChange={handleChange}
              required
            >

              <option value="">
                Select warehouse
              </option>

              <option value="main-warehouse">
                Main Warehouse
              </option>

              <option value="warehouse-b">
                Warehouse B
              </option>

            </SelectField>

            {/* Production Date */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Production Date
                <span className="ml-1 text-red-500">*</span>
              </label>

              <Input
                name="productionDate"
                value={formData.productionDate}
                onChange={handleChange}
                type="date"
              />

            </div>

            {/* Expected Completion */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Expected Completion
              </label>

              <Input
                name="expectedDate"
                value={formData.expectedDate}
                onChange={handleChange}
                type="date"
              />

            </div>

            {/* Batch */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Batch Number
              </label>

              <Input
                name="batchNumber"
                value={formData.batchNumber}
                onChange={handleChange}
                type="text"
                placeholder="e.g. BATCH-2026-001"
              />

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default ScheduleSection;