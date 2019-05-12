import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import ArrowDown from '../atoms/ArrowDown'
import If from '../atoms/If'
import Triangle from '../atoms/Triangle'
import List from '../atoms/List'
import PopupHider from '../atoms/PopupHider'
import theme from '../theme'

class Input extends Component {
  state = {
    extended: false
  }

  render() {
    return (
      <Wrapper style={this.props.style} respectTooltipBtn={this.props.tooltip}>
        <If condition={this.props.label && !this.props.iconStyle}>
          <Label>{this.props.label}</Label>
        </If>
        <If condition={this.props.tooltip}>
          <TooltipBtn>?</TooltipBtn>
          <Tooltip className='tooltip'>
            <React.Fragment>
              <Triangle color='black' size='12px' style={{position: 'absolute', top: '-12px'}} />
              {this.props.tooltip}
            </React.Fragment>
          </Tooltip>
        </If>
        <InputWrapper
          style={{
            boxShadow: this.state.expanded? theme.shadows[0] : 'none',
            cursor: this.props.selectOnly? 'pointer' : 'default'
          }}
          onClick={() => {
            if(this.props.selectOnly) this.setState({...this.state, expanded: true})
          }}
        >
          <If condition={this.props.iconStyle}>
            <IconWrapper>
              <Icon style={this.props.iconStyle} />
            </IconWrapper>
          </If>
          <If condition={this.props.label && !this.props.iconStyle}>
            <InlineLabel>{this.props.label}</InlineLabel>
          </If>
          <If condition={!this.props.noTextInput}>
            <TextInput
              className={this.props.selectOnly? 'no-outline' : ''}
              style={{cursor: this.props.selectOnly? 'pointer' : 'default'}}
              readOnly={this.props.selectOnly}
              roundLeft={!this.props.iconStyle && !this.props.label}
              onChange={this.props.onChange}
              placeholder={this.props.placeholder} />
          </If>
          <If condition={this.props.dropdownBtn}>
            <Icon leftSeparator
              onClick={() => {
                if (this.props.children)
                  this.setState({...this.state, expanded: true})
              }}
              style={{
                opacity: this.props.selectOnly? 1 : 0.5              
              }}
            >
              <ArrowDown style={{fontSize: `2em`, top: `50%`, left: `50%`, transform: `translate(-50%, -50%)`}}
              />
            </Icon>
          </If> 
        </InputWrapper>
        <If condition={this.props.children}>
          <PopupHider
            onClick={() => {this.setState({...this.state, expanded: false})}}
            style={{display: this.state.expanded? 'block' : 'none'}}
          />
          <List
            style={{
              display: this.state.expanded? 'block' : 'none',
              position: 'absolute',
              zIndex: 1000,
              right: 0,
              bottom: 0,
              transform: 'translateY(calc(100% + 0.125em))'
            }}
          >
            {(this.props.children || []).map(child => {
              const className = child.props.children == this.props.value? 'active' : ''
              return React.cloneElement(child, {
                key: child.props.children,
                className: className
              })
            })}
          </List>
        </If>
      </Wrapper>
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
  padding-right: 0.25em;
  white-space: nowrap;
  font-weight: 300;

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {
    display: inline-flex;
  }
`

const IconWrapper = styled.div`
  width: ${p => p.theme.spacing.inputHeight};
  height: ${p => p.theme.spacing.inputHeight};
  background-color: ${p => p.theme.colors.base.bg.main};
  display: flex;
  justify-content: center;
  align-items: center;
  flex: none;

`

const Icon = styled.div`
  width: ${p => p.theme.spacing.inputHeight};
  height: ${p => p.theme.spacing.inputHeight};
  display: inline-block;
  position: relative;
  border-left: ${p => p.leftSeparator? `2px solid ${p.theme.colors.base.bg.dark}` : 'none'};
  background-size: cover;
  flex: none;
  background-repeat: no-repeat;
`

const TextInput = styled.input`
  box-sizing: border-box;
  font-size: 1.25em;
  margin: 0;
  padding: 0em 0.5em 0em 0.25em;
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