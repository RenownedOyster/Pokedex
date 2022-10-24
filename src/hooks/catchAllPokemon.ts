import { useEffect, useState } from "react";
import axios from "axios";

const useCatchAllPokemon = () => {
  const [allPokemon, setAllPokemon] = useState({});
  const [loadingPokeball, setLoadingPokeball] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
        );
        setAllPokemon(response);
      } catch (error) {
        console.error(error);
      }
      setLoadingPokeball(false);
    };

    fetchData();
  }, []);

  return {
    allPokemon,
    loadingPokeball,
    error: false,
  };
};

export default useCatchAllPokemon;
