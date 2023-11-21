import React, { useState } from "react";
import DashboardIcon from "../components/dashboardIcon/DashboardIcon";
import { formElements } from "../configs/formElements";
import FormModal from "../components/formModal/FormModal";
export default function Forms() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    console.log("Clicked");
    setIsModalOpen(true);
  };

  return (
    <>
      {formElements.map((element) => (
        <>
          <DashboardIcon
            onClick={handleModalOpen}
            title={element.title}
            icon={element.icon}
          />
          <FormModal
            title={element.title}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            content={element.comp}
          />
        </>
      ))}
    </>
  );
}
