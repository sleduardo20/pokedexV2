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

    span {
      font-size: 2.2rem;
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
`;

export const InfoDetails = styled.article<{ typeColor: PokemonType }>`
  margin-top: -10rem;
  z-index: 1;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  padding: 7rem 2rem 2rem;
  color: ${({ theme, typeColor }) => theme.colors.type[typeColor]};
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black.white};

  section:first-of-type {
    margin-top: 6rem;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.6rem 0;
  }
`;

export const TagType = styled.span<{ background: PokemonType }>`
  background-color: ${({ theme, background }) => theme.colors.type[background]};
  color: ${({ theme }) => theme.colors.black.white};
  font-weight: 500;
  text-transform: capitalize;
  border-radius: 1.2rem;
  padding: 0.2rem 1.6rem;

  & + & {
    margin-left: 2rem;
  }
`;

export const Features = styled.div`
  margin: 2.8rem 0;
  display: flex;
  gap: 1.6rem;
  align-items: center;
  justify-content: center;
`;

export const Feature = styled.div`
  color: ${({ theme }) => theme.colors.black.darkGray};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  small {
    font-weight: 800;
    display: flex;
    align-items: space-between;
    justify-content: center;
    flex-direction: column;
  }

  strong {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.8rem;
    }
  }
`;

export const Divider = styled.div`
  width: 0.2rem;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.black.lightGray};
`;
