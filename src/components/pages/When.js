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
import { 
  updateDatepickerVisibility,
  updateBooking
} from '../../actions'
import Row from '../atoms/Row'
import theme from '../theme'


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


          <Form>
            <Row>
              {/* FROM */}
              <Input
                label='Pick up:'
                placeholder='e.g. Torstraße 124, Berlin'
                tooltip='Please provide a street address, airport name or hotel name.'
                dropdownBtn
              />
            </Row>

            <Row>
              {/* TO */}
              <Input
                label='Destination:'
                placeholder='e.g. Tegel Airport'
                tooltip='Please provide a street address, airport name or hotel name.'
                dropdownBtn
              />
            </Row>
            
            <Row style={{display: `flex`}}>
              {/* DATE */}
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

              {/* TIME */}
              <div style={{width: `10em`, marginLeft: `2em`, flex: `none`, display: `inline-block`}}>
                <Input label='At:'/>
              </div>
            </Row>

            <Row>
              {/* VOUCHER */}
              <Input
                label='Voucher code (optional):'
              />
            </Row>
            
            <Row
              style={{
                display: 'flex',
                alignItems: 'center',
                height: theme.spacing.inputHeight
              }}
            >
              <div>For ...</div>
              <div>Btn</div>
            </Row>

            <OptionsWrapper>
              <Row>
                {/* PASSENGERS */}
                <Input selectOnly
                  onChange={(val) => {this.props.updateBooking({...this.props.booking, passengers: val})}}
                  value={this.props.booking.passengers}
                  dropdownBtn
                  style={selectStyle}
                  iconStyle={{
                    backgroundImage: 'url(/img/icons/seats.png)',
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
                  <option>8</option>
                </Input>

                {/* LUGGAGE */}
                <Input selectOnly
                  onChange={(val) => {this.props.updateBooking({...this.props.booking, luggage: val})}}
                  value={this.props.booking.luggage}
                  dropdownBtn
                  style={selectStyle}
                  iconStyle={{
                    backgroundImage: 'url(/img/icons/luggage.png)',
                    fontSize: '0.7em'
                  }}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Input>

                {/* EQUIPMENT */}
                <Input selectOnly
                  onChange={(val) => {this.props.updateBooking({...this.props.booking, equipment: val})}}
                  value={this.props.booking.equipment}
                  dropdownBtn
                  style={selectStyle}
                  iconStyle={{
                    backgroundImage: 'url(/img/icons/sport_luggage.png)',
                    fontSize: '0.7em'
                  }}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Input>
              </Row>

              <Row>
                {/* ANIMALS */}
                <Input selectOnly
                  onChange={(val) => {this.props.updateBooking({...this.props.booking, animals: val})}}
                  value={this.props.booking.animals}
                  dropdownBtn
                  style={selectStyle}
                  iconStyle={{
                    backgroundImage: 'url(/img/icons/animals.png)',
                    fontSize: '0.7em'
                  }}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </Input>

                {/* CHILDREN */}
                <Input selectOnly
                  onChange={(val) => {this.props.updateBooking({...this.props.booking, children: val})}}
                  value={this.props.booking.children}
                  dropdownBtn
                  style={selectStyle}
                  iconStyle={{
                    backgroundImage: 'url(/img/icons/children.png)',
                    fontSize: '0.7em'
                  }}
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                </Input>
              </Row>
            </OptionsWrapper>

          </Form>

        </Page>
      </React.Fragment>
    )
  }
}
When.contextType = ResxContext;




const mapStateToProps = state => ({
  booking: state.booking,
  datepickerIsVisible: state.datepickerVisibility
})
const mapDispatchToProps = dispatch => ({
  updateDatepickerVisibility: payload => dispatch(updateDatepickerVisibility(payload)),
  updateBooking: payload => dispatch(updateBooking(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(When)





const DateWrapper = styled.div`
  width: 100%;
  flex: 1;
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

const Form = styled.div`
`

const OptionsWrapper = styled.div`
`

const selectStyle = {
  width: `calc((100% - 0.25em) / 3.0)`
}