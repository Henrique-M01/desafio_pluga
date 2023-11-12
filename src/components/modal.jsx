import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import Context from "../context/contex";
import "../style/modal.css"
import Card from "./card";

function Modal() {
  const { 
    modalContent,
    isOpen,
    setIsOpen,
    lastToolsOpen,
    setLastToolsOpen
  } = useContext(Context);

  function handleClose() {
    setIsOpen(!isOpen)

    AttLocalStorage();
  }

  function openLinkTool() {
    window.open(modalContent.link, "about_blank")
  }

  function AttLocalStorage() {
    let lastTools = JSON.parse(localStorage.getItem("lastToolsOpen"));

    if (lastTools.length === 3) {
      lastTools.pop();
    };

    lastTools.unshift(modalContent);

    localStorage.setItem("lastToolsOpen", JSON.stringify(lastTools));
    setLastToolsOpen(lastTools);
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
          <AiOutlineClose
          className="modal-close-btn"
            onClick={handleClose}
          />
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
              <h1 className="modal-last-tool-title">Últimas ferramentas visualizadas</h1>
              <div className="modal-last-tool-box">
              {
                lastToolsOpen.map((tool) => (
                  <Card
                    name={tool.name}
                    icon={tool.icon}
                    link={tool.link}
                    color={tool.color}
                    id={tool.app_id}
                    key={tool.app_id}
                    inModal={true}
                  />
                ))
              }
              </div>
            </section>  
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;