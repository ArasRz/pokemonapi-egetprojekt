import React, { useState } from 'react';
import Form from "./Form";

function PokemonApi() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  function fetchPokemonData() {
    fetch(`https://pokeapi.co/api/v2/${pokemonData}`)
      .then((response) => response.json())
      .then((data) => {
        setPokemonData(data);
      })
      .catch((e) => console.log(e));
  }

  

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
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
        <button className="btn" onClick={handleSearch}>
          Search
        </button>
      </div>

      {pokemonData && <Form pokemonData={pokemonData} />}
    </div>
  );
}

export default PokemonApi;

