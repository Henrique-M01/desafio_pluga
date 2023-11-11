import React from "react";
import "../style/card.css"

function Card(props) {
  return (
    <div className="card-box">
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