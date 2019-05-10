import { createGlobalStyle } from 'styled-components'

const Style = createGlobalStyle`
  * {
    font-family: 'Open Sans', sans-serif;
  }
  
  html {
    background-color: ${props => props.theme.colors.base.bg.dark};
  }
`

export default Style;