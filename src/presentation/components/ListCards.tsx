/* eslint-disable no-use-before-define */
import styled from "styled-components";
import media from "styled-media-query";
import { PokemonType } from "../../models/PokemonType";
import { Card } from "./Card";

type PropCard = {
  id: number;
  name: string;
  urlImage: string;
  type: PokemonType;
};

type Props = {
  cards: PropCard[];
};

export function ListCards({ cards }: Props) {
  return (
    <Container>
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Container>
  );
}

const Container = styled.article`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: space-between;
  row-gap: 4rem;
  column-gap: 7.6rem;

  ${media.lessThan("large")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0;
    align-items: stretch;
    
  `};

  ${media.lessThan("medium")`
  grid-template-columns: repeat(2, 1fr);
  `};

  ${media.lessThan("small")`
  grid-template-columns: 1fr;
  align-self: center;
  `};
`;
