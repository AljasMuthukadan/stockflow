import { useState } from "react";

import Modal from "../../../../components/common/Modal";

import HeaderSection from "./HeaderSection";
import ProductionInfoSection from "./ProductionInfoSection";
import MaterialsSection from "./MaterialsSection";
import ScheduleSection from "./ScheduleSection";
import AdditionalSection from "./AdditionalSection";
import FormFooter from "./FormFooter";

import useInventory from "../../../inventory/hooks/useInventory";

const ProductionModal = ({
  onClose,
  setProductionData,
}) => {
  /* ===================================================== */
  /* STATE */
  /* ===================================================== */

  const [openSection, setOpenSection] =
    useState("production");

  const [formData, setFormData] = useState({
    productionNumber: "",
    product: "",
    quantity: "",
    unit: "",
    bom: "",
    warehouse: "",
    productionDate: "",
    expectedDate: "",
    batchNumber: "",
    notes: "",
  });

  /* ===================================================== */
  /* INVENTORY */
  /* ===================================================== */

  const { inventory = [] } = useInventory();

  /* ===================================================== */
  /* HANDLE INPUT CHANGE */
  /* ===================================================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    /*
     * Normal input handling
     */
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    /*
     * If the selected field is Finished Product,
     * automatically find the product and get its unit.
     */
    if (name === "product") {
      const selectedProduct = inventory.find(
        (item) =>
          String(item._id ?? item.id) === String(value)
      );

      console.log(
        "Selected Product:",
        selectedProduct
      );

      if (selectedProduct) {
        console.log(
          "Selected Product Unit:",
          selectedProduct.unit
        );

        setFormData((prev) => ({
          ...prev,
          product: value,
          unit: selectedProduct.unit || "",
        }));
      } else {
        /*
         * If no product is selected,
         * clear the unit.
         */
        setFormData((prev) => ({
          ...prev,
          product: value,
          unit: "",
        }));
      }
    }
  };

  /* ===================================================== */
  /* TOGGLE SECTION */
  /* ===================================================== */

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev === section ? "" : section
    );
  };

  /* ===================================================== */
  /* SUBMIT */
  /* ===================================================== */

  const handleSubmit = (e) => {
    e.preventDefault();

    /*
     * Basic validation
     */
    if (!formData.product) {
      alert("Please select a finished product.");
      return;
    }

    if (!formData.quantity) {
      alert("Please enter production quantity.");
      return;
    }

    if (!formData.unit) {
      alert("Selected product does not have a unit.");
      return;
    }

    /*
     * Create production record
     */
    const productionOrder = {
      ...formData,
      quantity: Number(formData.quantity),
    };

    console.log(
      "Production Order:",
      productionOrder
    );

    /*
     * Temporary local state.
     *
     * Later this will become:
     *
     * POST /api/production
     */
    setProductionData((prev) => [
      ...prev,
      productionOrder,
    ]);

    /*
     * Later backend logic:
     *
     * 1. Validate product
     * 2. Validate BOM
     * 3. Check raw material stock
     * 4. Deduct raw materials
     * 5. Increase finished product stock
     * 6. Create stock movement
     * 7. Create production record
     */

    onClose();
  };

  /* ===================================================== */
  /* RENDER */
  /* ===================================================== */

  return (
    <Modal>
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <HeaderSection onClose={onClose} />

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
        <div className="space-y-2 p-4">

          {/* ================================================= */}
          {/* PRODUCTION INFORMATION */}
          {/* ================================================= */}

          <ProductionInfoSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
            inventory={inventory}
          />

          {/* ================================================= */}
          {/* MATERIALS / BOM */}
          {/* ================================================= */}

          <MaterialsSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />

          {/* ================================================= */}
          {/* SCHEDULE */}
          {/* ================================================= */}

          <ScheduleSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />

          {/* ================================================= */}
          {/* ADDITIONAL */}
          {/* ================================================= */}

          <AdditionalSection
            openSection={openSection}
            toggleSection={toggleSection}
            formData={formData}
            handleChange={handleChange}
          />
        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <FormFooter onClose={onClose} />
      </form>
    </Modal>
  );
};

export default ProductionModal;