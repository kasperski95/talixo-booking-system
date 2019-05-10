import React, { Component } from 'react'
import Header from '../organisms/Header'


export default class When extends Component {
  componentDidMount() {
    document.title = '[1/3] Prebook your Taxi or Limousine - Where & When'
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
