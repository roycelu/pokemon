import React, { useEffect, useState } from "react";
import { Pokemon } from "../types";

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className="infoContainer">
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <h1>{pokemon.name.toUpperCase()}</h1>
        <h2>Types</h2>
        <p>
          {pokemon.types.map((type: any) => (
            <span> [ {type.type.name} ] </span>
          ))}
        </p>
        <h2>Moves</h2>
        {pokemon.moves.map((move) => (
          <p>{move.move.name}</p>
        ))}
      </div>
    );
  }
  return null;
};
export default InfoContainer;
