import { useEffect, useState } from "react";
import axios from "axios";

const useCatchSinglePokemon = (pokemonUrl: string) => {
  const [pokemon, setPokemon] = useState({});
  const [loadingPokeball, setLoadingPokeball] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(pokemonUrl);
        setPokemon(response);
      } catch (error) {
        console.error(error);
      }
      setLoadingPokeball(false);
    };

    fetchData();
  }, [pokemonUrl]);

  console.log(pokemon);

  return {
    pokemon,
    loadingPokeball,
  };
};

export default useCatchSinglePokemon;
