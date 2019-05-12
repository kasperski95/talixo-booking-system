import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Arrow from '../atoms/Arrow'
import {
  updateBooking,
  updateDatepickerVisibility
} from '../../actions'
import moment from 'moment'
import { ResxContext } from '../resx'




class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment(props.booking.date,'YYYY-MM-DD')
    }
  }

  render() {
    const curDate = moment()

    let firstMonthDay = moment(this.state.date.startOf('month'))
    let lastMonthDay = moment(this.state.date.endOf('month'))

    let month = '';
    let dayNames = Array(7)
    try {
      month = this.context.months[firstMonthDay.month()]
      for (let i = 1; i <= 7; ++i) {
        dayNames.push(this.context.days[i % 7].substr(0,2).toLowerCase())
      }
    } catch {}

    let weeks = [];
    {
      let dayNumber = 1

      let firstDay = moment(firstMonthDay)
      dayNumber = firstDay.day()
      if (dayNumber === 0) dayNumber = 7
      firstDay.add(-dayNumber + 1, 'days')


      let lastDay = moment(lastMonthDay)
      dayNumber = lastDay.day()
      if (dayNumber === 0) dayNumber = 7
      lastDay.add(7 - dayNumber, 'days')

      let tmpDate = moment(firstDay)
      while (tmpDate < lastDay) {     
        let days = [];
        for (let i = 0; i < 7; ++i) {
          days.push(moment(tmpDate))
          tmpDate.add(1, 'days')
        }
        weeks.push([...days])
      }
    }

    

    return (
      <Wrapper style={this.props.style}>
        <Header>
          <Arrow 
            onClick={() => {
              this.setState({date: moment(this.state.date).add(-1, 'months')})
            }}
            style={{flex: 'none', cursor: 'pointer'}}
            dir='left'
          />
          <MonthLabel>{`${month} ${firstMonthDay.format('YYYY')}`}</MonthLabel>
          <Arrow
            onClick={() => {
              this.setState({date: moment(this.state.date).add(1, 'months')})
            }}
            style={{flex: 'none', cursor: 'pointer'}}
            dir='right'
          />
        </Header>
        <Grid>
          <Row>
            {dayNames.map(dayName => <Day key={`dayname-${dayName}`}>{dayName}</Day>)}
          </Row>
          
        {weeks.map(week => {
          return (
            <Row key={`week-${week[0].format('YYYY-MM-DD')}`}>{
              week.map(day => {
                let fromOtherMonth = false;
                if (day < firstMonthDay || day > lastMonthDay)
                  fromOtherMonth = true;

                const disabled = day.isBefore(curDate, 'days')
                const active = day.format('YYYY-MM-DD') === this.props.booking.date

                return (
                  <Day key={`day-${day.format('YYYY-MM-DD')}`}
                    fromOtherMonth={fromOtherMonth}
                    disabled={disabled}
                    active={active}
                    onClick={() => {
                      if (!disabled) {
                        this.props.updateBooking({
                          ...this.props.booking, date: day.format('YYYY-MM-DD')
                        })
                        this.props.updateDatepickerVisibility(false);
                      }
                    }}
                  >
                    {day.format('D')}
                  </Day>
                )
              })
            }</Row>
          )})}
        </Grid>
      </Wrapper>
    )
  }
}
DatePicker.contextType = ResxContext;





const mapStateToProps = state => ({
  booking: state.booking
})
const mapDispatchToProps = dispatch => ({
  updateBooking: (payload) => dispatch(updateBooking(payload)),
  updateDatepickerVisibility: payload => dispatch(updateDatepickerVisibility(payload))

})
export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)





const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.base.bg.main};
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1000;
  padding: ${p => p.theme.spacing.gutters[0]};
  border-radius: ${p => p.theme.spacing.rounding};
  box-shadow: ${p => p.theme.shadows[0]};
  transform: translateY(calc(100% + 0.125em));
  overflow: hidden;
  transition: opacity 0.1s;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.125em;
`

const MonthLabel = styled.div`
  width: 100%;
  font-size: 0.875em;
  text-align: center;
`

const Grid = styled.div`
`

const Row = styled.div`
  display: flex;

  &:first-of-type > div {
    height: 2em;
    background-color: transparent;
    cursor: default;
    color: inherit;
  }
`

const Day = styled.div`
  font-size: 0.75em;
  width: 3em;
  height: 2.5em;
  color: ${p => p.active? 'white' : 'inherit'};
  font-weight: ${p => p.active? '600' : '300'};
  background-color: ${p => {
    if (p.active) return p.theme.colors.accent.main;
    return p.fromOtherMonth? 'transparent' : p.theme.colors.base.bg.light} 
  };
  margin: 0.125em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: ${p => p.disabled? 'default' : 'pointer'};
  opacity: ${p => p.disabled? 0.5 : 1};

  &:hover {
    color: ${p => {
      if (!p.disabled)
        return 'white'
    }};

    background-color: ${p => {
      if (!p.disabled)
        return p.theme.colors.accent.light
    }};
  }
`