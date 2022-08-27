import styled from "styled-components";
import { PokemonType } from "../../../models/PokemonType";

export const Container = styled.div<{ background: PokemonType }>`
  margin: 4rem 1.6rem;
  padding: 0.8rem;
  background-color: ${({ theme, background }) => theme.colors.type[background]};
  height: 84rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.black.white};

    svg {
      cursor: pointer;
    }

    strong {
      text-transform: capitalize;
      font-size: 2.8rem;
      font-weight: 500;
    }
  }

  main {
    margin-top: 8rem;
    z-index: 10;

    figure {
      width: 30rem;
      height: 27.2rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
    }
  }

  article {
    margin-top: -4rem;
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 1rem;

    background-color: ${({ theme }) => theme.colors.black.white};
  }
`;
