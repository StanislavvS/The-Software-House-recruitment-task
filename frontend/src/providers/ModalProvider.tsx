import { createContext, useState, useContext, FC } from "react";
import { Modal, ModalContextType } from "./ModalProvider.types";

const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  className: "",
  setModal: () => {},
});

const ModalProvider: FC = (props) => {
  const [modal, setModal] = useState<Modal>({ isOpen: false, className: "" });

  const modalContextValue = {
    isOpen: modal.isOpen,
    className: modal.className,
    setModal,
  };

  return <ModalContext.Provider value={modalContextValue} {...props} />;
};

const useModal = () => useContext(ModalContext);

export { ModalProvider, useModal };
