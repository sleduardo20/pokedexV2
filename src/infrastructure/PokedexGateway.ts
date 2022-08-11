import axios from "axios";
import { ListPokemons, PokedexGateway, Pokemon } from "../models/PokemonType";

export class HTTPPokedexGateway implements PokedexGateway {
  private BASE_URL = process.env.REACT_APP_API;

  private API = axios.create({
    baseURL: this.BASE_URL,
  });

  async getPokemon(name: string) {
    const { data: pokemon } = await this.API.get<Pokemon>(`/${name}`);

    return Promise.resolve(pokemon);
  }

  async getListPokemon(params: string) {
    const { data: listPokemon } = await this.API.get<ListPokemons>(
      `/${params}`
    );

    return Promise.resolve(listPokemon);
  }
}
