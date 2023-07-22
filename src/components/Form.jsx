import React from "react";

function Form({ pokemonData }) {
  return (
    <div>
      <h2>Pokemon Data:</h2>
      <div>
        <label>Ability:</label>
        <input type="text" value={pokemonData.abilities} readOnly />
        <br />
        <label>ID:</label>
        <input type="text" value={pokemonData.id} readOnly />
        <br />
        <label>Name:</label>
        <input type="text" value={pokemonData.name} readOnly />
        <br />
        <label>Image:</label>
        <img src={pokemonData.image} alt={pokemonData.name} readOnly />
        <br />
        <label>HP:</label>
        <input type="text" value={pokemonData.hp} readOnly />
        <br />
        <label>Type:</label>
        <input type="text" value={pokemonData.type} readOnly />
      </div>
    </div>
  );
}

export default Form;
