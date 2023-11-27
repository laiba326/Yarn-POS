import React from "react";
import { Button, Form, Input, Select } from "antd";
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
const { Option } = Select;
const onChange = (values) => {
  console.log(values);
};
const SkuForm = () => {
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
      onChange={onChange}
    >
      <h1>Sku Form</h1>
      <Form.Item label={<CustomLabel>Sku Name</CustomLabel>} name="skuname">
        <Input placeholder="Enter Sku Name" />
      </Form.Item>
      <Form.Item label={<CustomLabel>Sku Color</CustomLabel>} name="skucolor">
        <Select>
          <Option value="Green">green</Option>
          <Option value="Red">red</Option>
          <Option value="yellow">yellow</Option>
        </Select>
      </Form.Item>
      <Form
        style={{
          marginLeft: "170px",
        }}
      >
        <Form.Item>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
        </Form.Item>
      </Form>
    </StyledForm>
  );
};

export default SkuForm;
