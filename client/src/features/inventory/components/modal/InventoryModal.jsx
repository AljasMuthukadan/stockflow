import { useState } from "react";

import FormFooter from "./FormFooter";
import SupplierSection from "./SupplierSection";
import AdditionalSection from "./AdditionalSection";
import TaxSection from "./TaxSection";
import StockAndUnitSection from "./StockAndUnitSection";
import BasicInfoSection from "./BasicInfoSection";
import HeaderSection from "./FormHeader";

import Modal from "../../../../components/common/Modal";

export default function InventoryModal({
  onClose,
  onAddItem,
}) {
  const [openSection, setOpenSection] = useState("basic");

  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    itemType: "",
    category: "",
    quantity: "",
    unit: "",
    reorderLevel: "",
    purchasePrice: "",
    sellingPrice: "",
    taxable: true,
    taxRate: 18,
    supplier: "",
    supplierSku: "",
    warehouse: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Toggle form sections
  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev === section ? "" : section
    );
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data before sending to API
    const itemData = {
      ...formData,

      quantity: Number(formData.quantity),
      reorderLevel: Number(formData.reorderLevel) || 0,
      purchasePrice: Number(formData.purchasePrice) || 0,
      sellingPrice: Number(formData.sellingPrice) || 0,
      taxRate: Number(formData.taxRate) || 0,
    };

    console.log("Sending inventory item:", itemData);

    try {
      // Call API function from parent
      await onAddItem(itemData);

      // Close modal only after successful API request
      onClose();

    } catch (error) {
      console.error(
        "Failed to create inventory item:",
        error.response?.data?.message ||
        error.message
      );
    }
  };

  return (
    <Modal>
      <HeaderSection onClose={onClose} />

      <form
        onSubmit={handleSubmit}
        className="flex min-h-0 flex-1 flex-col overflow-hidden"
      >
        {/* Scrollable Form Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="space-y-2 p-4">

            <BasicInfoSection
              openSection={openSection}
              toggleSection={toggleSection}
              formData={formData}
              handleChange={handleChange}
            />

            <StockAndUnitSection
              openSection={openSection}
              toggleSection={toggleSection}
              formData={formData}
              handleChange={handleChange}
            />

            <TaxSection
              formData={formData}
              handleChange={handleChange}
              toggleSection={toggleSection}
              openSection={openSection}
              setFormData={setFormData}
            />

            <SupplierSection
              toggleSection={toggleSection}
              openSection={openSection}
              formData={formData}
              handleChange={handleChange}
            />

            <AdditionalSection
              toggleSection={toggleSection}
              openSection={openSection}
              formData={formData}
              handleChange={handleChange}
            />

          </div>
        </div>

        <FormFooter onClose={onClose} />
      </form>
    </Modal>
  );
}