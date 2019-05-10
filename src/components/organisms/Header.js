import React, { Component } from 'react'
import styled from 'styled-components'
import DropDownIcon from './DropDownIcon'

export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Right>
          <DropDownIcon label={<span style={{fontSize: `0.85em`}}>EN</span>} animate />
        </Right>
      </HeaderWrapper>
    )
  }
}


const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0em 1em;
  height: 2.25em;
  background-color: ${props => props.theme.colors.primary.bg.main};
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

const Logo = styled.img.attrs({
  src: '/img/talixo_logo.png'
})`
  height: 1.3725em;
  flex: 0 0;
`;


const Right = styled.div`
  flex: 1 1;
  text-align: right;
  color: ${props => props.theme.colors.accent.main}
`;