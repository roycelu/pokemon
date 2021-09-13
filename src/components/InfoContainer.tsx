import React, { useEffect, useState } from "react";
import { Pokemon } from "../types";
import { MoveComponent } from "./MoveComponent";

interface Props {
  pokemon?: Pokemon;
}

const InfoContainer: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    return (
      <div className="infoContainer">
        <h1>{pokemon.name.toUpperCase()}</h1>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`${pokemon.name} illustration`}
        />
        <h2>Types</h2>
        <p>
          {pokemon.types.map((type: any) => (
            <span> [ {type.type.name} ] </span>
          ))}
        </p>
        <h2>Moves</h2>
        <MoveComponent pokemonMove={pokemon.moves[0].move.name} />
        <MoveComponent pokemonMove={pokemon.moves[1].move.name} />
      </div>
    );
  }
  return null;
};
export default InfoContainer;
