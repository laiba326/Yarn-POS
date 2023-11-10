import React from "react";
import { Card, Button } from "antd";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 300px;
  height: 200px;
  text-align: center;
  background-color: blue;
`;

const PartyCard = () => (
  <StyledCard title="Party Card" bordered={false}>
    <Button type="primary" onClick={() => alert("Open")}>
      Open
    </Button>
  </StyledCard>
);

export default PartyCard;
