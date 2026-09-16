import { useState } from "react";

import FormFooter from "./FormFooter";
import SupplierSection from "./SupplierSection";
import AdditionalSection from "./AdditionalSection";
import TaxSection from "./TaxSection";
import StockAndUnitSection from "./StockAndUnitSection";
import BasicInfoSection from "./BasicInfoSection";
import HeaderSection from "./FormHeader";

import Modal from "../../../../components/common/Modal";

const createInitialFormData = (item) => ({
  name: item?.name ?? "",
  sku: item?.sku ?? "",
  itemType: item?.itemType ?? "",
  category: item?.category ?? "",
  quantity: item?.quantity ?? "",
  unit: item?.unit ?? "",
  reorderLevel: item?.reorderLevel ?? "",
  purchasePrice: item?.purchasePrice ?? "",
  sellingPrice: item?.sellingPrice ?? "",
  taxable: item?.taxable ?? true,
  taxRate: item?.taxRate ?? 18,
  supplier: item?.supplier ?? "",
  supplierSku: item?.supplierSku ?? "",
  warehouse: item?.warehouse ?? "",
  description: item?.description ?? "",
});

export default function InventoryModal({
  item,
  onClose,
  onAddItem,
  onUpdateItem,
}) {
  const [openSection, setOpenSection] = useState("basic");

  // =========================================================
  // MODE
  // =========================================================

  const isEditMode = Boolean(item);

  // =========================================================
  // FORM DATA
  // =========================================================

  const [formData, setFormData] = useState(() =>
    createInitialFormData(item)
  );

  // =========================================================
  // HANDLE INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const {
      name,
      value,
      type,
      checked,
    } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  // =========================================================
  // TOGGLE SECTION
  // =========================================================

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev === section ? "" : section
    );
  };

  // =========================================================
  // SUBMIT
  // =========================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    const itemData = {
      name: formData.name.trim(),
      sku: formData.sku.trim() || undefined,
      itemType: formData.itemType,
      category: formData.category.trim(),
      quantity: Number(formData.quantity) || 0,
      unit: formData.unit,
      reorderLevel: Number(formData.reorderLevel) || 0,
      purchasePrice:
        Number(formData.purchasePrice) || 0,
      sellingPrice:
        Number(formData.sellingPrice) || 0,
      taxable: Boolean(formData.taxable),
      taxRate: Number(formData.taxRate) || 0,
      supplier: formData.supplier.trim(),
      supplierSku: formData.supplierSku.trim(),
      warehouse: formData.warehouse.trim(),
      description: formData.description.trim(),
    };

    console.log(
      isEditMode
        ? "Updating inventory item:"
        : "Creating inventory item:",
      itemData
    );

    try {
      if (isEditMode) {
        // UPDATE
        await onUpdateItem(
          item._id,
          itemData
        );
      } else {
        // CREATE
        await onAddItem(itemData);
      }

      // Only close after successful request
      onClose();

    } catch (error) {
      console.error(
        isEditMode
          ? "Failed to update inventory item:"
          : "Failed to create inventory item:",
        error.response?.data?.message ||
          error.message
      );
    }
  };

  return (
    <Modal>
      <HeaderSection
        onClose={onClose}
        isEditMode={isEditMode}
      />

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

        <FormFooter
          onClose={onClose}
          isEditMode={isEditMode}
        />
      </form>
    </Modal>
  );
}