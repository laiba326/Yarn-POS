import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
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
        title="Party card"
        style={{
          width: 500,
          backgroundColor: "lightblue",
          float: "left",
          marginLeft: "60px",
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
            maxWidth: 800,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item label="DatePicker" name="datePicker">
            <DatePicker />
          </Form.Item>
          <Form.Item label="Party-ID">
            <Select>
              <Option value="Party-ID 1">Party-ID 1</Option>
              <Option value="Party-ID 2">Party-ID 2</Option>
              <Option value="Party-ID 3">Party-ID 3</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Payment Type" name="paymentType">
            <Select onChange={handlePaymentTypeChange}>
              <Option value="Cheque">Cheque</Option>
              <Option value="Cash">Cash</Option>
              <Option value="TC">TC</Option>
              <Option value="Account Transfer">Account Transfer</Option>
            </Select>
          </Form.Item>
          {paymentType === "Cheque" && (
            <Form.Item label="Cheque No" name="chequeNo">
              <Input />
            </Form.Item>
          )}
          {paymentType === "TC" && (
            <Form.Item label="TC No" name="tcNo">
              <Input />
            </Form.Item>
          )}
          {paymentType === "Account Transfer" && (
            <Form.Item label="Account No" name="accountNo">
              <Input />
            </Form.Item>
          )}
          <Form.Item label="Recived-By" name="receivedBy">
            <Input />
          </Form.Item>
          <Form.Item label="Comment" name="comment">
            <Input />
          </Form.Item>

          <Form.Item label="Amount" name="amount">
            <Input type="text" />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Form>
      </Card>
    </Space>
  );
};

export default NewPartyForm;
