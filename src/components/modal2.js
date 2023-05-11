import React, { useState } from 'react';
import Modal from "@components/modal"

function Modal2() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleButtonClick() {
    setIsModalOpen(true);
  }

  return (
    <>
      <button className="flex service" onClick={handleButtonClick}>
        <span><i className="fa fa-desktop" />Show services menu</span>
      </button>
      {isModalOpen && <Modal />}
    </>
  );
}

export default Modal2;