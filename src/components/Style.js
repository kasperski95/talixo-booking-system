import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  
  html {
    background-color: ${props => props.theme.colors.base.bg.dark};
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 300;
  }
`

export default Style;