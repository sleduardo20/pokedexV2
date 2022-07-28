/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
type Stats = {
  base_stat: number;
  stat: {
    name: string;
  };
};

type Types = {
  slot: number;
  type: {
    name: string;
  };
};

type Moves = {
  move: {
    name: string;
  };
};

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  stats: Stats[];
  types: Types[];
  moves: Moves[];
}

export interface ListPokemons {
  count: number;
  next: string;
  previous: string | null;
  results: [
    {
      name: string;
      url: string;
    }
  ];
}

export interface PokedexGateway {
  getPokemon: (id: number) => Promise<Pokemon>;
  getListPokemon: (params: string) => Promise<ListPokemons>;
}

export enum PokemonType {
  Rock = "rock",
  Ghost = "ghost",
  Steel = "steel",
  Water = "water",
  Grass = "grass",
  Psychic = "psychic",
  Ice = "ice",
  Dark = "dark",
  Fairy = "fairy",
  Normal = "normal",
  Fighting = "fighting",
  Flying = "flying",
  Poison = "poison",
  Ground = "ground",
  Bug = "bug",
  Fire = "fire",
  Electric = "electric",
  Dragon = "dragon",
}
