import { PokedexGateway } from "../models/PokemonType";

export class PokedexService {
  private gateway: PokedexGateway;

  constructor(gateway: PokedexGateway) {
    this.gateway = gateway;
  }

  async getPokemon(id: number) {
    return this.gateway.getPokemon(id);
  }

  async getListPokemon(params: string) {
    return this.gateway.getListPokemon(params);
  }
}
