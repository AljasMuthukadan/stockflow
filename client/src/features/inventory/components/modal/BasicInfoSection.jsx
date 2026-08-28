import { ChevronDown, Package } from "lucide-react";
import Input from "../../../../components/ui/Input";
import SelectField from "../../../../components/ui/SelectField";

const BasicInfoSection = ({
  openSection,
  toggleSection,
  formData,
  handleChange,
}) => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">
      <button
        type="button"
        onClick={() => toggleSection("basic")}
        className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
            <Package size={16} className="text-blue-600" />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">
              Basic Information
            </p>

            <p className="text-xs text-slate-500">
              Product identification and classification
            </p>
          </div>
        </div>

        <ChevronDown
          size={17}
          className={`text-slate-400 transition-transform ${
            openSection === "basic" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openSection === "basic" && (
        <div className="border-t border-slate-100 p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Item Name */}

            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Item Name
                <span className="ml-1 text-red-500">*</span>
              </label>

              <Input
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                type="text"
                placeholder="e.g. Raw Sugar"
              />
            </div>

            {/* SKU */}

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                SKU
                <span className="ml-1 text-red-500">*</span>
              </label>

              <Input
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                type="text"
                placeholder="e.g. RM-SUG-001"
                
              />
            </div>

            {/* Item Type */}

            <SelectField
              label="Supplier Type"
              name="supplierType"
              value={formData.supplierType}
              onChange={handleChange}
              required
            >
              <option value="">Select type</option>

              <option value="raw-material">Raw Material</option>

              <option value="finished-good">Finished Good</option>

              <option value="packaging">Packaging Material</option>
            </SelectField>

            {/* Category */}

            <SelectField
              label="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>

              <option value="food">Food & Beverage</option>

              <option value="raw-material">Raw Materials</option>

              <option value="packaging">Packaging</option>

              <option value="other">Other</option>
            </SelectField>
          </div>
        </div>
      )}
    </section>
  );
};

export default BasicInfoSection;
