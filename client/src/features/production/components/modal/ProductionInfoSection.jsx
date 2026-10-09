import { ChevronDown, Factory } from "lucide-react";

import Input from "../../../../components/ui/Input";
import SelectField from "../../../../components/ui/SelectField";

const ProductionInfoSection = ({
  openSection,
  toggleSection,
  formData,
  handleChange,
  inventory = [],
}) => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <button
        type="button"
        onClick={() => toggleSection("production")}
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
              bg-emerald-50
            "
          >
            <Factory
              size={16}
              className="text-emerald-600"
            />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">
              Production Information
            </p>

            <p className="text-xs text-slate-500">
              Define the product and production quantity
            </p>
          </div>
        </div>

        <ChevronDown
          size={17}
          className={`
            text-slate-400
            transition-transform
            ${openSection === "production" ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* ================================================= */}
      {/* CONTENT */}
      {/* ================================================= */}

      {openSection === "production" && (
        <div className="border-t border-slate-100 p-4">
          <div className="grid gap-4 sm:grid-cols-2">

            {/* ================================================= */}
            {/* PRODUCTION NUMBER */}
            {/* ================================================= */}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Production Number
              </label>

              <Input
                name="id"
                value={formData.id}
                onChange={handleChange}
                type="text"
                placeholder="e.g. PROD-0001"
              />
            </div>

            {/* ================================================= */}
            {/* FINISHED PRODUCT */}
            {/* ================================================= */}

            <SelectField
              label="Finished Product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              required
            >
              <option value="">
                Select finished product
              </option>

              {inventory.map((item) => {
                const itemId = item._id ?? item.id;

                return (
                  <option
                    key={itemId}
                    value={item.name}
                  >
                    {item.name}
                  </option>
                );
              })}
            </SelectField>

            {/* ================================================= */}
            {/* PRODUCTION QUANTITY */}
            {/* ================================================= */}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Production Quantity
                <span className="ml-1 text-red-500">
                  *
                </span>
              </label>

              <Input
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                type="number"
                min="1"
                placeholder="e.g. 100"
              />
            </div>

            {/* ================================================= */}
            {/* UNIT - AUTO SELECTED */}
            {/* ================================================= */}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Unit
              </label>

              <Input
                name="unit"
                value={formData.unit || ""}
                readOnly
                placeholder="Select a finished product"
              />

              {formData.product && formData.unit && (
                <p className="mt-1 text-[11px] text-slate-400">
                  Unit is automatically taken from the selected
                  finished product.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductionInfoSection;