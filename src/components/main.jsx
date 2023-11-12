import React, { useContext } from "react";
import Card from "./card.jsx";
import Modal from "./modal.jsx";
import Context from "../context/contex.js";
import Footer from "./footer.jsx";
import '../style/main.css';


function Main() {
  const { tools, page, setPage } = useContext(Context);

  function validateSetPage(newPage) {
    if (newPage >= 1 && newPage <= tools.length) {
      setPage(newPage);
    }
  }

  return (
    <>  
      <main className="main-content">
        {tools.map((toolGroup, index) => {
          if (index < page && index >= page-1) {
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
      </main>
      <Footer page={page} setPage={validateSetPage} />
      <Modal />
    </>
  )
}

export default Main;