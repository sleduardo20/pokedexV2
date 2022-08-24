import { useParams } from "react-router-dom";
import { PokemonType } from "../../../models/PokemonType";
import { IconArrowLeft } from "../../components/Icons";
import { Container } from "./styles";
import { pokemonMock } from "../../../mocks/pokemon";
import { usePokedex } from "../../contexts/usePokedex";

export function Details() {
  const { name } = useParams();
  const { pokemons } = usePokedex();

  const pokemonDetails = pokemons.filter((p) => p.name === name)[0];

  const backgrondTypeColor = pokemonDetails.types[0].type.name as PokemonType;

  const currentPokemon = pokemons.indexOf(pokemonDetails);

  const nextPokemon = pokemons.filter(
    (_, index) => index === currentPokemon + 1
  )[0];

  const previousPokemon = pokemons.filter(
    (_, index) => index === currentPokemon - 1
  )[0];

  console.log({ pokemons, pokemonDetails, nextPokemon, previousPokemon });
  return (
    <Container background={backgrondTypeColor}>
      <header>
        <IconArrowLeft />
        <strong>{pokemonDetails.name}</strong>
        <span>#{pokemonDetails.id}</span>
      </header>
      <main>
        <picture>
          <img
            src={`${pokemonDetails.sprites.other.dream_world.front_default}`}
            alt={pokemonDetails.name}
          />
        </picture>
      </main>
      <article>details</article>
    </Container>
  );
}
