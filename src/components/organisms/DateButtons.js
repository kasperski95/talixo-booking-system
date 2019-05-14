import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResxContext } from '../resx'
import styled from 'styled-components'
import moment from 'moment'
import { updateBooking, updateErrors } from '../../actions'



class DateButtons extends Component {
  getDayComponent(props) {
    const date = moment(props.date, 'YYYY-MM-DD')
    const dateLabel = date.format('DD.MM')
    let day;
    try {
      day = this.context.days[date.day()]
    } catch {
      day = ''
    }

    const curDate = moment().format('YYYY-MM-DD')
    const tomDate = moment().add(1, 'days').format('YYYY-MM-DD')
    if (curDate === props.date)
      day = this.context.today
    if (tomDate === props.date)
      day = this.context.tomorrow

    return (
      <DayWrapper {...props}>
        <Icon active={props.active} />
        <TextWrapper>
          <DateLabel active={props.active}>{dateLabel}</DateLabel>
          <DayName>{day}</DayName>
        </TextWrapper>
      </DayWrapper>
    )
  }
  
  render() {
    const Day = props => this.getDayComponent(props)
    let dates = [];

    const curDate = moment(this.props.booking.date, 'YYYY-MM-DD');

    if (curDate.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD')) {
      dates.push(curDate)
      dates.push(moment(curDate).add(1, 'days'))
      dates.push(moment(curDate).add(2, 'days'))
    }

    if (moment(curDate.format('YYYY-MM-DD'), 'YYYY-MM-DD') > moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD')) {
      dates.push(moment(curDate).add(-1, 'days'))
      dates.push(curDate)
      dates.push(moment(curDate).add(1, 'days'))
    }

    return (
      <Wrapper>
        {dates.map(el => {
          const active = el.format('YYYY-MM-DD') === this.props.booking.date
          return <Day
            onClick={() => {
              if (moment().add(1, 'hours').isAfter(`${el.format('YYYY-MM-DD')} ${this.props.booking.time}`, 'minutes')) {
                this.props.updateErrors({...this.props.errors, time: 'Booking has to be at least 60 minutes in the future'})
                return null;
              }
              this.props.updateErrors({...this.props.errors, time: ''})
              this.props.updateBooking({...this.props.booking, date: el.format('YYYY-MM-DD')})
            }}
            key={`day-${el.format('YYYY-MM-DD')}`}
            active={active}
            date={el.format('YYYY-MM-DD')}
          />
        })}
        
      </Wrapper>
    )
  }
}
DateButtons.contextType = ResxContext;



const mapStateToProps = state => ({
  booking: state.booking,
  errors: state.errors
})
const mapDispatchToProps = dispatch => ({
  updateBooking: (payload) => dispatch(updateBooking(payload)),
  updateErrors: payload => dispatch(updateErrors(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(DateButtons)



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  color: ${p => p.theme.colors.primary.bg.main};
` 

const DayWrapper = styled.div`
  width: 7em;
  height: 100%;
  display: inline-flex;
  box-sizing: border-box;
  padding: 0.4em;
  cursor: pointer;
  user-select: none;
`

const Icon = styled.div`
  opacity: ${p => p.active? 1 : 0};
  background: url(/img/icons/selected-date.svg) no-repeat;
  background-size: contain;
  background-position: center center;
  width: 1em;
  height: 100%;
  flex: none;
`

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const DateLabel = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 0.8em;
  font-weight: bold;
  color: ${p => p.active? p.theme.colors.accent.main : 'inherit'};
  width: 100%;
  height: 50%;
`

const DayName = styled.div`
  width: 100%;
  height: 50%;
  font-size: 0.875em;
  display: flex;
  align-items: flex-start;
`