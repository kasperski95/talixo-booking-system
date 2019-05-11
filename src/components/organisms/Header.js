import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import DropDownBtn from './DropDownBtn'
import { getResxMetaData } from '../resx'
import { updateDdmVisibility, changeLanguage } from '../../actions'



class Header extends Component {
  render(){
    return (
      <React.Fragment>
        <HeaderWrapper>
          <Logo />
          <Right>
            <DropDownBtn
              style={{height: `100%`}}
              label={<span style={{fontSize: `0.85em`}}>{this.props.lang.toUpperCase()}</span>}
              animate
              expanded={this.props.dropdownMenuVisible}
            />
          </Right>
        </HeaderWrapper>

        <DropDownMenu
          style={this.props.dropdownMenuVisible? {display: `block`} : {display: `none`}}
          onMouseOver={(e) => {this.props.updateDdmVisibility(true);}}
          onMouseLeave={(e) => {this.props.updateDdmVisibility(false);}}
        >
          {/* TODO */}
          {Object.entries(getResxMetaData()).map( ([key, el]) => (
            <DropDownMenuItem key={`header-ddm-item-${key}`}
              style={this.props.lang === key? {fontWeight: `600`} : {}}
              onClick={() => {this.props.changeLanguage(key)}}
            >
              <FlagSprite offset={el.iconOffset} /><span style={{fontSize: `0.85em`}}>{`${el.label} (${key.toUpperCase()})`}</span>
            </DropDownMenuItem>
          ))}
        </DropDownMenu>
    </React.Fragment>
    )
  }
}


// ===============================================================================
// REDUX
const mapStateToProps = state => ({
  dropdownMenuVisible: state.dropdownMenuVisible,
  lang: state.lang
})
const mapDispatchToProps = dispatch => ({
  updateDdmVisibility: val => dispatch(updateDdmVisibility(val)),
  changeLanguage: val => dispatch(changeLanguage(val))
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)



// ===============================================================================
// PRIVATE COMPONENTS

const HeaderWrapper = styled.header`
  width: 100%;
  padding: 0em 1em;
  height: 2.25em;
  background-color: ${props => props.theme.colors.primary.bg.main};
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
`;


const DropDownMenuItem = styled.li`
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.accent.light};
  }
`


const Logo = styled.img.attrs({
  src: '/img/talixo_logo.png'
})`
  height: 1.3725em;
  flex: 0 0;
`;


const Right = styled.div`
  flex: 1 1;
  text-align: right;
  color: ${props => props.theme.colors.accent.main};
`;


const DropDownMenu = styled.ul`
  display: block;
  width: 9em;
  background-color: ${props => props.theme.colors.primary.bg.main};
  position: absolute;
  top: ${props => props.theme.spacing.header};
  right: 0.5em;
  margin: 0em;
  padding: 0.75em 1em;
  list-style-type: none;
  color: ${props => props.theme.colors.accent.main};
  text-align: left;
  box-shadow: ${props => props.theme.shadows[0]};

  li {
    margin-bottom: 1em;
  }
  li:last-of-type{
    margin-bottom: 0em;
  }
`

const FlagSprite = styled.div`
  width: 27px;
  height: 16px;
  display: inline-block;
  background-image: url("/img/icons/flags.png");
  background-position: 0px ${props => `${-props.offset}px` || `0px`};
  transform: translateY(3px);
  margin-right: 1em;
`