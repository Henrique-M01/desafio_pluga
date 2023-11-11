import React, { useEffect, useState } from "react";
import Card from "./card.jsx";
import Modal from "./modal.jsx";
import { getJSONTools } from "../helpers/getData.js";
import '../style/main.css';


function Main() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    getJSONTools().then((data) => setTools(data));
  }, [])

  return (
    <main className="main-content">
      {tools.map((tool) => (
        <Card
          name={tool.name}
          icon={tool.icon}
          link={tool.link}
          color={tool.color}
          id={tool.app_id}
          key={tool.app_id}
        />
      ))}
      <Modal />
    </main>
  )
}

export default Main;