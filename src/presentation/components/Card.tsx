import { Link } from "react-router-dom";
import styled from "styled-components";
import { PokemonType } from "../../models/PokemonType";

type Props = {
  id: number;
  name: string;
  urlImage: string;
  type: PokemonType;
};

export function Card({ id, name, type, urlImage }: Props) {
  return (
    <Container typePokemon={type}>
      <Link to={`details/${name}`}>
        <Content>
          <picture>
            <img src={urlImage} alt={name} />
          </picture>
          <span>#{id}</span>
        </Content>
        <h2>{name}</h2>
      </Link>
    </Container>
  );
}

const Container = styled.div<{ typePokemon: PokemonType }>`
  text-align: center;
  cursor: pointer;
  width: 23.2rem;
  padding: 0.4rem 0.4rem 0.4rem;
  height: 24.8rem;
  border-radius: 0.8rem;
  background-color: ${({ theme, typePokemon }) =>
    theme.colors.type[typePokemon]};

  a {
    text-decoration: none;
  }

  span {
    font-size: 1.8rem;
    margin: 0.8rem 0 0 0;
    align-self: flex-start;
    color: ${({ theme, typePokemon }) => theme.colors.type[typePokemon]};
  }

  h2 {
    margin-top: 1.6rem;
    font-weight: 400;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.black.white};
  }
`;

const Content = styled.div`
  display: flex;
  padding: 0 0.4rem;
  max-width: 32rem;
  height: 18.8rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${({ theme }) => theme.colors.black.white};

  picture {
    padding: 0.4rem;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
