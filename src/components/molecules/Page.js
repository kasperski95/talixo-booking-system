import MaxWidth from '../atoms/MaxWidth'
import styled from 'styled-components'

export default styled(MaxWidth)`
  background-color: ${p => p.theme.colors.primary.bg.dark};
  padding: ${p => p.theme.spacing.gutters[0]};
  box-sizing: border-box;

  @media (min-width: ${p => p.theme.breakpoints.md}) {
    padding: ${p => p.theme.spacing.gutters[3]} 10%;
    background-color: ${p => p.theme.colors.primary.bg.main};
  }

  @media (min-width: ${p => p.theme.breakpoints.lg}) {
    padding: ${p => p.theme.spacing.gutters[5]} ${p => p.theme.spacing.gutters[5]};
  }
`