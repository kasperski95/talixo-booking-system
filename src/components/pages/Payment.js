import React, { Component } from 'react'
import Header from '../organisms/Header'
import { ResxContext } from '../resx.js'


export default class Payment extends Component {
  
  render() {
    const data = this.context;
    document.title = `[3/3] ${data.title} - ${data.detailsAndPayment}`

    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
Payment.contextType = ResxContext;