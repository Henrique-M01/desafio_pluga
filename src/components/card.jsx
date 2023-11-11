import React from "react";
import "../style/card.css"

function Card(props) {
  //const [link, setLink] = useContext(props.link);

  return (
    <div
      id={props.id}
      className="card-box"
      style={{backgroundColor: props.color}}
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