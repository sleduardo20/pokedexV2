import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  padding: 2.4rem 1.6rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Header = styled.header`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
`;

export const Logo = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;

  h1 {
    font-size: 1.6em;
  }
`;

export const LoadingMoreButton = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
  display: flex;
  justify-content: center;

  button {
    height: 4.6rem;
    width: 20rem;
    border-radius: 0.8rem;
    outline: none;
    border: none;
    background: ${({ theme }) => theme.colors.type.fighting};
    color: ${({ theme }) => theme.colors.black.lightGray};
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;

    :hover {
      filter: brightness(1.06);
    }
  }
`;

export const IconsOrder = styled.div`
  svg {
    :hover {
      cursor: pointer;
      fill: ${({ theme }) => theme.colors.type.dragon};
    }
  }

  > svg {
    margin-left: 1.6rem;
  }
`;
