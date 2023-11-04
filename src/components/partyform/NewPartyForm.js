import React from "react";

import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  TreeSelect,
  Card,
  Space,
} from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const validateAmount = (rule, value) => {
  if (/\d/.test(value)) {
    return Promise.reject("Amount should only contain letters (no numbers).");
  }
  return Promise.resolve();
};

const NewPartyForm = () => (
  <Space direction="vertical" size={16}>
    <Card
      title="Party card"
      style={{
        width: 300,
        backgroundColor: "lightblue",
        float: "left",
        marginLeft: "300px",
        padding: "16px",
      }}
    >
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="Party-ID">
          <Select>
            <Select.Option value="Party-ID 1">Party-ID 1</Select.Option>
            <Select.Option value="Party-ID 2">Party-ID 2</Select.Option>
            <Select.Option value="Party-ID 3">Party-ID 3</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Payment Type">
          <TreeSelect
            treeData={[
              {
                title: "Cheque",
                value: "Cheque",
              },
              {
                title: "Cash",
                value: "Cash",
              },
              {
                title: "TC",
                value: "TC",
              },
              {
                title: "Account Transfer",
                value: "Account Transfer",
              },
            ]}
          />
        </Form.Item>
        <Form.Item label="Recived-By">
          <Input />
        </Form.Item>
        <Form.Item label="Comment">
          <Input />
        </Form.Item>

        <Form.Item label="DatePicker">
          <DatePicker />
        </Form.Item>
        <Form.Item
          label="Amount"
          name="amount"
          rules={[
            {
              validator: validateAmount,
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>

        <Form.Item>
          <Button>Submit</Button>
        </Form.Item>
      </Form>
    </Card>
  </Space>
);
export default NewPartyForm;
