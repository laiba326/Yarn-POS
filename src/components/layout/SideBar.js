import React from "react";
import { Menu } from "antd";
import { sidebarItems } from "./sidebarItems";
import { useNavigate } from "react-router-dom";
const SideBar = ({ menu }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Menu
        onClick={({ key }) => {
          if (key === "signout") {
            //TODO : Signout feature here
          } else {
            navigate(key);
          }
        }}
        items={sidebarItems}
        style={{
          backgroundColor: "rgba(47, 51, 73, 0.95)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Menu>
      {menu}
    </div>
  );
};
export default SideBar;
