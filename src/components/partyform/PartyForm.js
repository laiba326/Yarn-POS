import React, { useState } from "react";

import { Button, DatePicker, Form, Input, Select, TreeSelect } from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];

const PartyForm = () => {
  const [componentSize, setComponentSize] =
    (useState < SizeType) | ("default" > "default");

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{ maxWidth: 600 }}
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

      <Form.Item>
        <Button>Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default PartyForm;
