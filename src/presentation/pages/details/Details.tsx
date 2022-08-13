import { Pokemon, PokemonType } from "../../../models/PokemonType";
import { Container } from "./styles";

export function Details({
  id,
  height,
  name,
  sprites,
  moves,
  stats,
  types,
  weight,
}: Pokemon) {
  return (
    <Container background={PokemonType.Bug}>
      <h3>details</h3>
    </Container>
  );
}
