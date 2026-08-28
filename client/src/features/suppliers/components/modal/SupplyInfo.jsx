import { ChevronDown, Package } from 'lucide-react';
const SupplyInfo = ({toggleSection, openSection, formData, toggleSupply, supplyOptions}) => {
  return (
    <section
            className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
              "
          >
            <button
              type="button"
              onClick={() => toggleSection("supply")}
              className="
                  flex
                  w-full
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-left
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
                      bg-purple-50
                    "
                >
                  <Package size={16} className="text-purple-600" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Supply Information
                  </h3>

                  <p className="text-xs text-slate-400">
                    Products and categories supplied
                  </p>
                </div>
              </div>

              <ChevronDown
                size={17}
                className={`
                    text-slate-400
                    transition-transform
                    ${openSection === "supply" ? "rotate-180" : ""}
                  `}
              />
            </button>

            {openSection === "supply" && (
              <div className="border-t border-slate-100 p-4">
                <p className="mb-3 text-xs font-medium text-slate-500">
                  Select supply categories
                </p>

                <div className="flex flex-wrap gap-2">
                  {supplyOptions.map((supply) => {
                    const selected = formData.supplies.includes(supply);

                    return (
                      <button
                        key={supply}
                        type="button"
                        onClick={() => toggleSupply(supply)}
                        className={`
                            rounded-lg
                            border
                            px-3
                            py-2
                            text-xs
                            font-medium
                            transition
                            ${
                              selected
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                            }
                          `}
                      >
                        {supply}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </section>  )
}

export default SupplyInfo