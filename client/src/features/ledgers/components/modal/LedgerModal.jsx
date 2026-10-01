import { useEffect, useState } from "react";

import Modal from "../../../../components/common/Modal";
import ModalHeader from "./ModalHeader";
import BasicInfo from "./BasicInfo";
import ContactInfo from "./ContactInfo";
import AddressInfo from "./AddressInfo";
import ProfileImage from "./ProfileImage";

const initialFormData = {
  company: "",
  alias: "",
  partyType: "",
  category: "",
  gstin: "",

  image: null,

  contactName: "",
  phone: "",
  designation: "",
  email: "",

  country: "India",

  addressLine1: "",
  addressLine2: "",
  city: "",
  state: "",
  pinCode: "",
};

const LedgerModal = ({
  onClose,
  onSubmit,
  updateLedger,
  ledger,
}) => {
  const [formData, setFormData] = useState(
    initialFormData
  );

  const [openSection, setOpenSection] =
    useState("basic");

  const isEditMode = Boolean(ledger);

  // =========================================================
  // LOAD EDIT DATA
  // =========================================================

  useEffect(() => {
    if (!ledger) {
      setFormData(initialFormData);
      setOpenSection("basic");
      return;
    }

    setFormData({
      company: ledger.company || "",
      alias: ledger.alias || "",
      partyType: ledger.partyType || "",
      category: ledger.category || "",
      gstin: ledger.gstin || "",

      // Existing backend image URL
      image: ledger.image || null,

      contactName:
        ledger.contactInfo?.personName || "",

      phone:
        ledger.contactInfo?.phoneNo || "",

      designation:
        ledger.contactInfo?.designation || "",

      email:
        ledger.contactInfo?.email || "",

      country:
        ledger.address?.country || "India",

      addressLine1:
        ledger.address?.line1 || "",

      addressLine2:
        ledger.address?.line2 || "",

      city:
        ledger.address?.city || "",

      state:
        ledger.address?.state || "",

      pinCode:
        ledger.address?.postalCode ||
        ledger.address?.pinCode ||
        "",
    });

    setOpenSection("basic");
  }, [ledger]);

  // =========================================================
  // INPUT CHANGE
  // =========================================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // =========================================================
  // IMAGE CHANGE
  // =========================================================

  const handleImageChange = (file) => {
    setFormData((prev) => ({
      ...prev,
      image: file,
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

    const ledgerData = {
      company:
        formData.company || "Unnamed Company",

      alias: formData.alias || "",

      partyType:
        formData.partyType || "Other",

      category:
        formData.category || "",

      gstin:
        formData.gstin || "",

      image:
        formData.image || null,

      contactInfo: {
        personName:
          formData.contactName || "",

        phoneNo:
          formData.phone || "",

        designation:
          formData.designation || "",

        email:
          formData.email || "",
      },

      address: {
        line1:
          formData.addressLine1 || "",

        line2:
          formData.addressLine2 || "",

        city:
          formData.city || "",

        state:
          formData.state || "",

        postalCode:
          formData.pinCode || "",

        country:
          formData.country || "India",
      },

      avatar: formData.company
        ? formData.company
            .split(" ")
            .filter(Boolean)
            .map((word) => word[0])
            .join("")
            .slice(0, 2)
            .toUpperCase()
        : "NA",

      avatarColor: "bg-emerald-500",

      orders: ledger?.orders ?? 0,

      outstanding:
        ledger?.outstanding ?? 0,

      outstandingType:
        ledger?.outstandingType || "Settled",
    };

    try {
      if (isEditMode) {
        // MongoDB ID
        await updateLedger(
          ledger._id,
          ledgerData
        );

        console.log(
          "Updating ledger:",
          ledgerData
        );
      } else {
        await onSubmit(ledgerData);

        console.log(
          "Creating new ledger:",
          ledgerData
        );
      }

      // Reset only after successful request
      setFormData(initialFormData);
      setOpenSection("basic");

      onClose();
    } catch (error) {
      console.error(
        "Failed to save ledger:",
        error
      );
    }
  };

  return (
    <Modal>
      <ModalHeader
        onClose={onClose}
        isEditMode={isEditMode}
      />

      <form
        onSubmit={handleSubmit}
        className="
          flex
          min-h-0
          flex-1
          flex-col
          overflow-hidden
        "
      >
        {/* FORM CONTENT */}

        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="space-y-2 p-3 sm:p-4">
            <BasicInfo
              formData={formData}
              handleChange={handleChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />

            <ContactInfo
              formData={formData}
              handleChange={handleChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />

            <AddressInfo
              formData={formData}
              handleChange={handleChange}
              openSection={openSection}
              toggleSection={toggleSection}
            />

            <ProfileImage
              formData={formData}
              handleImageChange={
                handleImageChange
              }
              openSection={openSection}
              toggleSection={toggleSection}
            />
          </div>
        </div>

        {/* FOOTER */}

        <div
          className="
            flex
            shrink-0
            flex-col-reverse
            gap-2
            border-t
            border-slate-100
            bg-white
            px-4
            py-3
            sm:flex-row
            sm:items-center
            sm:justify-end
            sm:px-5
          "
        >
          <button
            type="button"
            onClick={onClose}
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-5
              py-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:w-auto
            "
          >
            Cancel
          </button>

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-emerald-600
              px-5
              py-2.5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-emerald-700
              active:scale-[0.98]
              sm:w-auto
            "
          >
            {isEditMode
              ? "Update Ledger"
              : "Add Ledger"}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default LedgerModal;