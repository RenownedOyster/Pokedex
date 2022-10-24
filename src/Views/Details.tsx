import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  IndividualPokemonResponse,
  Characteristics,
  Stat,
  Ability,
  Type,
} from "../types";
import axios from "axios";

export const Details = () => {
  const [pokemon, setPokemon] = useState<IndividualPokemonResponse | undefined>(
    undefined
  );
  const [pokemonCharacteristics, setPokemonCharacteristics] = useState<
    Characteristics | undefined
  >(undefined);
  const [loadingPokeball, setLoadingPokeball] = useState(true);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchPokemonGoodness = async (id: string) => {
    try {
      const { data: response } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}/`
      );
      setPokemon(response);

      const { data: characteristics } = await axios.get(
        `https://pokeapi.co/api/v2/characteristic/${id}/`
      );
      setPokemonCharacteristics(characteristics);
    } catch (error) {
      console.error(error);
    }
    setLoadingPokeball(false);
  };

  useEffect(() => {
    if (id) {
      fetchPokemonGoodness(id);
    }
  }, [id]);

  return !loadingPokeball && pokemon ? (
    <>
      <Link to="/">Back</Link>
      <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
      <img
        src={pokemon.sprites.front_shiny || pokemon.sprites.front_default}
        alt="pokemon"
      />

      <h3>Description</h3>
      {pokemonCharacteristics ? (
        <p>{pokemonCharacteristics.descriptions[7].description}</p>
      ) : (
        <p>Oh no, no description avaliable</p>
      )}
      <h3>Stats</h3>
      {pokemon.stats.map((stat: Stat, index) => (
        <p
          key={`${stat.stat.name}${index}`}
        >{`${stat.stat.name}: ${stat.base_stat}`}</p>
      ))}
      <h3>Abilities</h3>
      {pokemon.abilities.map((ability: Ability, index) => (
        <p
          key={`${ability.ability.name}${index}`}
        >{`${ability.ability.name}`}</p>
      ))}
      <h3>Types</h3>
      {pokemon.types.map((type: Type, index) => (
        <p key={`${type.type.name}${index}`}>{`${type.type.name}`}</p>
      ))}
    </>
  ) : (
    <h2>Loading</h2>
  );
};
