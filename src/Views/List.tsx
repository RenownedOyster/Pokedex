import React, { useContext, useState } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import { AllPokemonResponseResults, PokemonAxiosResponse } from "../types";
import { MyContextData } from "../context/allPokemonContext";
import { kebabToUpperSentence } from "../utils/kebabToUpperSentence";
import "./List.css";

export const List = () => {
  const [selection, setSelection] = useState("");
  const navigate = useNavigate();
  const { allPokemon, loadingPokeball }: PokemonAxiosResponse =
    useContext(MyContextData);

  const handleSelect = (pokemonData: string): void => {
    const urlArr = pokemonData.split("/");
    console.log(pokemonData);
    navigate({
      pathname: "/details",
      search: createSearchParams({
        id: urlArr[urlArr.length - 2],
      }).toString(),
    });
  };
  return loadingPokeball || !allPokemon?.results ? (
    <h3>Loading Pokemon</h3>
  ) : (
    <>
      <h3>Search</h3>
      <input
        value={selection}
        onChange={(event) => setSelection(event.target.value)}
        placeholder="Search Pokemon"
      />
      <h3>Pokemon</h3>
      {allPokemon.results
        .filter(
          (pokemonData) =>
            pokemonData?.name && pokemonData.name.includes(selection)
        )
        .map((pokemon: AllPokemonResponseResults) => (
          <p
            className="pokemon"
            key={pokemon.name}
            onClick={() => handleSelect(pokemon?.url || "")}
          >
            {kebabToUpperSentence(pokemon.name)}
          </p>
        ))}
    </>
  );
};
