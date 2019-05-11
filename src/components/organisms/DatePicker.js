import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import Arrow from '../atoms/Arrow'



export class DatePicker extends Component {
  render() {
    //let firstDay = moment(,'YYYY-MM-DD').startOf('month');

    return (
      <Wrapper style={this.props.style}>
        <Header>
          <Arrow style={{flex: 'none', cursor: 'pointer'}} dir='left' />
          <MonthLabel>May</MonthLabel>
          <Arrow style={{flex: 'none', cursor: 'pointer'}} dir='right' />
        </Header>
        <Grid>
          <Row>
            <Day>Mo</Day>
            <Day>Tu</Day>
            <Day>We</Day>
            <Day>Th</Day>
            <Day>Fr</Day>
            <Day>Sa</Day>
            <Day>Su</Day>
          </Row>
          <Row>
            <Day fromOtherMonth>30</Day>
            <Day fromOtherMonth>31</Day>
            <Day>1</Day>
            <Day>2</Day>
            <Day>3</Day>
            <Day>4</Day>
            <Day>5</Day>
          </Row>
        </Grid>
      </Wrapper>
    )
  }
}



const mapStateToProps = state => ({
  
})
const mapDispatchToProps = dispatch => ({
  
})
export default connect(mapStateToProps, mapDispatchToProps)(DatePicker)




const Wrapper = styled.div`
  background-color: ${p => p.theme.colors.base.bg.main};
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 50;
  padding: ${p => p.theme.spacing.gutters[0]};
  border-radius: ${p => p.theme.spacing.rounding};
  box-shadow: ${p => p.theme.shadows[0]};
  transform: translateY(calc(100% + 0.125em));
  overflow: hidden;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.125em;
`

const MonthLabel = styled.div`
  width: 100%;
  text-align: center;
`

const Grid = styled.div`
`

const Row = styled.div`
  display: flex;

  &:first-of-type > div {
    height: 2em;
    background-color: transparent;
  }
`

const Day = styled.div`
  font-size: 0.75em;
  width: 3em;
  height: 2.5em;
  background-color: ${p => p.fromOtherMonth? 'transparent' : p.theme.colors.base.bg.light};
  margin: 0.125em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`