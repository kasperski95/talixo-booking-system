import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateDdmVisibility } from '../../actions'
import ArrowDown from '../atoms/ArrowDown'



function DropDownBtn(props) {
  return (
    <React.Fragment>
      <Wrapper
        onMouseOver={(e) => {props.updateDdmVisibility(true);}}
        onMouseLeave={(e) => {props.updateDdmVisibility(false);}}
      >
        <div style={{position: `relative`, paddingRight: `1.5em`}}>
          {props.label}
          <ArrowDown expanded={props.expanded} />
        </div>
      </Wrapper>
      {props.children}
    </React.Fragment>
  )
}



function mapDispatchToProps(dispatch) {
  return {
    updateDdmVisibility: val => dispatch(updateDdmVisibility(val))
  }
}
export default connect(null, mapDispatchToProps)(DropDownBtn)



const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  height: ${props => props.theme.spacing.header || 'auto'};
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
`