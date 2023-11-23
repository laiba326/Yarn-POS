import React from "react";
import DashboardIcon from "../components/dashboardIcon/DashboardIcon";
import { formElements } from "../configs/formElements";
import { Row } from "antd";

export default function Forms() {
  return (
    <Row>
      {formElements.map((element) => (
        <DashboardIcon
          title={element.title}
          icon={element.icon}
          comp={element.comp}
        />
      ))}
    </Row>
  );
}
