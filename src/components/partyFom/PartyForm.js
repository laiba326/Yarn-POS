import React from "react";
import { Button, Form, Input } from "antd";
import styled from "styled-components";

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: auto;
  background-color: #f0f0f0;
  padding: 20px;
  color: black;
  border: solid;
`;
const CustomLabel = styled.label`
  color: black;
`;

const PartyForm = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <StyledForm
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
    >
      <h1>Party Form</h1>
      <Form.Item label={<CustomLabel>Party Name</CustomLabel>} name="partyname">
        <Input placeholder="Enter Party Name" />
      </Form.Item>

      <Form.Item label={<CustomLabel>Address</CustomLabel>} name="address">
        <Input placeholder=" Enter Address" />
      </Form.Item>

      <Form.Item label={<CustomLabel>phone1</CustomLabel>} name="phone1">
        <input placeholder=" Enter Phone1" />
      </Form.Item>

      <Form.Item label={<CustomLabel>phone2</CustomLabel>} name="phone2">
        <input placeholder=" Enter Phone2" />
      </Form.Item>

      <Form.Item label={<CustomLabel>phone3</CustomLabel>} name="phone3">
        <input placeholder="Enter Phone3" />
      </Form.Item>

      <Form.Item
        style={{
          marginLeft: "100px",
        }}
      >
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default PartyForm;
