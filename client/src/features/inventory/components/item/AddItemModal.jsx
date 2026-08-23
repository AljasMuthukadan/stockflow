import { useState } from "react";
import FormFooter from "./FormFooter";
import SupplierSection from "./SupplierSection";
import AdditionalSection from "./AdditionalSection";
import TaxSection from "./TaxSection";
import StockAndUnitSection from "./StockAndUnitSection";
import BasicInfoSection from "./BasicInfoSection";
import HeaderSection from "./FormHeader";
import Modal from "../../../../components/common/Modal";

export default function AddItemModal({ onClose }) {
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

    console.log("Inventory Item:", formData);

    // Later:
    // POST /api/inventory
    // send formData to backend

    onClose();
  };

  return (
    <Modal>

        {/* Header */}

        <HeaderSection onClose={onClose} />

        {/* Form Content */}

        <form
          onSubmit={handleSubmit}
          className="min-h-0 flex-1 overflow-y-auto "
        >

          <div className="space-y-2 p-4">

            {/* BASIC INFORMATION */}

            <BasicInfoSection
              openSection={openSection}
              toggleSection={toggleSection}
              formData={formData}
              handleChange={handleChange}
            />


            {/* STOCK & UNIT */}

            <StockAndUnitSection
              openSection={openSection}
              toggleSection={toggleSection}
              formData={formData}
              handleChange={handleChange}
            />


            {/* PRICING & TAX */}

           <TaxSection formData={formData}
            handleChange={handleChange} 
            toggleSection={toggleSection} 
            openSection={openSection} 
            setFormData={setFormData} />


            {/* SUPPLIER */}

            <SupplierSection
              toggleSection={toggleSection}
              openSection={openSection}
              formData={formData}
              handleChange={handleChange}
            />


            {/* ADDITIONAL */}

            <AdditionalSection
              toggleSection={toggleSection}
              openSection={openSection}
              formData={formData}
              handleChange={handleChange}
            />

          </div>

          {/* Footer */}

          <FormFooter onClose={onClose} />

        </form>


    </Modal>
  );
}