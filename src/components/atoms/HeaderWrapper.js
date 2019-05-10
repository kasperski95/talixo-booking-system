import styled from 'styled-components'

export default styled.header`
  width: 100%;
  height: 2.25em;
  background-color: ${props => props.theme.colors.primary.bg.main};
  display: flex;
  align-items: center;
`;