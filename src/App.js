import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import resx, { ResxContext } from './components/resx'

import WhenPage from './components/pages/When'
import WhatPage from './components/pages/What'
import PaymentPage from './components/pages/Payment'
import AppWrapper from './components/atoms/AppWrapper'
import PopupHider from './components/atoms/PopupHider'
import theme from './components/theme'
import Style from './components/Style'

import { 
  updateWindowWidth,
  updatePopupHiderVisibility
} from './actions/'


class App extends Component {
  constructor() {
    super();

    window.addEventListener('resize', () => {
      this.props.updateWindowWidthInfo(window.innerWidth);
    }, true)
  }

  getResx() {
    if (Object.keys(resx[this.props.lang]).length < Object.keys(resx['en']).length) {
      console.error(`Lanaguage "${this.props.lang}" is not completely implemented.`);
    }
    return resx[this.props.lang];
  }

  
  render() {
    return (
        <ThemeProvider theme={theme}>
          <ResxContext.Provider value={this.getResx()}>
            <React.Fragment>
              <Style />
              <PopupHider
                style={{display: this.props.popupHiderVisibility? 'block' : 'none'}}
                onClick={() => {
                  this.props.hidePopups() // only calendar
                }}
              />
              <AppWrapper>
                <Router>
                  {/* <Link to="/booking/when">Home</Link>
                  <Link to="/booking/what">About</Link>
                  <Link to="/booking/details-and-payment">Users</Link> */}
                  
                  <Route exact path={["/", "/booking", "/booking/when"]} 
                    component={() => <WhenPage />} />
                   
                  <Route path="/booking/what"
                    component={() => <WhatPage />} />

                  <Route path="/booking/details-and-payment"
                    component={() => <PaymentPage />} />
                </Router>
              </AppWrapper>
            </React.Fragment>
          </ResxContext.Provider>
        </ThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  lang: state.lang,
  popupHiderVisibility: state.popupHiderVisibility,
  callbackOfPopupHider: state.callbackOfPopupHider
})
const mapDispatchToProps = dispatch => ({
  updateWindowWidthInfo: val => dispatch(updateWindowWidth(val)),
  hidePopups: () => dispatch(updatePopupHiderVisibility(false))
})
export default connect(mapStateToProps, mapDispatchToProps)(App)