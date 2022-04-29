import React from "react";

export type ModalContextType = Modal & {
  setModal: React.Dispatch<React.SetStateAction<Modal>>;
};

export type Modal = {
  isOpen: boolean;
  className: string;
};
