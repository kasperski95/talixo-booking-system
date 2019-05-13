import styled from 'styled-components'

export default styled.input.attrs(p => ({
  type: 'submit'
}))`
  font-size: 1.625em;
  width: 100%;
  padding: 0.5em;
  box-sizing: border-box;
  color: ${p => p.theme.colors.primary.txt.main};
  background-color: ${p => p.theme.colors.accent.main};
  border-radius: calc(${p => p.theme.spacing.rounding} / 1.625);
  border: none;

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {
    width: 12.5em;
  }
`