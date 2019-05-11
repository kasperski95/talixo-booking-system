import React from 'react'
import styled from 'styled-components'



export default function ArrowDown(props) {
  return (
    <GlyphPositioner style={props.style}
      ><GlyphWrapper expanded={props.expanded}
        ><Glyph />
      </GlyphWrapper>
    </GlyphPositioner>
  )
}


const Glyph = styled.div`
  transform: translate(0.25em, 0.5em) scale(2, 1.75) rotate(90deg);
  &::before {
    content: "\\203a";
    color: ${p => p.theme.colors.accent.main};
  }
`

const GlyphWrapper = styled.div`
  width: 1em;
  height: 1em;
  transform-origin: 50% 55%;
  overflow: hidden;
  transform: scaleY(${props => props.expanded? -1 : 1});
  transition: transform 0.25s;
`

const GlyphPositioner = styled.div`
  position: absolute;
  width: 1em;
  height: 1em;
  top: 0.1em;
  right: 0em;
`