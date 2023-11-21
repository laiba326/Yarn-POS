import React from "react";
import { Card, Avatar } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: blue;
`;

const DashboardIcon = ({ title, component, icon, onClick }) => (
  <div onClick={onClick}>
    <StyledCard title={title}>
      <Avatar size={100} icon={icon} />
    </StyledCard>
  </div>
);

export default DashboardIcon;
