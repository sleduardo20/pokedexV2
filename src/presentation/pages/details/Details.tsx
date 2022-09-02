import { useParams, useNavigate } from "react-router-dom";
import { PokemonType } from "../../../models/PokemonType";
import { IconArrowLeft, IconWeight } from "../../components/Icons";
import {
  Container,
  Divider,
  Feature,
  Features,
  InfoDetails,
  TagType,
} from "./styles";
import { usePokedex } from "../../contexts/usePokedex";
import { Wrapper } from "../../components/Wrapper";

export function Details() {
  const { name } = useParams();
  const { pokemons } = usePokedex();
  const navigate = useNavigate();

  const pokemonDetails = pokemons.filter((p) => p.name === name)[0];

  const backgrondTypeColor = pokemonDetails.types[0].type.name as PokemonType;

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
        <InfoDetails
          typeColor={pokemonDetails.types[0].type.name as PokemonType}
        >
          <section>
            {pokemonDetails.types.map(({ type }) => (
              <TagType key={type.name} background={type.name as PokemonType}>
                {type.name}
              </TagType>
            ))}
          </section>

          <h3>About</h3>

          <Features>
            <Feature>
              <strong>
                <IconWeight size={24} /> {pokemonDetails.weight}{" "}
              </strong>
              <span>Weight</span>
            </Feature>
            <Divider />
            <Feature>
              <strong>
                <IconWeight size={24} /> {pokemonDetails.weight}{" "}
              </strong>
              <span>Height</span>
            </Feature>
            <Divider />
            <Feature>
              <small>
                {pokemonDetails.moves[0].move.name}
                {pokemonDetails.moves[1].move.name}
              </small>

              <span>Moves</span>
            </Feature>
          </Features>
        </InfoDetails>
      </Container>
    </Wrapper>
  );
}
