import React from "react";
import { DatePicker, Button, Form, Input } from "antd";
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

const purchaseForm = () => {
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
      <h1>Purchase Form</h1>
      <Form.Item label="DatePicker" name="datePicker">
        <DatePicker />
      </Form.Item>
      <Form.Item
        label={<CustomLabel>Product name</CustomLabel>}
        name="product name"
      >
        <Input />
      </Form.Item>

      <Form.Item label={<CustomLabel>Quantity</CustomLabel>} name="quantity">
        <Input />
      </Form.Item>
      <Form.Item label={<CustomLabel>Price</CustomLabel>} name="price">
        <Input />
      </Form.Item>
      <Form.Item label={<CustomLabel>Total</CustomLabel>} name="total">
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default purchaseForm;
