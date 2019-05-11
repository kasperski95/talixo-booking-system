import React, { Component } from 'react'
import StylishOrderedList from '../molecules/StylishOrderedList'
import Header from '../organisms/Header'
import { ResxContext } from '../resx'
import theme, { SM } from '../theme'
import MaxWidth from '../atoms/MaxWidth'


export default class When extends Component {
  
  render() {
    const data = this.context
    document.title = `[1/3] ${data.title} - ${data.whenAndWhen}`

    return (
      <React.Fragment>
        <Header />
        
        <MaxWidth>
          <SM
            children={
              <StylishOrderedList sm
                style={{boxSizing: `border-box`, padding: `0 ${theme.spacing.gutters[0]}`}}
              >
                <div style={{display: `flex`}}>
                  <div style={{flex: 1}}>
                    <li className='active'>{data.whenAndWhen}</li>
                  </div>
                  <div style={{flex: `none`}}>
                    <li></li>
                    <li></li>
                  </div>
                </div>
              </StylishOrderedList>
            }
            else={
              <StylishOrderedList style={{textAlign: `center`}}>
                <React.Fragment>
                  <li className='active'>{data.whenAndWhen}</li>
                  <li>{data.chooseCar}</li>
                  <li>{data.detailsAndPayment}</li>
                </React.Fragment>
              </StylishOrderedList>
            }
          />
        </MaxWidth>
      </React.Fragment>
    )
  }
}
When.contextType = ResxContext;
