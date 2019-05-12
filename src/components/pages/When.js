import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../organisms/Header'
import Input from '../organisms/Input'
import DatePicker from '../organisms/DatePicker'
import DateButtons from '../organisms/DateButtons'
import StylishOrderedList from '../molecules/StylishOrderedList'
import Page from '../molecules/Page'
import { ResxContext } from '../resx'
import { SM } from '../theme'
import styled from 'styled-components'
import { updateDatepickerVisibility } from '../../actions'

class When extends Component {
  
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

          
          <div style={{display: `flex`, margin: '-0.125em 0em'}}>
            <DateWrapper>
              <Label>On:</Label>
              <DateInput >
                <DateButtons />
                <DatePickerWrapper>
                  <DatePickerBtn
                    onClick={() => this.props.updateDatepickerVisibility(!this.props.datepickerIsVisible)}
                  />
                  <DatePicker 
                    style={{
                      display: this.props.datepickerIsVisible? 'block' : 'none'
                    }}
                  />
                </DatePickerWrapper>
              </DateInput>
            </DateWrapper>
            <div style={{width: `10em`, marginLeft: `2em`, flex: `none`, display: `inline-block`}}>
              <Input label='At:'/>
            </div>
          </div>

          
          <Input
            selectOnly
            value={1}
            dropdownBtn
            style={{
              width: '33.333%'
            }}
            iconStyle={{
              backgroundImage: 'url(/img/icons/more-options-icons.png)',
              backgroundPosition: '0 0',
              fontSize: '0.7em'
            }}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Input>

          {/* <Input
            label='Voucher code (optional):'
          /> */}

        </Page>
      </React.Fragment>
    )
  }
}
When.contextType = ResxContext;




const mapStateToProps = state => ({
  datepickerIsVisible: state.datepickerVisibility
})
const mapDispatchToProps = dispatch => ({
  updateDatepickerVisibility: payload => dispatch(updateDatepickerVisibility(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(When)




const DateWrapper = styled.div`
  width: 100%;
  flex: 1;
  margin: 0.125em 0em;
  display: inline-block;
  border-radius: ${p => p.theme.spacing.rounding};
`

const DateInput = styled.div`
  display: flex;
  width: 100%;
  height: ${p => p.theme.spacing.inputHeight};
  border-radius: ${p => p.theme.spacing.rounding};
  background-color: ${p => p.theme.colors.base.bg.light};
`

const DatePickerWrapper = styled.div`
  width: ${p => p.theme.spacing.inputHeight};
  height: 100%;
  flex: none;
  position: relative;
`

const DatePickerBtn = styled.div`
  width: 100%;
  height: 100%;
  background: url('/img/icons/calendar.svg') no-repeat;
  background-size: 50%;
  background-position: center center;
  display: inline-block;
  border-left: 2px solid ${p => p.theme.colors.base.bg.dark};
  cursor: pointer;
`

const Label = styled.div`
  font-size: 0.875em;
  color: ${p => p.theme.colors.primary.txt.main};

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {
    display: none;
  }
`