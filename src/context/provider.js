import React, { useState } from "react";
import Context from "./contex";

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

  const MODAL_CONTENT = {
    modalContent,
    setModalContent,
    isOpen,
    setIsOpen
  }

  return (
    <Context.Provider value={ MODAL_CONTENT }>
      {children}
    </Context.Provider>
  )
}

export default ProviderHook;