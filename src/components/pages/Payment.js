import React, { Component } from 'react'
import Header from '../organisms/Header'


export default class Payment extends Component {
  componentDidMount() {
    document.title = '[3/3] Prebook your Taxi or Limousine - Details & Payment'
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
