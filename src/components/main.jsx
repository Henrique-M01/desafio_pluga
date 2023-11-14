import React, { useContext, useEffect } from "react";
import Card from "./card.jsx";
import Modal from "./modal.jsx";
import Context from "../context/contex.js";
import Footer from "./footer.jsx";
import Error from "./error.jsx";
import '../style/main.css';

function Main() {
  const { 
    tools,
    page,
    setPage,
    setLastToolsOpen,
    lastToolsOpen,
    wordFilter,
    hasError
   } = useContext(Context);

  function validateSetPage(newPage) {
    if (newPage >= 1 && newPage <= Math.ceil(tools.length / 12)) {
      setPage(newPage);
    }
  }

  useEffect(() => {
    let lastTools = JSON.parse(localStorage.getItem("lastToolsOpen"));

    if (!lastTools) {
      localStorage.setItem("lastToolsOpen", JSON.stringify([]));
    } else if (JSON.stringify(lastTools) !== JSON.stringify(lastToolsOpen)) {
      setLastToolsOpen(lastTools);
    }// eslint-disable-next-line
  },[wordFilter]);

  if (!hasError)  {
    return (
      <> 
        <main className="main-content">
          {
            tools.filter((tool) => {
              if (wordFilter !== '') {
                return tool.name.toUpperCase().includes(wordFilter.toUpperCase());
              } else  {
                return tool;
              }
            })
            .map((tool, index) => {
              const pageLimit = 12 * page;
  
              if (index < pageLimit && index >= pageLimit-12) {
                return (
                  <Card
                    name={tool.name}
                    icon={tool.icon}
                    link={tool.link}
                    color={tool.color}
                    id={tool.app_id}
                    key={tool.app_id}
                    inModal={false}
                  />
                )
              }
  
              return null;
            })
          }
        </main>
        <Footer page={page} setPage={validateSetPage} />
        <Modal />
      </>
    )
  } else {
    return <Error />
  }
  
}

export default Main;