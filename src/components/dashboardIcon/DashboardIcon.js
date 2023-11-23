import React, { useState } from "react";
import { Card, Avatar } from "antd";
import styled from "styled-components";
import FormModal from "../formModal/FormModal";

const StyledCard = styled(Card)`
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: #82a2ac;
`;

const DashboardIcon = ({ title, icon, comp }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <StyledCard onClick={handleModal} title={title}>
        <Avatar size={100} icon={icon} />
      </StyledCard>
      <FormModal
        title={title}
        isModalOpen={isModalOpen}
        content={comp}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
};
export default DashboardIcon;
