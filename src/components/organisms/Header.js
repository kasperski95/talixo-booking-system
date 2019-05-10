import React, { Component } from 'react'

import HeaderWrapper from '../atoms/HeaderWrapper'
import Logo from '../atoms/Logo'


export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Logo />
      </HeaderWrapper>
    )
  }
}
