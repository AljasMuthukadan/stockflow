import {
  ChevronDown,
  Factory,
} from "lucide-react";

import Input from "../../../../components/ui/Input";
import SelectField from "../../../../components/ui/SelectField";

const ProductionInfoSection = ({
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

      {/* Content */}

      {openSection === "production" && (

        <div className="border-t border-slate-100 p-4">

          <div className="grid gap-4 sm:grid-cols-2">

            {/* Production Number */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Production Number
              </label>

              <Input
                name="productionNumber"
                value={formData.productionNumber}
                onChange={handleChange}
                type="text"
                placeholder="e.g. PROD-0001"
              />

            </div>

            {/* Finished Product */}

            <SelectField
              label="Finished Product"
              name="finishedProduct"
              value={formData.finishedProduct}
              onChange={handleChange}
              required
            >

              <option value="">
                Select product
              </option>

              <option value="ice-cream">
                Ice Cream
              </option>

              <option value="milk-shake">
                Milk Shake
              </option>

              <option value="chocolate-bar">
                Chocolate Bar
              </option>

              <option value="vanilla-cone">
                Vanilla Cone
              </option>

            </SelectField>

            {/* Quantity */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Production Quantity
                <span className="ml-1 text-red-500">*</span>
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

            {/* Unit */}

            <SelectField
              label="Unit"
              name="unit"
              value={formData.unit}
              onChange={handleChange}
              required
            >

              <option value="">
                Select unit
              </option>

              <option value="pcs">
                Pieces
              </option>

              <option value="kg">
                Kilogram
              </option>

              <option value="litre">
                Litre
              </option>

              <option value="box">
                Box
              </option>

            </SelectField>

          </div>

        </div>

      )}

    </section>
  );
};

export default ProductionInfoSection;