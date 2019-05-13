import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateDdmVisibility } from '../../actions'
import ArrowDown from '../atoms/ArrowDown'



export default function DropDownBtn({expanded, label, children, ...props}) {
  return (
    <React.Fragment>
      <Wrapper {...props}>
        <div style={{position: `relative`, padding: `0em 1.5em 0em 1em`}}>
          {label}
          <ArrowDown expanded={expanded} />
        </div>
      </Wrapper>
      {children}
    </React.Fragment>
  )
}



const Wrapper = styled.div`
  color: ${p => p.theme.colors.accent.main};
  display: inline-flex;
  align-items: center;
  height: ${props => props.theme.spacing.header || 'auto'};
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
  font-weight: 400;
`