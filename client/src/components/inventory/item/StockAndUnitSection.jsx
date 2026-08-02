import { Boxes, ChevronDown } from 'lucide-react';

const StockAndUnitSection = ({ openSection, toggleSection, formData, handleChange }) => {
  return (
   <section className="overflow-hidden rounded-xl border border-slate-200">

              <button
                type="button"
                onClick={() => toggleSection("stock")}
                className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50">
                    <Boxes
                      size={16}
                      className="text-purple-600"
                    />
                  </div>

                  <div className="text-left">

                    <p className="text-sm font-semibold text-slate-800">
                      Stock & Unit
                    </p>

                    <p className="text-xs text-slate-500">
                      Quantity, measurement and stock control
                    </p>

                  </div>

                </div>

                <ChevronDown
                  size={17}
                  className={`text-slate-400 transition-transform ${
                    openSection === "stock"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {openSection === "stock" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="grid gap-4 sm:grid-cols-3">

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Opening Stock
                      </label>

                      <input
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        type="number"
                        min="0"
                        placeholder="0"
                        className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />

                    </div>

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Unit
                      </label>

                      <select
                        name="unit"
                        value={formData.unit}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >

                        <option value="">
                          Select unit
                        </option>

                        <option value="kg">
                          Kg
                        </option>

                        <option value="g">
                          Gram
                        </option>

                        <option value="l">
                          Liter
                        </option>

                        <option value="ml">
                          ML
                        </option>

                        <option value="pcs">
                          Pieces
                        </option>

                      </select>

                    </div>

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Reorder Level
                      </label>

                      <input
                        name="reorderLevel"
                        value={formData.reorderLevel}
                        onChange={handleChange}
                        type="number"
                        min="0"
                        placeholder="0"
                        className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />

                    </div>

                  </div>

                </div>
              )}

            </section>
  )
}

export default StockAndUnitSection