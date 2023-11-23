import React from "react";
import { Modal } from "antd";

export default function FormModal({ isModalOpen, content, setIsModalOpen }) {
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        width={750}
      >
        {content}
      </Modal>
    </>
  );
}
