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
import Submit from '../atoms/Submit'
import moment from 'moment'


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
                <li className='active'>{data.whenAndWhen}</li>
                <li>{data.chooseCar}</li>
                <li>{data.detailsAndPayment}</li>
              </StylishOrderedList>
            }
          />


          <Form>
            <Overlapper>
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
                      <DatePicker />
                    </DatePickerWrapper>
                  </DateInput>
                </DateWrapper>

                {/* TIME */}
                <div style={{width: `10em`, marginLeft: `2em`, flex: `none`, display: `inline-block`}}>
                  <Input 
                    label='At:'
                    dropdownBtn
                    value={this.props.booking.time}
                    onBlur={(time) => {     
                      const t = moment(time, 'HH:mm')         
                      if (t.isValid()) {
                        this.props.updateBooking({...this.props.booking, time: t.format('HH:mm')})
                        return {value: t.format('HH:mm'), error: false}
                      }  
                      return {value: null, error: 'Invalid time format, it should be HH:MM'}
                    }}
                    onSelect={time => {
                      this.props.updateBooking({...this.props.booking, time: time})
                    }}
                  >{
                    (new Array(4*24)).fill(0).map((val, key) => {
                      const h = parseInt(key / 4)
                      const m = (key * 15) % 60
                      const time = moment(`${h}:${m}`, 'H:m').format('HH:mm')
                      return (
                        <option key={`time-${key+1}`} >
                          {time}
                        </option>
                      )
                    })
                  }</Input>
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
                  {`For ${this.props.booking.passengers > 1? '1-'+this.props.booking.passengers : '1'} ${this.props.booking.passengers > 1? 'passengers' : 'passenger'} with 1-${Math.max(this.props.booking.luggage, 2)} bags`}
                </div>
                <DropDownBtn animate
                  label={`${this.props.optionsAreVisible? 'hide' : 'more'} options`}
                  onClick={() => {this.props.updateOptionsExpansion(!this.props.optionsAreVisible)}}
                  expanded={this.props.optionsAreVisible}
                  style={{
                    flex: 'none'
                  }}
                />
              </Row>
            </Overlapper>
            
            <Spring native 
              to={{expansion: this.props.optionsAreVisible? 0 : 1}}
            >{i => { // i(nterpolated props)
              return (
                <div>
                  <OptionsWrapper
                    id="options-wrapper"
                    style={{
                      marginTop: i.expansion.interpolate(val => `-${val * 11.25}em`)
                    }}
                  >
                    <Row style={{marginTop: 0}}>
                      {/* PASSENGERS */}
                      <Input selectOnly
                        onSelect={(val) => {this.props.updateBooking({...this.props.booking, passengers: val})}}
                        value={this.props.booking.passengers}
                        iconTooltip={"Passengers"}
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
                        onSelect={(val) => {this.props.updateBooking({...this.props.booking, luggage: val})}}
                        value={this.props.booking.luggage}
                        iconTooltip='Max. 20kg each. 1 piece of hand luggage is included per passenger.'
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
                        onSelect={(val) => {this.props.updateBooking({...this.props.booking, equipment: val})}}
                        value={this.props.booking.equipment}
                        iconTooltip='Golf equipment, skis, snowboard...'
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
                        onSelect={(val) => {this.props.updateBooking({...this.props.booking, animals: val})}}
                        value={this.props.booking.animals}
                        iconTooltip='Small animals'
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
                        onSelect={(val) => {this.props.updateBooking({...this.props.booking, children: val})}}
                        value={this.props.booking.children}
                        iconTooltip='Children seats'
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

                    <Row style={{margin: '1em 0em', minHeight: theme.spacing.inputHeight}}>
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
                        <Input selectOnly
                          onSelect={(val) => {
                            this.props.updateBooking({
                              ...this.props.booking, perHourBooking: parseInt(val)
                            })
                          }}
                          value={this.props.booking.perHourBooking + 'h'}
                          iconTooltip='Per-hour booking duration'
                          style={{
                            width: '10em',
                            marginLeft: theme.spacing.gutters[0],
                            marginRight: theme.spacing.gutters[0]                          }}
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
                        till {new moment(this.props.booking.time, 'HH:mm').add(this.props.booking.perHourBooking, 'hours').format('HH:mm')}
                      </PerHourWrapper>
                    </Row>
                  </OptionsWrapper>
                </div>
              )
            }}</Spring>

            <Submit value='Start booking'/>
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

const Overlapper = styled.div`
  position: relative;
  background-color: ${p => p.theme.colors.primary.bg.dark};
  z-index: 50;

  @media(min-width: ${p => p.theme.breakpoints.md}) {
    background-color: ${p => p.theme.colors.primary.bg.main};
  }
`