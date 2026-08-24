import { ChevronDown, Truck } from "lucide-react";
import SelectField from "../../../../components/ui/SelectField";
import Input from "../../../../components/ui/Input";

const SupplierSection = ({
  toggleSection,
  openSection,
  formData,
  handleChange,
}) => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">
      <button
        type="button"
        onClick={() => toggleSection("supplier")}
        className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50">
            <Truck size={16} className="text-orange-600" />
          </div>

          <div className="text-left">
            <p className="text-sm font-semibold text-slate-800">Supplier</p>

            <p className="text-xs text-slate-500">
              Supplier and supplier reference
            </p>
          </div>
        </div>

        <ChevronDown
          size={17}
          className={`text-slate-400 transition-transform ${
            openSection === "supplier" ? "rotate-180" : ""
          }`}
        />
      </button>

      {openSection === "supplier" && (
        <div className="border-t border-slate-100 p-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <SelectField
                label="Supplier"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
              >
                <option value="">Select supplier</option>

                <option value="supplier-1">ABC Suppliers</option>

                <option value="supplier-2">Global Foods</option>

                <option value="supplier-3">Prime Materials</option>
              </SelectField>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Supplier SKU
              </label>

              <Input
                name="supplierSku"
                value={formData.supplierSku}
                onChange={handleChange}
                type="text"
                placeholder="Supplier reference"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SupplierSection;
