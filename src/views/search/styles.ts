import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  padding: 2.4rem 1.6rem 0;
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
