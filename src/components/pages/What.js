import React, { Component } from 'react'
import Header from '../organisms/Header'
import { ResxContext } from '../resx.js'


export default class What extends Component {
  
  render() {
    const data = this.context;
    document.title = `[2/3] ${data.title} - ${data.chooseCar}`

    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
What.contextType = ResxContext;

