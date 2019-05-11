import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ArrowDown from '../atoms/ArrowDown'
import If from '../atoms/If'
import Triangle from '../atoms/Triangle'


class Input extends Component {
  render() {
    const tooltip = this.props.tooltip? true : false;
    return (
      <React.Fragment>
        <If condition={this.props.label && !this.props.icon}>
          <Label>{this.props.label}</Label>
        </If>
        <Wrapper style={this.props.style} respectTooltipBtn={tooltip}>
          <If condition={tooltip}>
            <TooltipBtn>?</TooltipBtn>
            <Tooltip className='tooltip'>
              <React.Fragment>
                <Triangle color='black' size='12px' style={{position: 'absolute', top: '-12px'}} />
                {this.props.tooltip}
              </React.Fragment>
            </Tooltip>
          </If>
          <InputWrapper>
            <If condition={this.props.label && !this.props.icon}>
              <InlineLabel>{this.props.label}</InlineLabel>
            </If>
            <If condition={this.props.icon}>
              <Icon />
            </If>
            <If condition={!this.props.noTextInput}>
              <TextInput
                roundLeft={!this.props.icon && !this.props.label}
                onChange={this.props.onChange}
                placeholder={this.props.placeholder} />
            </If>
            <If condition={this.props.dropdownBtn}>
              <Icon leftSeparator style={{opacity: this.props.onDropdownClick? 1 : 0.5}}>
                <ArrowDown style={{fontSize: `2em`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}} />
              </Icon>
            </If> 
          </InputWrapper>
        </Wrapper>
      </React.Fragment>
    )
  }
}



const mapStateToProps = state => ({
})
const mapDispatchToProps = dispatch => ({
})
export default connect(mapStateToProps, mapDispatchToProps)(Input)




const tooltipBtnInset = '2.25em';

const Wrapper = styled.div`  
  width: ${p => p.respectTooltipBtn? `calc(100% - ${tooltipBtnInset})` : `100%`};
  position: relative;
  margin: 0.125em 0em;

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {
    width: 100%;
  }
`

const InputWrapper = styled.div`
  height: ${p => p.theme.spacing.inputHeight};
  background-color: ${p => p.theme.colors.base.bg.light};
  display: flex;
  overflow: hidden;
  border-radius: ${p => p.theme.spacing.rounding};
`

const Label = styled.div`
  font-size: 0.875em;
  color: ${p => p.theme.colors.primary.txt.main};

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {
    display: none;
  }
`

const InlineLabel = styled.div`
  height: 100%;
  font-size: 1.25em;
  color: ${p => p.theme.colors.base.txt.light};
  display: none;
  align-items: center;
  padding-left: 0.6em;
  white-space: nowrap;
  font-weight: 300;

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {
    display: inline-flex;
  }
`

const Icon = styled.div`
  width: ${p => p.theme.spacing.inputHeight};
  height: ${p => p.theme.spacing.inputHeight};
  display: inline-block;
  position: relative;
  border-left: ${p => p.leftSeparator? `2px solid ${p.theme.colors.base.bg.dark}` : 'none'};
  flex: none;
`

const TextInput = styled.input`
  box-sizing: border-box;
  font-size: 1.25em;
  margin: 0;
  padding: 0em 0.5em;
  display: inline-block;
  width: 100%;
  height: 100%;
  border: none;
  font-weight: 300;

  &::placeholder {
    opacity: 0.5;
  }
`

const TooltipBtn = styled.div`
  width: 1.25em;
  height: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => p.theme.colors.base.txt.light};
  border: 0.1em solid ${p => p.theme.colors.primary.txt.dark};
  border-radius: 50%;
  font-weight: 600;
  position: absolute;
  top: 50%;
  right: -${tooltipBtnInset};
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;

  &:hover ~ .tooltip {
    display: block;
  }
`

const Tooltip = styled.div`
  display: none;
  font-size: 0.875em;
  position: absolute;
  bottom: 0em;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 0.75em;
  background-color: black;
  border-radius: ${p => p.theme.spacing.rounding};
  color: rgba(255,255,255,0.75);
  z-index: 100;
  transform: translateY(calc(100% + 0.125em));
  box-shadow: ${p => p.theme.shadows[0]};
`