import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ResxContext } from '../resx'
import styled from 'styled-components'
import moment from 'moment'

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
          <DateLabel>{dateLabel}</DateLabel>
          <DayName>{day}</DayName>
        </TextWrapper>
      </DayWrapper>
    )
  }
  
  render() {
    const Day = props => this.getDayComponent(props)

    return (
      <Wrapper>
        <Day active date={'2019-05-11'} />
        <Day date={'2019-05-12'} />
        <Day date={'2019-05-13'} />
      </Wrapper>
    )
  }
}
DateButtons.contextType = ResxContext;



const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(DateButtons)



const Wrapper = styled.div`
  width: 100%;
  height: 100%;
` 

const DayWrapper = styled.div`
  width: 7em;
  height: 100%;
  display: inline-flex;
  box-sizing: border-box;
  padding: 0.4em;
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
  color: ${p => p.theme.colors.primary.bg.main};
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