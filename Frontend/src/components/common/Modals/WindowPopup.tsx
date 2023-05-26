import { Modal } from "flowbite-react";
import React from "react";

export interface windowPopupPropsTypes {
  onClose: any;
  isShow: boolean;
  children: any;
  size?:
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "2xl"
    | "3xl"
    | "4xl"
    | "5xl"
    | "6xl"
    | "7xl";
}

const WindowPopup = ({ onClose, isShow, children, size }: windowPopupPropsTypes) => {
  return (
    <React.Fragment>
      <Modal
        style={{ zIndex: "999" }}
        show={isShow}
        size={size || 'xl'}
        popup={isShow}
        onClose={onClose}
        dismissible={true}
      >
        <div className="max-h-[90vh] overflow-y-auto">{children}</div>
      </Modal>
    </React.Fragment>
  );
};

export default WindowPopup;
