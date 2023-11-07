import React from "react";
import { Button, Form, Input, Select } from "antd";
import styled from "styled-components";

const StyledForm = styled(Form)`
  max-width: 600px;
  margin: auto;
  background-color: #f0f0f0;
  padding: 20px;
  margin-bottom: 800px;
  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.4);
`;

const PartyForm = () => {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 50 }}>
        <Select.Option value="92">+92</Select.Option>
      </Select>
    </Form.Item>
  );
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
      <Form.Item label="Party Name" name="Party Name">
        <Input />
      </Form.Item>

      <Form.Item label="Address" name="Address">
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Phone1" name="Phone1">
        <input />
      </Form.Item>

      <Form.Item label="Phone2" name="Phone2">
        <input />
      </Form.Item>

      <Form.Item label="Phone3" name="Phone3">
        <input />
      </Form.Item>
      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">
          Get Started
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default PartyForm;
