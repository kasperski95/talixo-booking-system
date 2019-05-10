import React from 'react'
import styled from 'styled-components'


function DropDownIcon(props) {
  return (
    <Wrapper animate={props.animate}>
      {props.label}
      <GlyphPositioner>
        <GlyphWrapper className='glyph-wrapper'>
            <Glyph />
        </GlyphWrapper>
      </GlyphPositioner>
    </Wrapper>
  )
}

export default DropDownIcon;



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
  transition: transform 0.25s;
`

const GlyphPositioner = styled.div`
  position: absolute;
  top: 0.1em;
  right: 0em;
  
`

const Wrapper = styled.span`
  position: relative;
  padding-right: 1.5em;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;

  &:hover > div > .glyph-wrapper {
    transform: scaleY(${props => props.animate? -1 : 1});
  }
`