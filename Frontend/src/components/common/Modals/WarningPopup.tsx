import Button from "../Buttons/Button";
import React from "react";
import { Modal } from "flowbite-react";
import { ExclamationCircleFill } from "react-bootstrap-icons";

interface propsType {
  onConfirm: any;
  onHide: any;
  title: string;
  isShow: boolean;
  confirmText?: string;
  cancelText?: string;
  confirmGreen?: boolean;
  confirmLoading?: boolean;
}

const WarningPopup = ({
  title,
  onHide,
  isShow,
  onConfirm,
  confirmText,
  cancelText,
  confirmGreen,
  confirmLoading,
}: propsType) => {
  function confirm() {
    onConfirm();
    onHide();
  }

  return (
    <React.Fragment>
      <Modal
        style={{ zIndex: "999" }}
        show={isShow}
        size="md"
        popup={isShow}
        onClose={onHide}
        dismissible={true}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <ExclamationCircleFill className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              {title}
            </h3>
            <div className="flex justify-center gap-4">
              {confirmGreen ? (
                <Button
                  className="bg-green-600 text-white"
                  loading={confirmLoading}
                  onClick={confirm}
                >
                  {confirmText || `Yes, I'm sure`}
                </Button>
              ) : (
                <Button
                  className="bg-red-600 text-white"
                  loading={confirmLoading}
                  onClick={confirm}
                >
                  {confirmText || `Yes, I'm sure`}
                </Button>
              )}
              <Button className="bg-yellow-600 text-white" onClick={onHide}>
                {cancelText || "No, cancel"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default WarningPopup;
