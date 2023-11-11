import React from "react";
import Search from './components/search.jsx';
import Card from "./components/card.jsx";
import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <Search />
      </header>
      <main className="main-content">
        <Card name="teste1" icon={logo}/>
      </main>
    </div>
  );
}

export default App;
