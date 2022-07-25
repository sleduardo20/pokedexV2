/* eslint-disable no-use-before-define */
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
      <Content>
        <picture>
          <img src={urlImage} alt={name} />
        </picture>
        <span>#{id}</span>
      </Content>
      <h2>{name}</h2>
    </Container>
  );
}

const Container = styled.div<{ typePokemon: PokemonType }>`
  text-align: center;
  width: 32.8rem;
  padding: 0.4rem 0.4rem 0.4rem;
  height: 36rem;
  border-radius: 0.8rem;
  background-color: ${({ theme, typePokemon }) =>
    theme.colors.type[typePokemon]};

  span {
    font-size: 2.4rem;
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
  height: 28rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem 0.4rem 0 0;
  background-color: ${({ theme }) => theme.colors.black.white};
`;
