import { ChevronDown, Package } from "lucide-react";

const BasicInfoSection = ({ openSection, toggleSection, formData, handleChange }) => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">

              <button
                type="button"
                onClick={() => toggleSection("basic")}
                className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50">
                    <Package
                      size={16}
                      className="text-blue-600"
                    />
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
                    openSection === "basic"
                      ? "rotate-180"
                      : ""
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
                        <span className="ml-1 text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        name="itemName"
                        value={formData.itemName}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g. Raw Sugar"
                        className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />

                    </div>

                    {/* SKU */}

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        SKU
                        <span className="ml-1 text-red-500">
                          *
                        </span>
                      </label>

                      <input
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        type="text"
                        placeholder="e.g. RM-SUG-001"
                        className="h-10 w-full rounded-lg border border-slate-300 px-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />

                    </div>

                    {/* Item Type */}

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Item Type
                      </label>

                      <select
                        name="itemType"
                        value={formData.itemType}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >

                        <option value="">
                          Select type
                        </option>

                        <option value="raw-material">
                          Raw Material
                        </option>

                        <option value="finished-good">
                          Finished Good
                        </option>

                        <option value="packaging">
                          Packaging Material
                        </option>

                      </select>

                    </div>

                    {/* Category */}

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Category
                      </label>

                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >

                        <option value="">
                          Select category
                        </option>

                        <option value="food">
                          Food & Beverage
                        </option>

                        <option value="raw-material">
                          Raw Materials
                        </option>

                        <option value="packaging">
                          Packaging
                        </option>

                        <option value="other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>

                </div>
              )}

            </section>
  )
}

export default BasicInfoSection