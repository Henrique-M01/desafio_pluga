import React, { useState } from "react";
import Context from "./contex";
import { getJSONTools } from "../helpers/getData.js";

const DEFAULT_VALUE_MODAL = {
  icon: '',
  name: '',
  link: '',
  app_id: '',
  color: ''
}

function ProviderHook({ children }) {
  const [modalContent, setModalContent] = useState(DEFAULT_VALUE_MODAL);
  const [isOpen, setIsOpen] = useState(false);
  const [tools,setTools] = useState([]);
  const [page, setPage] = useState(1);
  const [lastToolsOpen, setLastToolsOpen] = useState([]);

  getJSONTools().then((data) => setTools(data));

  const CONTENT = {
    modalContent,
    setModalContent,
    isOpen,
    setIsOpen,
    page,
    setPage,
    tools,
    lastToolsOpen,
    setLastToolsOpen
  }

  return (
    <Context.Provider value={ CONTENT }>
      {children}
    </Context.Provider>
  )
}

export default ProviderHook;