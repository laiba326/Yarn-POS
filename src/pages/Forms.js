import React from "react";
import DashboardIcon from "../components/dashboardIcon/DashboardIcon";
import { formElements } from "../configs/formElements";

export default function Forms() {
  return (
    <>
      {formElements.map((element) => (
        <DashboardIcon title={element.title} icon={element.icon} />
      ))}
    </>
  );
}
