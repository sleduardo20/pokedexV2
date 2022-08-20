import { ListPokemons, Pokemon } from "../models/PokemonType";

const pokemonMock = {
  id: 1,
  height: 7,
  moves: [
    {
      move: {
        name: "razor-wind",
      },
    },
  ],
  name: "pikachu",
  sprites: {
    other: {
      dream_world: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg",
        front_female: null,
      },
    },
  },
  stats: [
    {
      base_stat: 45,

      stat: {
        name: "hp",
      },
    },
  ],
  types: [
    {
      slot: 1,
      type: {
        name: "grass",
      },
    },
  ],
  weight: 69,
} as Pokemon;

const listPokeomonMock = {
  count: 1,
  next: "",
  previous: "",
  results: [
    {
      name: "pikachu",
      url: "https://pokeapi.co/api/v2/pikachu",
    },
  ],
} as ListPokemons;

export { pokemonMock, listPokeomonMock };
