import Input from "../../../../components/ui/Input";
import { ChevronDown, User } from "lucide-react";

const ContactInfo = ({
  toggleSection,
  formData,
  handleChange,
  openSection,
}) => {
  return (
    <div
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
            <User size={16} className="text-blue-600" />
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-800">
              Contact Information
            </h3>

            <p className="text-xs text-slate-400">Primary supplier contact</p>
          </div>
        </div>

        <ChevronDown
          size={17}
          className={`
                    text-slate-400
                    transition-transform
                    ${openSection === "contact" ? "rotate-180" : ""}
                  `}
        />
      </button>

      {openSection === "contact" && (
        <div className="border-t border-slate-100 p-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Contact Person"
              name="contactName"
              value={formData.contactName}
              onChange={handleChange}
              placeholder="John Mathew"
              required
            />

            <Input
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              required
            />

            <Input
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="supplier@email.com"
              type="email"
            />

            <Input
              label="Alternate Phone"
              name="alternatePhone"
              value={formData.alternatePhone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
