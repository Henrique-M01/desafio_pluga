import React from "react";
import Card from "./card.jsx";
import logo from '../logo.svg';

function Main() {
  return (
    <main className="main-content">
      <Card name="teste1" icon={logo}/>
    </main>
  )
}

export default Main;