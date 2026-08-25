
import Input from '../../../../components/ui/Input';
import { Building2, ChevronDown } from 'lucide-react';
import SelectField from '../../../../components/ui/SelectField';

const BasicInfo = ({toggleSection, handleChange, formData , openSection}) => {
  return (
    <section
              className="
                overflow-hidden
                rounded-xl
                border
                border-slate-200
                bg-white
              "
            >

              <button
                type="button"
                onClick={() => toggleSection("basic")}
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
                      bg-emerald-50
                    "
                  >
                    <Building2
                      size={16}
                      className="text-emerald-600"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      Basic Information
                    </h3>

                    <p className="text-xs text-slate-400">
                      Company and supplier details
                    </p>
                  </div>

                </div>

                <ChevronDown
                  size={17}
                  className={`
                    text-slate-400
                    transition-transform
                    ${
                      openSection === "basic"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {openSection === "basic" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    {/* Company Name */}

                    <Input
                      label="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="ABC Foods Pvt Ltd"
                      required
                    />

                    {/* Alias */}

                    <Input
                      label="Alias / Short Name"
                      name="alias"
                      value={formData.alias}
                      onChange={handleChange}
                      placeholder="ABC Foods"
                    />

                    {/* Supplier Type */}

                    <SelectField
                      label="Supplier Type"
                      name="supplierType"
                      value={formData.supplierType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select supplier type
                      </option>
                      <option value="Sundry Creditor">
                        Sundry Creditor
                      </option>
                      <option value="Sundry Debtor">
                        Sundry Debtor
                      </option>
                    </SelectField>

                    {/* Category */}

                    <SelectField
                      label="Category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    >
                      <option value="">
                        Select category
                      </option>
                      <option value="Raw Materials">
                        Raw Materials
                      </option>
                      <option value="Packaging">
                        Packaging
                      </option>
                      <option value="Finished Goods">
                        Finished Goods
                      </option>
                      <option value="Equipment">
                        Equipment
                      </option>
                      <option value="Services">
                        Services
                      </option>
                    </SelectField>

                    {/* GSTIN */}

                    <Input
                      label="GSTIN"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleChange}
                      placeholder="32ABCDE1234F1Z5"
                    />

                    {/* Supplier Code */}

                    <Input
                      label="Supplier Code"
                      name="supplierCode"
                      value={formData.supplierCode}
                      onChange={handleChange}
                      placeholder="SUP-1001"
                    />

                  </div>

                </div>
              )}

            </section>
  )
}

export default BasicInfo