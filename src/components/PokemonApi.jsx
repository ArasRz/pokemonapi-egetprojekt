import React, { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";

// This is called smart component or stateful component
function PokemonApi() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchPokemonData = async () => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${searchValue}`
    );
    const data = await response.json();
    setPokemonData([data]);
  };

  const handleSearch = () => {
    fetchPokemonData();
  };

  const handleChange = (e) => {
    const getValue = e.target.value;
    setSearchValue(getValue);
  };

  return (
    <div>
      <div className="input">
        <input type="text" value={searchValue} onChange={handleChange} />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>
      {pokemonData.length > 0 &&
        pokemonData.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemonData={pokemon} />;
        })}
    </div>
  );
}

export default PokemonApi;
