export interface AllPokemonResponse {
  count?: number;
  next?: null;
  previous?: null;
  results?: AllPokemonResponseResults[];
}

export interface AllPokemonResponseResults {
  name?: string;
  url?: string;
}

export interface PokemonAxiosResponse {
  allPokemon: AllPokemonResponse | undefined;
  loadingPokeball: boolean | undefined;
  error: boolean | undefined;
}
