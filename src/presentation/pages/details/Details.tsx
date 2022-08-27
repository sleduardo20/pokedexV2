import { useParams, useNavigate } from "react-router-dom";

import { PokemonType } from "../../../models/PokemonType";
import { IconArrowLeft } from "../../components/Icons";
import { Container } from "./styles";
import { usePokedex } from "../../contexts/usePokedex";
import { Wrapper } from "../../components/Wrapper";

export function Details() {
  const { name } = useParams();
  const { pokemons } = usePokedex();
  const navigate = useNavigate();

  const pokemonDetails = pokemons.filter((p) => p.name === name)[0];

  const backgrondTypeColor = pokemonDetails.types[0].type.name as PokemonType;

  const currentPokemon = pokemons.indexOf(pokemonDetails);

  const nextPokemon = pokemons.filter(
    (_, index) => index === currentPokemon + 1
  )[0];

  const previousPokemon = pokemons.filter(
    (_, index) => index === currentPokemon - 1
  )[0];

  return (
    <Wrapper>
      <Container background={backgrondTypeColor}>
        <header>
          <IconArrowLeft size={24} onClick={() => navigate(-1)} />
          <strong>{pokemonDetails.name}</strong>
          <span>#{pokemonDetails.id}</span>
        </header>
        <main>
          <figure>
            <img
              src={`${pokemonDetails.sprites.other.dream_world.front_default}`}
              alt={pokemonDetails.name}
            />
          </figure>
        </main>
        <article>details</article>
      </Container>
    </Wrapper>
  );
}
