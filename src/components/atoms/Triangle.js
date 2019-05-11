import styled from 'styled-components'

export default styled.div`
  width: 0;
  height: 0;
  border-left: ${p => p.size || '16px'} solid transparent;
  border-right: ${p => p.size || '16px'} solid transparent;
  border-bottom: ${p => p.size || '16px'} solid ${p => p.color || 'inherit'};
`