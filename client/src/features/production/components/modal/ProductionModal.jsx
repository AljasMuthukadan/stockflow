import { useState } from "react";
import Modal from "../../../../components/common/Modal";

import HeaderSection from "./HeaderSection";
import ProductionInfoSection from "./ProductionInfoSection";
import MaterialsSection from "./MaterialsSection";
import ScheduleSection from "./ScheduleSection";
import AdditionalSection from "./AdditionalSection";
import FormFooter from "./FormFooter";

const ProductionModal = ({ onClose }) => {
  const [openSection, setOpenSection] = useState("production");

  const [formData, setFormData] = useState({
    productionNumber: "",
    finishedProduct: "",
    quantity: "",
    unit: "",
    bom: "",
    warehouse: "",
    productionDate: "",
    expectedDate: "",
    batchNumber: "",
    notes: "",
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

    console.log("Production Order:", formData);

    // Later:
    // POST /api/production
    // Backend will:
    // 1. Validate BOM
    // 2. Check available raw materials
    // 3. Create production record
    // 4. Deduct raw materials
    // 5. Increase finished goods stock
    // 6. Create stock movement records

    onClose();
  };

  return (
    <Modal>

      {/* Header */}

      <HeaderSection onClose={onClose} />

      {/* Form */}

      <form
        onSubmit={handleSubmit}
        className="min-h-0 flex-1 overflow-y-auto"
      >

        <div className="space-y-2 p-4">

          {/* PRODUCTION INFORMATION */}

          <ProductionInfoSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />

          {/* MATERIALS / BOM */}

          <MaterialsSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />

          {/* SCHEDULE */}

          <ScheduleSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />

          {/* ADDITIONAL */}

          <AdditionalSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />

        </div>

        {/* Footer */}

        <FormFooter onClose={onClose} />

      </form>

    </Modal>
  );
};

export default ProductionModal;