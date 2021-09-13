import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./utils";
import { Pokemon } from "./types";

import InfoContainer from "./components/InfoContainer";

import "./app.css";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [total, setTotal] = useState<number>(0);
  const [moves, setMoves] = useState();
  const [result, setResult] = useState<string | number>("bulbasaur");

  useEffect(() => {
    fetchPokemon(result).then((res) => setPokemon(res));
  }, [result]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => res.json())
      .then((result) => setTotal(result.count));
  }, []);

  const buttonOnClick = (e: any) => {
    if (pokemon) {
      if (e.target.innerHTML.toLowerCase() === "previous") {
        setResult(pokemon.id - 1);
      } else if (e.target.innerHTML.toLowerCase() === "next") {
        setResult(pokemon.id + 1);
      }
    }
  };

  return (
    <div className="appRoot">
      <div>
        <button
          onClick={buttonOnClick}
          disabled={pokemon && pokemon.id <= 1 ? true : false}
        >
          Previous
        </button>
        <button
          onClick={buttonOnClick}
          disabled={pokemon && pokemon.id >= total ? true : false}
        >
          Next
        </button>
        {console.log(pokemon?.id)}
      </div>
      <InfoContainer pokemon={pokemon} />
    </div>
  );
};

export default App;
