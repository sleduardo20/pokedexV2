import styled from "styled-components";
import { PokemonType } from "../../../models/PokemonType";

export const Container = styled.div<{ background: PokemonType }>`
  background-color: ${({ theme, background }) => theme.colors.type[background]};
`;
