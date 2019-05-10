import React, { Component } from 'react'
import Header from '../organisms/Header'

export default class What extends Component {
  componentDidMount() {
    document.title = '[2/3] Prebook your Taxi or Limousine - Choosing a Car'
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
