import { HTTPPokedexGateway } from "../infrastructure/PokedexGateway";
import { PokedexService } from "./PokedexServices";

const pokedexGateway = new HTTPPokedexGateway();
const pokedexService = new PokedexService(pokedexGateway);

export { pokedexService };
