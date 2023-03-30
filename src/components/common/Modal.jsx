import React from "react";

const Modal = ({ children, onClose }) => {
  return (
    <div className="fixed inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div
          className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75"
          onClick={onClose}
        />
        <div className="bg-white rounded-lg overflow-hidden w-full md:max-w-lg">
          <div className="my-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;