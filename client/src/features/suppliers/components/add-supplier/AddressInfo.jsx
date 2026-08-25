import Input from '../../../../components/ui/Input';
import SelectField from '../../../../components/ui/SelectField';
import { ChevronDown, MapPin } from 'lucide-react';

const AddressInfo = ({toggleSection, openSection, formData, handleChange}) => {
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
              onClick={() => toggleSection("address")}
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
                      bg-orange-50
                    "
                >
                  <MapPin size={16} className="text-orange-600" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    Address
                  </h3>

                  <p className="text-xs text-slate-400">
                    Supplier business address
                  </p>
                </div>
              </div>

              <ChevronDown
                size={17}
                className={`
                    text-slate-400
                    transition-transform
                    ${openSection === "address" ? "rotate-180" : ""}
                  `}
              />
            </button>

            {openSection === "address" && (
              <div className="border-t border-slate-100 p-4">
                <div className="space-y-4">
                  <Input
                    label="Address Line 1"
                    name="addressLine1"
                    value={formData.addressLine1}
                    onChange={handleChange}
                    placeholder="Building / Street"
                  />

                  <Input
                    label="Address Line 2"
                    name="addressLine2"
                    value={formData.addressLine2}
                    onChange={handleChange}
                    placeholder="Area / Landmark"
                  />

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <Input
                      label="City"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Kochi"
                    />

                    <SelectField
                      label="State"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                    >
                      <option value="">Select state</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                    </SelectField>

                    <Input
                      label="PIN Code"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                      placeholder="682001"
                    />
                  </div>
                </div>
              </div>
            )}
          </section>
  )
}

export default AddressInfo