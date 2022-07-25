import { PokedexGateway } from "../models/PokemonType";

export class PokedexService {
  private gateway: PokedexGateway;

  constructor(gateway: PokedexGateway) {
    this.gateway = gateway;
  }

  async getPokemon(name: string) {
    return this.gateway.getPokemon(name);
  }
}
