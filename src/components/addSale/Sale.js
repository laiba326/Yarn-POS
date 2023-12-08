import React from "react";
import { useSelector } from "react-redux";

import { Button, DatePicker, Form, Input, Select, Card, Space } from "antd";

const { Option } = Select;

const Sale = () => {
  const state = useSelector((state) => state);

  const partyOptions = state.party.parties.map((party) => {
    return {
      label: party.partyname,
      value: party.partyid,
    };
  });
  const skuOptions = state.party.parties.map((party) => {
    return {
      label: party.partyname,
      value: party.partyid,
    };
  });

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space direction="vertical" size={16}>
      <Card
        // title="Party card"
        style={{
          width: 500,
          backgroundColor: "#f0f0f0",
          float: "left",
          marginLeft: "60px",
          padding: "16px",
          border: "solid",
        }}
      >
        <h1>Add Sales</h1>
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
          <Form.Item label="Party Name">
            <Select placeholder="Select Party Name" options={partyOptions} />
          </Form.Item>

          <Form.Item label="SKU">
            <Select placeholder="Select SKU" options={skuOptions} />
          </Form.Item>
          {/* <Form.Item label="Payment Type" name="paymentType">
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
          )} */}
          <Form.Item label="Quantity in Bags" name="Quantity in Bags">
            <Input placeholder="Enter Quantity" />
          </Form.Item>
          <Form.Item label="Price" name="Price">
            <Input type="text" placeholder="Enter Price" />
          </Form.Item>

          <Form.Item label="Payment" name="Payment">
            <Input type="text" placeholder="Enter Payment" />
          </Form.Item>
          <Form.Item
            style={{
              marginLeft: "150px",
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

export default Sale;
