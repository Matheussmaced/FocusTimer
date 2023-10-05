import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    background-color: ${(props) => props.theme['gray-900']};
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px #333;
  }
`
