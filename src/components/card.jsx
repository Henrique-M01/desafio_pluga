import React, { useContext } from "react";
import Context from "../context/contex";
import "../style/card.css"

function Card(props) {
  const { setModalContent, setIsOpen, isOpen } = useContext(Context);

  function HandleCLick() {
    setIsOpen(!isOpen);

    setModalContent(props);
  }

  const STYLE_CARD = {
    height: props.inModal ? "180px" : "350px",
    borderRadius: props.inModal ? "25px" : "10px",
    minWidth: props.inModal ? "15%" : "30%",
    backgroundColor: props.color
  }

  return (
    <div
      id={props.id}
      className="card-box"
      style={STYLE_CARD}
      onClick={props.inModal ? null : HandleCLick}
    >
      <img
        className="card-icon"
        src={props.icon}
        alt="apenas 1 teste"
      />
      <h1
        className="card-title"
      >
        {props.name}  
      </h1>
    </div>
  )
}

export default Card;