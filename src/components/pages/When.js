import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Spring, animated, interpolate } from 'react-spring/renderprops'
import Header from '../organisms/Header'
import Input from '../organisms/Input'
import DatePicker from '../organisms/DatePicker'
import DateButtons from '../organisms/DateButtons'
import StylishOrderedList from '../molecules/StylishOrderedList'
import Page from '../molecules/Page'
import DropDownBtn from '../molecules/DropDownBtn'
import { ResxContext } from '../resx'
import { SM } from '../theme'
import styled from 'styled-components'
import { 
  updateDatepickerVisibility,
  updateBooking,
  updateOptionsExpansion
} from '../../actions'
import Row from '../atoms/Row'
import theme from '../theme'
import Checkbox from '../atoms/Checkbox'
import moment from 'moment'


class When extends Component {
  
  render() {
    const data = this.context
    document.title = `[1/3] ${data.title} - ${data.whenAndWhen}`

    const optionsWrapperElement = document.getElementById('options-wrapper');
    let optionsWrapperHeight = 0;
    if (optionsWrapperElement) {
      optionsWrapperHeight = parseInt(getComputedStyle(optionsWrapperElement).getPropertyValue('height'))
    }

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
                <li className='active'>{data.whenAndWhen}</li>
                <li>{data.chooseCar}</li>
                <li>{data.detailsAndPayment}</li>
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
              <div style={{width: '100%'}}>
                For ...
              </div>
              <DropDownBtn animate
                label='more options'
                onClick={() => {this.props.updateOptionsExpansion(!this.props.optionsAreVisible)}}
                expanded={this.props.optionsAreVisible}
                style={{
                  flex: 'none'
                }}
              />
            </Row>

            
          <Spring native 
            to={{expansion: this.props.optionsAreVisible? 0 : 0}}
          >{i => { // i(nterpolated props)
            return (
              <div
                style={{
                }}
              >
                <OptionsWrapper
                  id="options-wrapper"
                  style={{
                    marginTop: i.expansion.interpolate(val => `-${val * optionsWrapperHeight}px`)
                  }}
                >
                  <Row style={{marginTop: 0}}>
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

                  <Row style={{marginBottom: 0}}>
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

                  <Row style={{margin: '1em 0em', height: theme.spacing.inputHeight}}>
                    <Checkbox 
                      onClick={() => {
                        let value = (this.props.booking.perHourBooking > 0)? 0 : 1
                        this.props.updateBooking({
                          ...this.props.booking, perHourBooking: value
                        })
                      }}
                      active={(this.props.booking.perHourBooking > 0)? true : false}
                    >
                      Per-hour booking
                    </Checkbox>
                    <PerHourWrapper style={{opacity: this.props.booking.perHourBooking? 1 : 0}}>
                      for
                      <Input selectOnly
                        onChange={(val) => {
                          this.props.updateBooking({
                            ...this.props.booking, perHourBooking: parseInt(val)
                          })
                        }}
                        value={this.props.booking.perHourBooking + 'h'}
                        style={{
                          width: '10em',
                          marginLeft: theme.spacing.gutters[0],
                          marginRight: theme.spacing.gutters[0],
                          color: 'red'
                        }}
                        iconStyle={{
                          backgroundImage: 'url(/img/icons/time.png)',
                          fontSize: '0.7em'
                        }}
                        dropdownBtn
                      >{
                        (new Array(24)).fill(0).map((val, key) => {
                          return <option key={`perHourBooking-${key+1}`} >{`${key+1}h`}</option>
                        })
                      }</Input>
                      till {new moment(this.props.booking.hour, 'HH:mm').add(this.props.booking.perHourBooking, 'hours').format('HH:mm')}
                    </PerHourWrapper>
                  </Row>
                </OptionsWrapper>
              </div>
            )
          }}</Spring>
          </Form>

        </Page>
      </React.Fragment>
    )
  }
}
When.contextType = ResxContext;




const mapStateToProps = state => ({
  booking: state.booking,
  datepickerIsVisible: state.datepickerVisibility,
  optionsAreVisible: state.optionsExpanded
})
const mapDispatchToProps = dispatch => ({
  updateDatepickerVisibility: payload => dispatch(updateDatepickerVisibility(payload)),
  updateBooking: payload => dispatch(updateBooking(payload)),
  updateOptionsExpansion: payload => dispatch(updateOptionsExpansion(payload))
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
  margin-top: ${p => p.theme.spacing.gutters[1]};
`

const OptionsWrapper = styled(animated.div)`
`

const selectStyle = {
  width: `calc((100% - 0.25em) / 3.0)`
}

const PerHourWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: flex-start;
  align-items: center;
  white-space: nowrap;
  padding-left: 0.15em;
  box-sizing: border-box;
  transition: opacity 0.1s;
`