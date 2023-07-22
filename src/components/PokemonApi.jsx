import React, { useState } from 'react'
import Form from "./Form"

function PokemonApi() {
    const [pokemonData, setPokemonData] = useState();
    const [searchValue, setSearchValue] = useState();
  
    function fetchPokemonData(pokemonData) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonData}`)
        .then((response) => response.json())
        .then((data) => {
          setPokemonData(data);
        })
        .catch((e) => console.log(e));
    }
  
    const handleSearch = (e) => {
      fetchPokemonData(searchValue);
    };
  
    const handleChange = (e) => {
      setSearchValue(e.target.value);
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
  )
}

export default PokemonApi
