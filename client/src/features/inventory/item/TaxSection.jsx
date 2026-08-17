import { ChevronDown, IndianRupee } from "lucide-react";

const TaxSection = ({ formData, handleChange, toggleSection, openSection , setFormData }) => {
  return (
   <section className="overflow-hidden rounded-xl border border-slate-200">

              <button
                type="button"
                onClick={() => toggleSection("pricing")}
                className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50">
                    <IndianRupee
                      size={16}
                      className="text-emerald-600"
                    />
                  </div>

                  <div className="text-left">

                    <p className="text-sm font-semibold text-slate-800">
                      Pricing & Tax
                    </p>

                    <p className="text-xs text-slate-500">
                      Purchase price, selling price and GST
                    </p>

                  </div>

                </div>

                <ChevronDown
                  size={17}
                  className={`text-slate-400 transition-transform ${
                    openSection === "pricing"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {openSection === "pricing" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="grid gap-4 sm:grid-cols-3">

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Purchase Price
                      </label>

                      <div className="relative">

                        <IndianRupee
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          name="purchasePrice"
                          value={formData.purchasePrice}
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="0.00"
                          className="h-10 w-full rounded-lg border border-slate-300 pl-8 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />

                      </div>

                    </div>

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Selling Price
                      </label>

                      <div className="relative">

                        <IndianRupee
                          size={14}
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          name="sellingPrice"
                          value={formData.sellingPrice}
                          onChange={handleChange}
                          type="number"
                          min="0"
                          placeholder="0.00"
                          className="h-10 w-full rounded-lg border border-slate-300 pl-8 pr-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                        />

                      </div>

                    </div>

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Tax Rate
                      </label>

                      <select
                        name="taxRate"
                        value={formData.taxRate}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >

                        <option value="0">
                          0%
                        </option>

                        <option value="5">
                          5%
                        </option>

                        <option value="12">
                          12%
                        </option>

                        <option value="18">
                          18%
                        </option>

                        <option value="28">
                          28%
                        </option>

                      </select>

                    </div>

                  </div>

                  <label className="mt-4 flex items-center gap-2 text-sm text-slate-600">

                    <input
                      type="checkbox"
                      checked={formData.taxable === "yes"}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          taxable: e.target.checked
                            ? "yes"
                            : "no",
                        }))
                      }
                      className="h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                    />

                    Taxable item

                  </label>

                </div>
              )}

            </section>
  )
}

export default TaxSection