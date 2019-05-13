import styled from 'styled-components'
import React from 'react'

export default function({up, down, left, right, ...props}) {
  if (down) return <Down {...props} />

  return <Up {...props} />
}


const Up = styled.div`
  width: 0;
  height: 0;
  border-left: ${p => p.size || '16px'} solid transparent;
  border-right: ${p => p.size || '16px'} solid transparent;
  border-bottom: ${p => p.size || '16px'} solid ${p => p.color || 'inherit'};
`

const Down = styled.div`
  width: 0;
  height: 0;
  border-left: ${p => p.size || '16px'} solid transparent;
  border-right: ${p => p.size || '16px'} solid transparent;
  border-top: ${p => p.size || '16px'} solid ${p => p.color || 'inherit'};
`