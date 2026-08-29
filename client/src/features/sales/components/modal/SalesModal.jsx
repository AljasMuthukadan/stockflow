import { useState } from "react";

import Modal from "../../../../components/common/Modal";

import HeaderSection from "./HeaderSection";
import BasicInfoSection from "./BasicInfoSection";
import CustomerSection from "./CustomerSection";
import ItemsSection from "./ItemsSection";
import AdditionalSection from "./AdditionalSection";
import OrderSummary from "./OrderSummary";
import FormFooter from "./FormFooter";

const SalesModal = ({ onClose }) => {
  const [openSection, setOpenSection] = useState("basic");

  const [formData, setFormData] = useState({
    orderNumber: "SO-0001",
    orderDate: "",
    deliveryDate: "",
    status: "Draft",

    customer: "",
    ledger: "",

    notes: "",
    paymentTerms: "",
    shippingAddress: "",
  });

  const [items, setItems] = useState([]);

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev === section ? null : section
    );
  };

  return (
    <Modal>
      <div className="flex max-h-[90vh] w-full flex-col">

        {/* Header */}
        <HeaderSection onClose={onClose} />

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          <div className="space-y-4">

            {/* Basic Information */}
            <BasicInfoSection
              open={openSection === "basic"}
              onToggle={() => toggleSection("basic")}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Customer / Party */}
            <CustomerSection
              open={openSection === "customer"}
              onToggle={() => toggleSection("customer")}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Items */}
            <ItemsSection
              open={openSection === "items"}
              onToggle={() => toggleSection("items")}
              items={items}
              setItems={setItems}
            />

            {/* Additional Information */}
            <AdditionalSection
              open={openSection === "additional"}
              onToggle={() => toggleSection("additional")}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Order Summary */}
            <OrderSummary items={items} />

          </div>

        </div>

        {/* Footer */}
        <FormFooter
          onClose={onClose}
        />

      </div>
    </Modal>
  );
};

export default SalesModal;