import { useState } from "react";

import Modal from "../../../../components/common/Modal";

import HeaderSection from "./HeaderSection";
import BasicInfoSection from "./BasicInfoSection";
import SupplierSection from "./SupplierSection";
import PurchaseItemsSection from "./PurchaseItemsSection";
import AdditionalSection from "./AdditionalSection";
import PurchaseSummary from "./PurchaseSummary";
import FormFooter from "./FormFooter";

const PurchaseModal = ({ onClose }) => {
  const [openSection, setOpenSection] = useState("basic");

  const [formData, setFormData] = useState({
    purchaseOrderNumber: "PO-0001",
    orderDate: "",
    expectedDeliveryDate: "",
    status: "Draft",

    supplier: "",
    purchaseLedger: "",
    supplierReference: "",

    paymentTerms: "",
    deliveryAddress: "",
    notes: "",
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

            {/* Supplier */}
            <SupplierSection
              open={openSection === "supplier"}
              onToggle={() => toggleSection("supplier")}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Purchase Items */}
            <PurchaseItemsSection
              open={openSection === "items"}
              onToggle={() => toggleSection("items")}
              items={items}
              setItems={setItems}
            />

            {/* Additional */}
            <AdditionalSection
              open={openSection === "additional"}
              onToggle={() => toggleSection("additional")}
              formData={formData}
              setFormData={setFormData}
            />

            {/* Summary */}
            <PurchaseSummary items={items} />

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

export default PurchaseModal;