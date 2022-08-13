import { useEffect, useState } from "react";
import { pokedexService } from "../../application";
import { Pokemon } from "../../models/PokemonType";

export const usePokemons = (loadingMore: number) => {
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useState("?limit=25");

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

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

  return { pokemons, loading };
};
