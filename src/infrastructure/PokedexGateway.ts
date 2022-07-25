/* eslint-disable no-return-await */
import axios from "axios";
import { PokedexGateway, Pokemon } from "../models/PokemonType";

export class HTTPPokedexGateway implements PokedexGateway {
  private DEFAULT_ROUTE = "https://pokeapi.co/api/v2/pokemon";

  private API = axios.create({
    baseURL: this.DEFAULT_ROUTE,
  });

  async getPokemon(name: string) {
    const { data: pokemon } = await this.API.get<Pokemon>(
      `${this.DEFAULT_ROUTE}/${name}`
    );

    return Promise.resolve(pokemon);
  }
}
