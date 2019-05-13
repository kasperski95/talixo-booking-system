import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-scrollbars-custom'
import theme from '../theme'


export default function(props) {
  return (
    <Scrollbar
      style={{
        backgroundColor: theme.colors.base.bg.light,
        width: '7em',
        height: `calc((${theme.spacing.inputHeight} + 1px) * ${Math.min(props.children.length, 5)})`,
        borderRadius: theme.spacing.rounding,
        overflow: 'hidden',
        boxShadow: theme.shadows[0],
        display: 'inline-block',
        ...props.style
      }}

      trackYProps={{
        style: {
          width: theme.spacing.gutters[0],
          padding: 0,
          height: 'calc(100% - 2px)',
          top: '1px',
          right: '1px',
          backgroundColor: 'transparent'
        }
      }}

      thumbYProps={{
        style: {
          backgroundColor: theme.colors.base.txt.light
        }
      }}
    >
      <List>
        {props.children}
      </List>
    </Scrollbar>
  )
}


const List = styled.div`
  width: 100%;
  color: ${p => p.theme.colors.base.txt.main};

  & > option {
    padding: 0em;
    height: ${p => p.theme.spacing.inputHeight};
    border-bottom: 1px solid ${p => p.theme.colors.base.bg.main};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  & > option:hover {
    background-color: ${p => p.theme.colors.base.bg.main};
    color: ${p => p.theme.colors.accent.main};
    font-weight: 600;
  }

  & > option.active {
    font-weight: 600;
  }
`