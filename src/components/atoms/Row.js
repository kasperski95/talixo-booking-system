import React from 'react'
import styled from 'styled-components'


export default function Row({children, ...props}) {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: flex;
  margin: 0.125em 0em;

  & > div {
    margin-right: 0.125em;
  }

  & > div:last-of-type {
    margin-right: 0;
  }
`