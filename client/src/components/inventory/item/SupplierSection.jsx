import { ChevronDown, Truck } from 'lucide-react';

const SupplierSection = ({toggleSection , openSection , formData , handleChange }) => {
  return (
   <section className="overflow-hidden rounded-xl border border-slate-200">

              <button
                type="button"
                onClick={() => toggleSection("supplier")}
                className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-50">
                    <Truck
                      size={16}
                      className="text-orange-600"
                    />
                  </div>

                  <div className="text-left">

                    <p className="text-sm font-semibold text-slate-800">
                      Supplier
                    </p>

                    <p className="text-xs text-slate-500">
                      Supplier and supplier reference
                    </p>

                  </div>

                </div>

                <ChevronDown
                  size={17}
                  className={`text-slate-400 transition-transform ${
                    openSection === "supplier"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {openSection === "supplier" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="grid gap-4 sm:grid-cols-2">

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Supplier
                      </label>

                      <select
                        name="supplier"
                        value={formData.supplier}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >

                        <option value="">
                          Select supplier
                        </option>

                        <option value="supplier-1">
                          ABC Suppliers
                        </option>

                        <option value="supplier-2">
                          Global Foods
                        </option>

                        <option value="supplier-3">
                          Prime Materials
                        </option>

                      </select>

                    </div>

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Supplier SKU
                      </label>

                      <input
                        name="supplierSku"
                        value={formData.supplierSku}
                        onChange={handleChange}
                        type="text"
                        placeholder="Supplier reference"
                        className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />

                    </div>

                  </div>

                </div>
              )}

            </section>
  )
}

export default SupplierSection