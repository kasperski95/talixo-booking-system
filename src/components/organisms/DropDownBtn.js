import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { updateDdmVisibility } from '../../actions'


function DropDownBtn(props) {
  return (
    <React.Fragment>
      <Wrapper
        onMouseOver={(e) => {props.updateDdmVisibility(true);}}
        onMouseLeave={(e) => {props.updateDdmVisibility(false);}}
      >
        <div style={{position: `relative`, paddingRight: `1.5em`}}>
          {props.label}
          <GlyphPositioner>
            <GlyphWrapper expanded={props.expanded}>
              <Glyph />
            </GlyphWrapper>
          </GlyphPositioner>
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

const Glyph = styled.div`
  transform: translate(0.25em, 0.5em) scale(2, 1.75) rotate(90deg);
  &::before {
    content: "\\203a";
    color: inherit;
  }
`

const GlyphWrapper = styled.div`
  width: 1em;
  height: 1em;
  transform-origin: 50% 55%;
  overflow: hidden;
  color: inherit;
  transform: scaleY(${props => props.expanded? -1 : 1});
  transition: transform 0.25s;
`

const GlyphPositioner = styled.div`
  position: absolute;
  top: 0.1em;
  right: 0em;
  
`







