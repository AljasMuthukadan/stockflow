import { useState } from "react";

import Modal from "../../../../components/common/Modal";

import HeaderSection from "./HeaderSection";
import BasicInfoSection from "./BasicInfoSection";
import SupplierSection from "./SupplierSection";
import PurchaseItemsSection from "./PurchaseItemsSection";
import AdditionalSection from "./AdditionalSection";
import PurchaseSummary from "./PurchaseSummary";
import FormFooter from "./FormFooter";

const initialFormData = {
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
};

const PurchaseModal = ({ onClose, setPo }) => {
  const [openSection, setOpenSection] = useState("basic");
  const [formData, setFormData] = useState(initialFormData);
  const [items, setItems] = useState([]);

  // Expand or collapse a section
  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  // Handle changes from form inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate and submit the purchase order
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.supplier) {
      alert("Please select a supplier.");
      setOpenSection("supplier");
      return;
    }

    if (items.length === 0) {
      alert("Please add at least one purchase item.");
      setOpenSection("items");
      return;
    }

    const purchaseOrder = {
      ...formData,
      items,
    };

    console.log("Purchase Order:", purchaseOrder);
    setPo((prev) => [...prev, formData]); // Update the purchase orders state in the parent component
    // TODO: Send purchaseOrder to your backend API.


    // Call onClose only after a successful save.
    onClose();
  };

  return (
    <Modal>
      <div className="flex max-h-[90vh] w-full flex-col overflow-hidden">
        {/* Header */}
        <HeaderSection onClose={onClose} />

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex min-h-0 flex-1 flex-col overflow-hidden"
        >
          {/* Scrollable Content */}
          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
            <div className="space-y-4">
              {/* Basic Information */}
              <BasicInfoSection
                open={openSection === "basic"}
                onToggle={() => toggleSection("basic")}
                formData={formData}
                handleChange={handleChange}
              />

              {/* Supplier */}
              <SupplierSection
                open={openSection === "supplier"}
                onToggle={() => toggleSection("supplier")}
                formData={formData}
                handleChange={handleChange}
              />

              {/* Purchase Items */}
              <PurchaseItemsSection
                open={openSection === "items"}
                onToggle={() => toggleSection("items")}
                items={items}
                setItems={setItems}
                handleChange={handleChange}
              />

              {/* Additional Information */}
              <AdditionalSection
                open={openSection === "additional"}
                onToggle={() => toggleSection("additional")}
                formData={formData}
                handleChange={handleChange}
              />

              {/* Purchase Summary */}
              <PurchaseSummary 
              items={items}
              formData={formData}

              />
            </div>
          </div>

          {/* Footer */}
          <FormFooter onClose={onClose} />
        </form>
      </div>
    </Modal>
  );
};

export default PurchaseModal;
