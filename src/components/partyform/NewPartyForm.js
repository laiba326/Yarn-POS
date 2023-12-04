import React, { useState } from "react";

import { Button, DatePicker, Form, Input, Select, Card, Space } from "antd";

const { Option } = Select;
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const NewPartyForm = () => {
  const [paymentType, setPaymentType] = useState(null);

  const handlePaymentTypeChange = (value) => {
    setPaymentType(value);
  };

  return (
    <Space direction="vertical" size={16}>
      <Card
        style={{
          width: 600,
          margin: "auto",
          backgroundColor: " #f0f0f0",
          // float: "left",
          marginLeft: "60px",
          padding: "20px",
          border: "solid",
        }}
      >
        <Form
          name="basic"
          labelCol={{
            span: 6,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 800,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1>Payment Form</h1>
          <Form.Item label="DatePicker" name="datePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Party-ID">
            <Select placeholder="Select Party-ID">
              <Option value="Party-ID 1">Party-ID 1</Option>
              <Option value="Party-ID 2">Party-ID 2</Option>
              <Option value="Party-ID 3">Party-ID 3</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Payment Type" name="paymentType">
            <Select
              onChange={handlePaymentTypeChange}
              placeholder="Select Payment Type"
            >
              <Option value="Cheque">Cheque</Option>
              <Option value="Cash">Cash</Option>
              <Option value="TC">TC</Option>
              <Option value="Account Transfer">Account Transfer</Option>
            </Select>
          </Form.Item>
          {paymentType === "Cheque" && (
            <Form.Item label="Cheque No" name="chequeNo">
              <Input placeholder="Enter Cheque No" />
            </Form.Item>
          )}
          {paymentType === "TC" && (
            <Form.Item label="TC No" name="tcNo">
              <Input placeholder="Enter TC No" />
            </Form.Item>
          )}
          {paymentType === "Account Transfer" && (
            <Form.Item label="Account No" name="accountNo">
              <Input placeholder="Enter Account No" />
            </Form.Item>
          )}
          <Form.Item label="Recived-By" name="receivedBy">
            <Input placeholder="Enter Recived-By" />
          </Form.Item>
          <Form.Item label="Comment" name="comment">
            <Input placeholder="Enter Comment" />
          </Form.Item>

          <Form.Item label="Amount" name="amount">
            <Input type="text" placeholder="Enter Amount" />
          </Form.Item>
          <Form.Item
            style={{
              marginLeft: "180px",
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default NewPartyForm;
