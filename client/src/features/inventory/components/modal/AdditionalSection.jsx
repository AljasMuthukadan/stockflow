import { ChevronDown, FileText, ImagePlus } from "lucide-react";
import SelectField from "../../../../components/ui/SelectField";

const AdditionalSection = ({ toggleSection, openSection, formData, handleChange }) => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200">

              <button
                type="button"
                onClick={() => toggleSection("additional")}
                className="flex w-full items-center justify-between px-4 py-3 transition hover:bg-slate-50"
              >

                <div className="flex items-center gap-3">

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                    <FileText
                      size={16}
                      className="text-slate-600"
                    />
                  </div>

                  <div className="text-left">

                    <p className="text-sm font-semibold text-slate-800">
                      Additional Details
                    </p>

                    <p className="text-xs text-slate-500">
                      Warehouse, description and other details
                    </p>

                  </div>

                </div>

                <ChevronDown
                  size={17}
                  className={`text-slate-400 transition-transform ${
                    openSection === "additional"
                      ? "rotate-180"
                      : ""
                  }`}
                />

              </button>

              {openSection === "additional" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="space-y-4">

                    <div>

                      <SelectField
                      label="Warehouse"
                        name="warehouse"
                        value={formData.warehouse}
                        onChange={handleChange}
                        className="h-10 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      >

                        <option value="">
                          Select warehouse
                        </option>

                        <option value="main">
                          Main Warehouse
                        </option>

                        <option value="production">
                          Production Warehouse
                        </option>

                      </SelectField>

                    </div>

                    <div>

                      <label className="mb-1.5 block text-xs font-medium text-slate-700">
                        Description
                      </label>

                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Add notes or description..."
                        className="w-full resize-none rounded-lg border border-slate-300 px-3 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                      />

                    </div>

                    <button
                      type="button"
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 px-4 py-3 text-sm font-medium text-slate-600 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-600"
                    >
                      <ImagePlus size={17} />
                      Add Product Image
                    </button>

                  </div>

                </div>
              )}

            </section>
  )
}

export default AdditionalSection