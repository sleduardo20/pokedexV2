/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { pokedexService } from "../../application";
import { ListPokemons, Pokemon } from "../../models/PokemonType";

export const usePokemons = (loadingMore: number) => {
  const [loading, setLoading] = useState(true);

  const [params, setParams] = useState("?limit=25");
  const [listPokemons, setListPokemons] = useState<ListPokemons>(
    {} as ListPokemons
  );

  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const getListPokemons = async () => {
    setLoading(true);
    const newListPokemons = await pokedexService.getListPokemon(params);
    setParams(newListPokemons.next.slice(34));
    setListPokemons(newListPokemons);

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

    setPokemons([...pokemons, ...newPokemons]);

    setLoading(false);
  };

  useEffect(() => {
    getListPokemons();
  }, [loadingMore]);

  return { pokemons, loading };
};
