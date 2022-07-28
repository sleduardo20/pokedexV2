/* eslint-disable no-return-await */
import axios from "axios";
import { ListPokemons, PokedexGateway, Pokemon } from "../models/PokemonType";

export class HTTPPokedexGateway implements PokedexGateway {
  private BASE_URL = process.env.REACT_APP_API;

  private API = axios.create({
    baseURL: this.BASE_URL,
  });

  async getPokemon(id: number) {
    const { data: pokemon } = await this.API.get<Pokemon>(`/${id}`);

    return Promise.resolve(pokemon);
  }

  async getListPokemon(params: string) {
    const { data: listPokemon } = await this.API.get<ListPokemons>(
      `/${params}`
    );

    return Promise.resolve(listPokemon);
  }
}
