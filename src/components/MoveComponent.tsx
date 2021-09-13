import React, { useEffect, useState } from "react";

interface IProps {
  pokemonMove: string;
}

export const MoveComponent: React.FC<IProps> = ({ pokemonMove }) => {
  const [description, setDescription] = useState<string>("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/move/${pokemonMove}`)
      .then((res) => res.json())
      .then((result) => setDescription(result.effect_entries[0].effect));
  }, [pokemonMove]);

  return (
    <>
      <p>
        <b>{pokemonMove}</b>
      </p>
      <p>{description}</p>
    </>
  );
};
