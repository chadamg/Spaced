import React from "react";
import { useGlobalContext } from "./StudyModalContext";
import Scroller from "./StudyCardScroller";
import { FaTimes } from "react-icons/fa";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  


  return (
    <div
      className={`${
        isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
      }`}
    >
      <div className="modal-container">
        <Scroller/>
        <button className="close-modal-btn" onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
    </div>
  );
};

export default Modal;
