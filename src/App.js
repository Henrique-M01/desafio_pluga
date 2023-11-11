import React from "react";
import Search from './components/search.jsx';
import Main from './components/main.jsx';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Search />
      </header>
      <Main />
    </div>
  );
}

export default App;
