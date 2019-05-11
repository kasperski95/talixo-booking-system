import styled from 'styled-components'

export default styled.div`
  width: 1em;
  height: 1em;
  background: url('/img/icons/arrows.svg') no-repeat;
  background-position: ${p => p.dir || 'left'} center;
  background-size: cover;
`