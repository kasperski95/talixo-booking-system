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
  constructor(props) {
    super(props)

    this.state = {
      extended: false,
      iconTooltipVisible: false,
      tooltipVisible: false,
      value: props.value,
      inputRef: React.createRef()
    }
  }
  
  render() {
    const error = this.state.tooltipVisible? false : this.props.error

    return (
      <Wrapper style={this.props.style} respectTooltipBtn={this.props.tooltip}>
        <If condition={this.props.label && !this.props.iconStyle}>
          <Label>{this.props.label}</Label>
        </If>
        <If condition={this.props.tooltip}>
          <TooltipBtn
            onMouseOver={() => this.setState({...this.state, tooltipVisible: true})}
            onMouseOut={() => this.setState({...this.state, tooltipVisible: false})}
          >?</TooltipBtn>
        </If>
        <Tooltip
          style={{display: `${(this.state.tooltipVisible || this.props.error)? 'block' : 'none'}`}}
          error={error}
        >
          {this.state.tooltipVisible? this.props.tooltip : (this.props.error? this.props.error : '')}
        </Tooltip>
        <Triangle up
          color={`${error? theme.colors.danger.bg.main : theme.colors.info.bg.main}`}
          size='12px'
          style={{
            display: (this.state.tooltipVisible || this.props.error)? 'block' : 'none',
            position: 'absolute',
            bottom: '-0.125em',
            left: theme.spacing.gutters[1]
          }}
        />

          
        
        <If condition={this.props.iconTooltip}>
          <Tooltip top
            style={{display: this.state.iconTooltipVisible? 'block' : 'none'}}
          >
            {this.props.iconTooltip}
          </Tooltip>
        </If>
        <InputWrapper
          style={{
            boxShadow: this.state.expanded? theme.shadows[0] : 'none',
            cursor: this.props.selectOnly? 'pointer' : 'auto'
          }}
          onClick={() => {
            if(this.props.selectOnly) this.setState({...this.state, expanded: true})
          }}
        >
          <If condition={this.props.iconStyle}>
            <IconWrapper
              onMouseOver={() => {
                this.setState({...this.state, iconTooltipVisible: true})
              }}
              onMouseOut={() => {
                this.setState({...this.state, iconTooltipVisible: false})
              }}
            >
              <Icon style={this.props.iconStyle} />
            </IconWrapper>
          </If>
          <If condition={this.props.label && !this.props.iconStyle}>
            <InlineLabel onClick={() => this.state.inputRef.current.focus()}>
              {this.props.label}
            </InlineLabel>
          </If>
          <If condition={!this.props.noTextInput}>
            <TextInput
              name={this.props.name}
              data-require={this.props.required? 'true' : ''}
              ref={this.state.inputRef}
              className={this.props.selectOnly? 'no-outline' : ''}
              error={this.props.error}
              style={{
                cursor: this.props.selectOnly? 'pointer' : 'auto',
                textAlign: this.props.selectOnly? 'center' : 'left'
              }}
              readOnly={this.props.selectOnly}
              roundLeft={!this.props.iconStyle && !this.props.label}
              onChange={(e) => {
                if (this.props.onChange)
                  this.props.onChange()
                this.setState({...this.state, value: e.target.value})
              }}
              onFocus={(e) => {
                if (this.props.value) {
                  this.setState({...this.state, value: this.props.value})
                }
                if (this.props.onFocus)
                  this.props.onFocus(e)
              }}
              onBlur={(e) => {
                if (this.props.onBlur) {
                  const result = this.props.onBlur(e.target.value)
                  if (result) {
                    this.setState({...this.state, value: result})
                  }
                }
              }}
              placeholder={this.props.placeholder}
              value={this.props.selectOnly? this.props.value : this.state.value}
              
            />
          </If>
          <If condition={this.props.dropdownBtn}>
            <Icon leftSeparator
              onClick={() => {
                if (this.props.children)
                  this.setState({...this.state, expanded: true})
              }}
              style={{
                cursor: this.props.children? 'pointer' : 'auto',              
                opacity: this.props.children? 1 : 0.5              
              }}
            >
              <ArrowDown
                style={{
                  fontSize: `2em`,
                  top: `50%`,
                  left: `50%`,
                  transform: `translate(-50%, -50%) scaleY(${this.state.expanded? -1 : 1})`,
                  transition: 'transform 0.25s'
                }}
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
                className: className,
                onClick: () => {
                  if (this.props.onSelect)
                    this.props.onSelect(child.props.children)
                  this.setState({
                    expanded: false,
                    value: child.props.children
                  })
                }
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
  font-weight: ${p => p.error? 400 : 300};
  background-color: transparent;
  color: ${p => p.error? p.theme.colors.danger.txt.dark : p.theme.colors.base.txt.main};


  &::placeholder {
    opacity: 0.5;
    font-weight: 300;
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
  top: calc(50% + 0.55em);
  right: -${tooltipBtnInset};
  transform: translateY(-50%);
  z-index: 10;
  cursor: pointer;

  &:hover ~ .tooltip {
    display: block;
  }

  @media (min-width: ${[p => p.theme.breakpoints.md]}) {  
    top: 50%;
  }
`

const Tooltip = styled.div`
  display: ${p => p.error? 'block' : 'none'};
  font-size: 0.875em;
  position: absolute;
  ${p => p.top? 'top: 0' : 'bottom: 0'};
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 0.75em;
  background-color: ${p => p.error? p.theme.colors.danger.bg.main : p.theme.colors.info.bg.main};
  border-radius: ${p => p.theme.spacing.rounding};
  color: ${p => p.error? p.theme.colors.danger.txt.main : p.theme.colors.info.txt.main};
  z-index: 100;
  transform: translateY(calc(${p => p.top? '-100% - 0.125em' : '100% + 0.125em'}));
  box-shadow: ${p => p.theme.shadows[0]};

`