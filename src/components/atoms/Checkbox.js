import React from 'react'
import styled from 'styled-components'


export default function({children, style, active, checked, ...props}) {
  return (
    <Wrapper {...props}>
      <CheckboxWrapper>
        <Checkbox active={active} checked={checked} />
      </CheckboxWrapper>
      <Label>
        {children}
      </Label>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
`

const CheckboxWrapper = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: -0.25em;
`

const Checkbox = styled.div`
  width: 1em;
  height: 1em;
  border: 2px solid ${p => p.theme.colors.accent.main};
  padding: ${p => p.theme.spacing.gutters[0]};
  margin: 0.25em;
  box-sizing: border-box; 
  background-color: white;
  background-image: url('/img/icons/check.svg');
  background-position: ${p => (p.active || p.checked)? 'center center' : '9999px center'};
  background-size: contain;
  background-repeat: no-repeat;
`

const Label = styled.span`
  cursor: pointer;
  white-space: nowrap;
  padding-left: ${p => p.theme.spacing.gutters[0]};
`
