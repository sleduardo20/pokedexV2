import { rest } from "msw";
import { setupServer } from "msw/node";
import { listPokeomonMock, pokemonMock } from "../../mocks/pokemon";
import { ListPokemons, Pokemon } from "../../models/PokemonType";

import { pokedexService } from "../UseServices";

const handles = [
  rest.get("**pokemon/pikachu", (_, res, ctx) => {
    return res(ctx.json(pokemonMock as Pokemon));
  }),
  rest.get("**pokemon/?limit=25", (_, res, ctx) => {
    return res(ctx.json(listPokeomonMock as ListPokemons));
  }),
];

const server = setupServer(...handles);

describe("PokedexGateway", () => {
  beforeEach(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should be able get pokemons list and pokemons", async () => {
    const resultPokemon = await pokedexService.getPokemon("pikachu");

    const resultListPokemon = await pokedexService.getListPokemon("?limit=25");

    expect(resultPokemon).toEqual(pokemonMock);
    expect(resultListPokemon).toEqual(listPokeomonMock);
  });
});
