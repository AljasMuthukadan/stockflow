import { useEffect, useState } from "react";

import Modal from "../../../../components/common/Modal";

import HeaderSection from "./HeaderSection";
import ProductionInfoSection from "./ProductionInfoSection";
import MaterialsSection from "./MaterialsSection";
import ScheduleSection from "./ScheduleSection";
import AdditionalSection from "./AdditionalSection";
import FormFooter from "./FormFooter";

import useInventory from "../../../../hooks/useInventory";

const ProductionModal = ({ onClose, onAdd, selectedOrder, onUpdate }) => {
  const isEditMode = Boolean(selectedOrder);
  console.log(isEditMode);
  /* ===================================================== */
  const initialData = {
    id: "",
    product: "",
    productionId: "",
    quantity: "",
    unit: "",
    bom: [],
    status: "",
    productionDate: new Date().toISOString().split("T")[0], // Default to today's date
    stock: "",
    expectedDate: "",
    batch: "",
    notes: "",
  };
  


  /* ===================================================== */
  /* STATE */
  /* ===================================================== */

  const [openSection, setOpenSection] = useState("production");

  const [formData, setFormData] = useState(initialData);
   
  /* ===================================================== */
  /* INVENTORY */
  /* ===================================================== */

  const { inventory = [] } = useInventory();

   const i = inventory
      .filter((item) => item?._id === selectedOrder?.product?._id )
      .map((item) => item.name)[0]
      console.log(i)

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
        (item) => String(item.name ?? item.name) === String(value),
      );
      

      console.log("Selected Product:", selectedProduct);

      if (selectedProduct) {
        console.log("Selected Product Unit:", selectedProduct.unit);

        setFormData((prev) => ({
          ...prev,
          product: value,
          id: selectedProduct._id,
          unit: selectedProduct.unit || "",
          stock: `${formData.quantity} ${selectedProduct.unit}`,
        }));
      } else {
        /*
         * If no product is selected,
         * clear the unit.
         */
        setFormData((prev) => ({
          ...prev,
          product: value,
          id: "",
          unit: "",
        }));
      }
    }
  };

  /* ===================================================== */
  /* TOGGLE SECTION */
  /* ===================================================== */

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? "" : section));
  };

  useEffect(() => {
    if (!selectedOrder) {
      setFormData(initialData);
      setOpenSection("basic");
      return;
    }
    setFormData({
      id: selectedOrder?.product?._id,
      product: inventory
      .filter((item) => item?._id === selectedOrder?.product?._id )
      .map((item) => item.name)[0]
      ,
      productionId: selectedOrder?.productionId || "",
      quantity: selectedOrder?.quantity || selectedOrder?.stock?.split(" ")[0],
      unit: selectedOrder?.product?.unit,
      bom: [],
      status: selectedOrder?.status,
      productionDate: selectedOrder?.productionDate || new Date().toISOString().split("T")[0], 
      stock: selectedOrder?.stock,
      expectedDate: selectedOrder?.expectedDate ||  new Date().toISOString().split("T")[0] ,
      batch: selectedOrder?.batch,
      notes: "",
    })
    
  }, [selectedOrder, inventory]);

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

    console.log("Production Order:", productionOrder);

    /*
     * Temporary local state.
     *
     * Later this will become:
     *
     * POST /api/production
     */
    onAdd(productionOrder);

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
            isEditMode={isEditMode}
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
