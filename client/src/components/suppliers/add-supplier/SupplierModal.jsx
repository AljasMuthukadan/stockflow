import { useState } from "react";
import {
  X,
  Building2,
  User,
  MapPin,
  Package,
  ChevronDown,
} from "lucide-react";

const SupplierModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    companyName: "",
    alias: "",
    supplierType: "",
    category: "",
    gstin: "",
    supplierCode: "",

    contactName: "",
    phone: "",
    alternatePhone: "",
    email: "",

    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    pinCode: "",

    supplies: [],
  });

  const [openSection, setOpenSection] = useState("basic");

  const supplyOptions = [
    "Raw Materials",
    "Packaging",
    "Finished Goods",
    "Equipment",
    "Services",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev === section ? "" : section
    );
  };

  const toggleSupply = (supply) => {
    setFormData((prev) => ({
      ...prev,
      supplies: prev.supplies.includes(supply)
        ? prev.supplies.filter((item) => item !== supply)
        : [...prev.supplies, supply],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Supplier:", formData);

    // Later:
    // POST /api/suppliers

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-slate-950/40
        p-3
        backdrop-blur-[2px]
        sm:p-5
      "
    >
      {/* Modal */}

      <div
        className="
          flex
          max-h-[94vh]
          w-full
          max-w-3xl
          flex-col
          overflow-hidden
          rounded-2xl
          border
          border-slate-200
          bg-white
          shadow-2xl
        "
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div
          className="
            flex
            shrink-0
            items-center
            justify-between
            border-b
            border-slate-100
            px-4
            py-3
            sm:px-5
            sm:py-4
          "
        >
          <div className="flex items-center gap-3">

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                bg-emerald-50
              "
            >
              <Building2
                size={20}
                className="text-emerald-600"
              />
            </div>

            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Add Supplier
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                Add a new supplier to your directory.
              </p>
            </div>

          </div>

          <button
            type="button"
            onClick={onClose}
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              text-slate-400
              transition
              hover:bg-slate-100
              hover:text-slate-700
            "
          >
            <X size={18} />
          </button>

        </div>


        {/* ================================================= */}
        {/* FORM */}
        {/* ================================================= */}

        <form
          onSubmit={handleSubmit}
          className="
            min-h-0
            flex-1
            overflow-y-auto
          "
        >

          <div className="space-y-2 p-3 sm:p-4">


            {/* ================================================= */}
            {/* BASIC INFORMATION */}
            {/* ================================================= */}

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

                    <InputField
                      label="Company Name"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="ABC Foods Pvt Ltd"
                      required
                    />

                    {/* Alias */}

                    <InputField
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

                    <InputField
                      label="GSTIN"
                      name="gstin"
                      value={formData.gstin}
                      onChange={handleChange}
                      placeholder="32ABCDE1234F1Z5"
                    />

                    {/* Supplier Code */}

                    <InputField
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


            {/* ================================================= */}
            {/* CONTACT */}
            {/* ================================================= */}

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
                onClick={() => toggleSection("contact")}
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
                      bg-blue-50
                    "
                  >
                    <User
                      size={16}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-slate-800">
                      Contact Information
                    </h3>

                    <p className="text-xs text-slate-400">
                      Primary supplier contact
                    </p>
                  </div>

                </div>

                <ChevronDown
                  size={17}
                  className={`
                    text-slate-400
                    transition-transform
                    ${
                      openSection === "contact"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {openSection === "contact" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <InputField
                      label="Contact Person"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleChange}
                      placeholder="John Mathew"
                      required
                    />

                    <InputField
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                    />

                    <InputField
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="supplier@email.com"
                      type="email"
                    />

                    <InputField
                      label="Alternate Phone"
                      name="alternatePhone"
                      value={formData.alternatePhone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                    />

                  </div>

                </div>
              )}

            </section>


            {/* ================================================= */}
            {/* ADDRESS */}
            {/* ================================================= */}

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
                    <MapPin
                      size={16}
                      className="text-orange-600"
                    />
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
                    ${
                      openSection === "address"
                        ? "rotate-180"
                        : ""
                    }
                  `}
                />

              </button>


              {openSection === "address" && (
                <div className="border-t border-slate-100 p-4">

                  <div className="space-y-4">

                    <InputField
                      label="Address Line 1"
                      name="addressLine1"
                      value={formData.addressLine1}
                      onChange={handleChange}
                      placeholder="Building / Street"
                    />

                    <InputField
                      label="Address Line 2"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleChange}
                      placeholder="Area / Landmark"
                    />

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

                      <InputField
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
                        <option value="">
                          Select state
                        </option>
                        <option value="Kerala">
                          Kerala
                        </option>
                        <option value="Tamil Nadu">
                          Tamil Nadu
                        </option>
                        <option value="Karnataka">
                          Karnataka
                        </option>
                        <option value="Maharashtra">
                          Maharashtra
                        </option>
                        <option value="Delhi">
                          Delhi
                        </option>
                      </SelectField>

                      <InputField
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


            {/* ================================================= */}
            {/* SUPPLY INFORMATION */}
            {/* ================================================= */}

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
                    <Package
                      size={16}
                      className="text-purple-600"
                    />
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
                    ${
                      openSection === "supply"
                        ? "rotate-180"
                        : ""
                    }
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

                      const selected =
                        formData.supplies.includes(supply);

                      return (
                        <button
                          key={supply}
                          type="button"
                          onClick={() =>
                            toggleSupply(supply)
                          }
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

            </section>

          </div>


          {/* ================================================= */}
          {/* FOOTER */}
          {/* ================================================= */}

          <div
            className="
              flex
              shrink-0
              flex-col-reverse
              gap-2
              border-t
              border-slate-100
              bg-white
              px-4
              py-3
              sm:flex-row
              sm:items-center
              sm:justify-end
              sm:px-5
            "
          >

            <button
              type="button"
              onClick={onClose}
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                px-5
                py-2.5
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                sm:w-auto
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                w-full
                rounded-xl
                bg-emerald-600
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-emerald-700
                active:scale-[0.98]
                sm:w-auto
              "
            >
              Add Supplier
            </button>

          </div>

        </form>

      </div>
    </div>
  );
};


/* ========================================================= */
/* INPUT COMPONENT                                           */
/* ========================================================= */

const InputField = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}) => {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="
          h-10
          w-full
          rounded-lg
          border
          border-slate-200
          bg-white
          px-3
          text-sm
          text-slate-800
          outline-none
          placeholder:text-slate-400
          transition
          focus:border-emerald-500
          focus:ring-4
          focus:ring-emerald-50
        "
      />
    </div>
  );
};


/* ========================================================= */
/* SELECT COMPONENT                                          */
/* ========================================================= */

const SelectField = ({
  label,
  name,
  value,
  onChange,
  children,
  required = false,
}) => {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-slate-600">
        {label}

        {required && (
          <span className="ml-1 text-red-500">
            *
          </span>
        )}
      </label>

      <div className="relative">

        <select
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className="
            h-10
            w-full
            appearance-none
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            pr-9
            text-sm
            text-slate-700
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-50
          "
        >
          {children}
        </select>

        <ChevronDown
          size={15}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-slate-400
          "
        />

      </div>
    </div>
  );
};

export default SupplierModal;