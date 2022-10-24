import React, { createContext } from "react";
import useCatchAllPokemon from "../hooks/catchAllPokemon";
import { PokemonAxiosResponse } from "../types";

export const MyContextData = createContext({
  allPokemon: {},
  loadingPokeball: true,
  error: false,
});

export const AllPokemonContext = (props: any) => {
  const { allPokemon, loadingPokeball, error }: PokemonAxiosResponse =
    useCatchAllPokemon();

  return (
    <MyContextData.Provider value={{ allPokemon, loadingPokeball, error }}>
      {props.children}
    </MyContextData.Provider>
  );
};
