import { useState } from "react";

import Modal from "../../../../components/common/Modal";
import ModalHeader from "./ModalHeader";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";
import ProfileImage from "./ProfileImage";

const initialFormData = {
  company: "",
  alias: "",
  partyType: "",
  category: "",
  gstin: "",

  image: null,

  contactName: "",
  phone: "",
  designation: "",
  email: "",

  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pinCode: "",
};

const LedgerModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [openSection, setOpenSection] = useState("basic");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));
  };

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newLedger = {
      id: crypto.randomUUID(),

      company: formData.company || "Unnamed Company",
      alias: formData.alias || "",
      partyType: formData.partyType || "Other",
      category: formData.category || "",
      gstin: formData.gstin || "",

      image: formData.image,

      contactInfo: {
        personName: formData.contactName || "",
        phoneNo: formData.phone || "",
        designation: formData.designation || "",
        email: formData.email || "",
      },

      address: {
        line1: formData.addressLine1 || "",
        line2: formData.addressLine2 || "",
        city: formData.city || "",
        state: formData.state || "",
        postalCode: formData.pinCode || "",
        country: "India",
      },

      avatar: formData.company
        ? formData.company
            .split(" ")
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "NA",

      avatarColor: "bg-emerald-500",

      orders: 0,
      outstanding: 0,
      outstandingType: "Settled",
    };

    console.log("New Ledger:", newLedger);

    onSubmit(newLedger);

    setFormData(initialFormData);
    setOpenSection("basic");
    onClose();
  };

  return (
    <Modal>
      <ModalHeader onClose={onClose} />

      <form
        onSubmit={handleSubmit}
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-2 p-3 sm:p-4">
            <BasicInfo
              formData={formData}
              handleChange={handleChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />

            <ContactInfo
              formData={formData}
              handleChange={handleChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />

            <AddressInfo
              formData={formData}
              handleChange={handleChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />

            <ProfileImage
              formData={formData}
              handleImageChange={handleImageChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />
          </div>
        </div>

        <div
          className="
            flex shrink-0 flex-col-reverse gap-2 border-t
            border-slate-100 bg-white px-4 py-3
            sm:flex-row sm:items-center sm:justify-end sm:px-5
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              w-full rounded-xl border border-slate-200
              px-5 py-2.5 text-sm font-medium text-slate-600
              transition hover:bg-slate-50 sm:w-auto
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              w-full rounded-xl bg-emerald-600 px-5 py-2.5
              text-sm font-semibold text-white shadow-sm
              transition hover:bg-emerald-700
              active:scale-[0.98] sm:w-auto
            "
          >
            Add Ledger
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LedgerModal;