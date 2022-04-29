import { ModalProps } from "./types";
import ReactDOM from "react-dom";

const Modal = (props: ModalProps) => {
  return ReactDOM.createPortal(
    <div></div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
