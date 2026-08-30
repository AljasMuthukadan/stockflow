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
    itemName: "",
    sku: "",
    itemType: "",
    category: "",
    quantity: "",
    unit: "",
    reorderLevel: "",
    purchasePrice: "",
    sellingPrice: "",
    taxable: "yes",
    taxRate: "18",
    supplier: "",
    supplierSku: "",
    warehouse: "",
    description: "",
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const quantity = Number(formData.quantity) || 0;

    const reorderLevel =
      Number(formData.reorderLevel) || 0;

    let status = "In Stock";

    if (quantity === 0) {
      status = "Critical";
    } else if (quantity <= reorderLevel) {
      status = "Low Stock";
    }

    const newItem = {
      id: Date.now(),

      name: formData.itemName,

      sku: formData.sku,

      category: formData.category,

      stock: quantity,

      unit: formData.unit,

      reorder: reorderLevel,

      status,

      itemType: formData.itemType,

      purchasePrice:
        Number(formData.purchasePrice) || 0,

      sellingPrice:
        Number(formData.sellingPrice) || 0,

      supplier: formData.supplier,

      supplierSku: formData.supplierSku,

      warehouse: formData.warehouse,

      description: formData.description,

      taxable: formData.taxable,

      taxRate: formData.taxRate,
    };

    // Send new item to parent
    onAddItem(newItem);

    // Close modal
    onClose();
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