import React from 'react'

function Form({ pokemonData }) {
  return (
    <div>
      <h2>Pokemon Data:</h2>
      <div>
        <label>Ability:</label>
        <input type="text" value={pokemonData.abilities} />

        <label>ID:</label>
        <input type="text" value={pokemonData.id} />

        <label>Name:</label>
        <input type="text" value={pokemonData.name} />

        <label>Image:</label>
        <img src={pokemonData.image} alt={pokemonData.name} />

        <label>HP:</label>
        <input type="text" value={pokemonData.hp} />

        <label>Type:</label>
        <input type="text" value={pokemonData.type} />
      </div>
    </div>
  );
}

export default Form;

      
 
