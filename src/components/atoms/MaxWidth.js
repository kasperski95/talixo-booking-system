import styled from 'styled-components'

export default styled.div`
  width: 100%;
  margin: 0em auto;
  position: relative;

  @media (min-width: ${[p => p.theme.breakpoints.lg]}) {
    max-width: ${p => p.theme.spacing.maxWidth};
  }
`