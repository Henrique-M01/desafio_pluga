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
  const [wordFilter, setWordFilter] = useState('');
  const [hasError, setHasError] = useState(false);

  getJSONTools()
    .then((data) => setTools(data))
    .catch((_error) => setHasError(true));

  const CONTENT = {
    hasError,
    modalContent,
    setModalContent,
    isOpen,
    setIsOpen,
    page,
    setPage,
    tools,
    lastToolsOpen,
    setLastToolsOpen,
    wordFilter,
    setWordFilter
  }

  return (
    <Context.Provider value={ CONTENT }>
      {children}
    </Context.Provider>
  )
}

export default ProviderHook;