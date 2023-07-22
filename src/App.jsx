import React from "react";
import PokemonApi from "./components/PokemonApi";
import "./components/style.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>Pokemon</h1>
        <PokemonApi />
      </div>
    </>
  );
}

export default App;
