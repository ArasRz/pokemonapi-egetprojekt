import React from "react";




function PokemonCard({ pokemonData }) {
  const pokemonName = pokemonData.name;
  const pokemonAbilities = pokemonData.abilities.map(
    (ability) => ability.ability.name
  );
  const pokemonId = pokemonData.id;
  const pokemonImg = pokemonData.sprites.front_default;
  const pokemonHp = pokemonData?.stats?.[0].base_stat;
  const pokemonType = pokemonData.types
    .map((type) => type.type.name)
    .join(", ");



  return (
    <div className="form-content">
      <h2>Pokemon Data:</h2>
      <div>
        <p>
          <strong>Name:</strong> {pokemonName}
        </p>
        <p>
          <strong>Ability:</strong> {pokemonAbilities.join(", ")}
        </p>
        <p>
          <strong>ID:</strong> {pokemonId}
        </p>
        <p>
          <strong>Image:</strong>
          <img src={pokemonImg} alt={pokemonName} />
        </p>
        <p>
          <strong>HP:</strong> {pokemonHp}
        </p>
        <p>
          <strong>Type:</strong> {pokemonType}
        </p>
      </div>
    </div>
  );
}

export default PokemonCard;

