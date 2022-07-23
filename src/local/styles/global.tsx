import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin:0 ;
    padding:0 ;
    box-sizing: border-box;
    
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size:  1.6rem;
    background-color: ${({ theme }) => theme.colors.black.background}
  }
  
`;
