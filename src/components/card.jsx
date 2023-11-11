import React, { useContext } from "react";
import Context from "../context/contex";
import "../style/card.css"

function Card(props) {
  const { setModalContent, setIsOpen, isOpen } = useContext(Context);

  function HandleCLick() {
    setIsOpen(!isOpen);

    setModalContent(props);
  }

  return (
    <div
      id={props.id}
      className="card-box"
      style={{backgroundColor: props.color}}
      onClick={HandleCLick}
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