import React, { useState } from "react";
import { Option } from "antd/es/mentions";
import { Button, Form, Input, Radio, Select } from "antd";

const ReactFc = () => {
  const [componentSize, setComponentSize] = useState("default");
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );
  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      style={{ maxWidth: 600 }}
    >
      <h1>Party Form</h1>
      <Form.Item label="address">
        <Input />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="phone1">
        <input />
      </Form.Item>

      <Form.Item label="phone2">
        <input />
      </Form.Item>

      <Form.Item label="phone3">
        <input />
      </Form.Item>
      <Form.Item label="Button">
        <Button>Get Started</Button>
      </Form.Item>
    </Form>
  );
};

export default ReactFc;
