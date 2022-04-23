import React from "react";
import "./Modal.css";
import ReactDOM from "react-dom";

const ModalBlock = (props) => {
  return <div className="modal">{props.children}</div>;
};

const BackDrop = (props) => {
  return (
    <div
      onClick={props.onClose}
      className="backdrop"
    ></div>
  );
};
export default function Modal(props) {
 
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose} />,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <ModalBlock>{props.children}</ModalBlock>,
        document.getElementById("modal")
      )}
    </>
  );
}
