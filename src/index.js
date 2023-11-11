import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProviderHook from "./context/provider.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProviderHook>
      <App />
    </ProviderHook>
  </React.StrictMode>
);
