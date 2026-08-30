import { useState } from "react";

import Modal from "../../../../components/common/Modal";
import HeaderSection from "./HeaderSection";
import BasicInfoSection from "./BasicInfoSection";
import ReportConfigurationSection from "./ReportConfigurationSection";
import DataFieldsSection from "./DataFieldsSection";
import FormFooter from "./FormFooter";

const ReportsModal = ({ onClose }) => {
  const [openSection, setOpenSection] = useState("basic");

  const [formData, setFormData] = useState({
    reportName: "",
    category: "",
    dataSource: "",
    description: "",
    reportType: "Table",
    dateRange: "Custom",
    format: "Screen",
  });

  const [selectedFields, setSelectedFields] = useState([]);

  const toggleSection = (section) => {
    setOpenSection((prev) =>
      prev === section ? null : section
    );
  };

  const handleCreateReport = () => {
    console.log({
      ...formData,
      selectedFields,
    });

    onClose();
  };

  return (
    <Modal>
      <div className="flex max-h-[90vh] w-full flex-col">

        {/* Header */}
        <HeaderSection onClose={onClose} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5">

          <div className="space-y-4">

            <BasicInfoSection
              open={openSection === "basic"}
              onToggle={() => toggleSection("basic")}
              formData={formData}
              setFormData={setFormData}
            />

            <ReportConfigurationSection
              open={openSection === "configuration"}
              onToggle={() =>
                toggleSection("configuration")
              }
              formData={formData}
              setFormData={setFormData}
            />

            <DataFieldsSection
              open={openSection === "fields"}
              onToggle={() => toggleSection("fields")}
              selectedFields={selectedFields}
              setSelectedFields={setSelectedFields}
            />

          </div>

        </div>

        {/* Footer */}
        <FormFooter
          onClose={onClose}
          onCreate={handleCreateReport}
        />

      </div>
    </Modal>
  );
};

export default ReportsModal;