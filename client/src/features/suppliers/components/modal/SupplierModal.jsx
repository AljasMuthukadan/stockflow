import { useState } from "react";
import Modal from "../../../../components/common/Modal";
import ModalHeader from "./ModalHeader";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";
import SupplyInfo from "./SupplyInfo";

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
    setOpenSection((prev) => (prev === section ? "" : section));
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
    <Modal>
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <ModalHeader onClose={onClose} />

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

          <BasicInfo
            formData={formData}
            handleChange={handleChange}
            openSection={openSection}
            toggleSection={toggleSection}
          />

          {/* ================================================= */}
          {/* CONTACT */}
          {/* ================================================= */}

          <ContactInfo 
          formData={formData}
          handleChange={handleChange}
          openSection={openSection}
          toggleSection={toggleSection}
          />

          {/* ================================================= */}
          {/* ADDRESS */}
          {/* ================================================= */}

          <AddressInfo
          formData={formData}
          handleChange={handleChange}
          openSection={openSection}
          toggleSection={toggleSection}
          />

          {/* ================================================= */}
          {/* SUPPLY INFORMATION */}
          {/* ================================================= */}
          <SupplyInfo
          formData={formData}
          openSection={openSection}
          supplyOptions={supplyOptions}
          toggleSection={toggleSection}
          toggleSupply={toggleSupply}
          />
          
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
    </Modal>
  );
};

export default SupplierModal;
