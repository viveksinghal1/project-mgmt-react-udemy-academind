import { createPortal } from "react-dom";
import { forwardRef, useRef, useImperativeHandle } from "react";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
