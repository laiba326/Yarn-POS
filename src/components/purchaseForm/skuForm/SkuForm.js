import React from "react";
import { Button, Form, Input, Select } from "antd";
import styled from "styled-components";
import { addSku } from "../../../services/restApi/restApis";
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

const SkuForm = () => {
  const onFinish = (values) => {
    console.log(values);
    addSku(values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  // const onChange = (values) => {
  //   console.log(values);
  //   SkuForm(values)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  const selectOptions = [
    { label: "red", value: "red" },
    { label: "red", value: "red" },
    { label: "red", value: "red" },
  ];

  return (
    <StyledForm
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      style={{ maxWidth: 600 }}
      onFinish={onFinish}
      // onChange={onChange}
    >
      <h1>Sku Form</h1>
      <Form.Item label={<CustomLabel>Sku Name</CustomLabel>} name="skuname">
        <Input placeholder="Enter Sku Name" />
      </Form.Item>
      <Form.Item label={<CustomLabel>Sku Color</CustomLabel>} name="skucolor">
        <Select options={selectOptions} />
      </Form.Item>

      <Form.Item
        style={{
          marginLeft: "170px",
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};

export default SkuForm;
