import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    margin: 0;
    padding: 1rem 4rem;

    @media screen and (max-width: 800px) {
      padding: 1rem;
    }
  }

  a {
    color: black;
    text-decoration: none;
  }
`
