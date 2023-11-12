import React, { useContext, useState } from "react";
import Card from "./card.jsx";
import Modal from "./modal.jsx";
import '../style/main.css';
import Context from "../context/contex.js";


function Main() {
  const { tools, page } = useContext(Context);
  const [lastPage, setLastPage] = useState(0);
  //const [page,setPage] = useState(1);


  return (
    <main className="main-content">
      {tools.map((toolGroup, index) => {
        if (index < page) {
          return toolGroup.map((tool) => (
            <Card
              name={tool.name}
              icon={tool.icon}
              link={tool.link}
              color={tool.color}
              id={tool.app_id}
              key={tool.app_id}
            />
          ))
        }

        return null;
      })}
      <Modal />
    </main>
  )
}

export default Main;