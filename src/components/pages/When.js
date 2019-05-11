import React, { Component } from 'react'
import Header from '../organisms/Header'
import Input from '../organisms/Input'
import StylishOrderedList from '../molecules/StylishOrderedList'
import Page from '../molecules/Page'
import { ResxContext } from '../resx'
import { SM } from '../theme'

export default class When extends Component {
  
  render() {
    const data = this.context
    document.title = `[1/3] ${data.title} - ${data.whenAndWhen}`

    return (
      <React.Fragment>
        <Header />
        
        <Page>
          <SM
            children={
              <StylishOrderedList sm
                style={{boxSizing: `border-box`, padding: `0`}}
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

          <Input
            label='Pick up:'
            placeholder='e.g. Torstraße 124, Berlin'
            tooltip='Please provide a street address, airport name or hotel name.'
            dropdownBtn
          />

          <Input
            label='Destination:'
            placeholder='e.g. Tegel Airport'
            tooltip='Please provide a street address, airport name or hotel name.'
            dropdownBtn
          />

          {/* 
          <div>
            <Input
              labelRenderer={{}}
              leftElementRenderer={{}}
              rightElementRenderer={{}}
              noTextInput
            />
            <Input
              label='At:'
              inputRenderer={{}}
            />
          </div>

          <Input
            label='Voucher code (optional):'
          /> */}

        </Page>
      </React.Fragment>
    )
  }
}
When.contextType = ResxContext;
