import React, { Component } from 'react'
import Header from '../organisms/Header'
import { ResxContext } from '../resx.js'


export default class When extends Component {
  
  render() {
    const data = this.context
    document.title = `[1/3] ${data.title} - ${data.whenAndWhen}`

    return (
      <React.Fragment>
        <Header />
      </React.Fragment>
    )
  }
}
When.contextType = ResxContext;
