/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable no-undef */
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { pokedexService } from "../../application";
import { Pokemon } from "../../models/PokemonType";

type DataContext = {
  pokemons: Pokemon[];
  loading: boolean;
  fetchPokemon: () => void;
};

const PokedexContext = createContext({} as DataContext);

type ProviderProps = {
  children: React.ReactNode;
};

export function PokedexProvider({ children }: ProviderProps) {
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState("?limit=25");
  const [loadingMore, setLoadingMore] = useState(0);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemon = () => setLoadingMore((state) => state + 1);

  const getListPokemons = async () => {
    setLoading(true);

    const newListPokemons = await pokedexService.getListPokemon(params);

    setParams(newListPokemons.next.slice(34));

    const newPokemons: Pokemon[] = [];
    const promisePokemon = newListPokemons.results.map(async (result) => {
      try {
        const newPokemon = await pokedexService.getPokemon(result.name);
        newPokemons.push(newPokemon);
      } catch (error) {
        console.log(error);
      }
    });

    await Promise.all(promisePokemon);

    const DELAY = 1000;

    setTimeout(() => {
      setPokemons([...pokemons, ...newPokemons]);
      setLoading(false);
    }, DELAY);
  };

  useEffect(() => {
    getListPokemons();
  }, [loadingMore]);

  return (
    <PokedexContext.Provider value={{ loading, pokemons, fetchPokemon }}>
      {children}
    </PokedexContext.Provider>
  );
}

export const usePokedex = () => useContext(PokedexContext);
