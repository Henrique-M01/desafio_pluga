import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Context from "../context/contex";
import "../style/modal.css"

function Modal() {
  const { modalContent, isOpen, setIsOpen } = useContext(Context);

  function handleClose() {
    setIsOpen(!isOpen)
  }

  function openLinkTool() {
    window.open(modalContent.link, "about_blank")
  }

  if (isOpen) {
    return (
      <div
        className="modal-backgroud"
      >
        <div
          className="modal-main"
          id={modalContent.app_id}
        >
          <header className="modal-header">
            <AiOutlineClose
            onClick={handleClose}
            />
          </header>
          <div className="modal-content">
            <section className="modal-tool">
              <img
                className="modal-tool-icon"
                style={{backgroundColor: modalContent.color}}
                src={modalContent.icon} 
                alt={modalContent.name} 
              />
              <div>
                <h1 className="modal-tool-name">
                  {modalContent.name}
                </h1>
                <button
                  className="modal-tool-btn"
                  onClick={openLinkTool}
                  style={{backgroundColor: modalContent.color}}
                >
                  Acessar
                </button>
              </div>
            </section>
            <section className="modal-last-tools">
            </section>  
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;