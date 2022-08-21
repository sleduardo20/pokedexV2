import { Pokemon, PokemonType } from "../../../models/PokemonType";
import { IconArrowLeft } from "../../components/Icons";
import { Container } from "./styles";
import { pokemonMock } from "../../../mocks/pokemon";

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
      <header>
        <IconArrowLeft />
        <strong>{pokemonMock.name}</strong>
        <span>#{pokemonMock.id}</span>
      </header>
      <main>
        <picture>
          <img
            src={`${pokemonMock.sprites.other.dream_world}`}
            alt={pokemonMock.name}
          />
        </picture>
      </main>
      <article>details</article>
    </Container>
  );
}
