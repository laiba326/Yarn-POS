import React from "react";
import { Button, Form, Input, Card, Space } from "antd";
import { addColor } from "../../services/restApi/restApis";
const onFinish = (values) => {
  console.log(values);
  addColor(values)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const AddColor = () => {
  return (
    <Space direction="vertical" size={16}>
      <Card
        // title="Add Color"
        style={{
          width: 500,
          backgroundColor: "#f0f0f0",
          float: "left",
          marginLeft: "60px",
          padding: "16px",
          border: "solid",
        }}
      >
        <h1>Add Color</h1>
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
          <Form.Item label="Color" name="color">
            <Input type="text" placeholder="Enter Color" />
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

export default AddColor;
