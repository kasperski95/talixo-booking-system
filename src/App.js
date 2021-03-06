import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import resx, { ResxContext } from './components/resx'

import WhenPage from './components/pages/When'
import WhatPage from './components/pages/What'
import PaymentPage from './components/pages/Payment'
import AppWrapper from './components/atoms/AppWrapper'
import theme from './components/theme'
import Style from './components/Style'

import { 
  updateWindowWidth
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
              <AppWrapper>
                <Router>
                  <Route 
                    exact path={["/", "/booking", "/booking/when"]} 
                    render={ routeProps => <WhenPage {...routeProps}/> }
                  />
                   
                  <Route path="/booking/what"
                    render={ routeProps => <WhatPage {...routeProps}/> }
                  />

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
  callbackOfPopupHider: state.callbackOfPopupHider
})
const mapDispatchToProps = dispatch => ({
  updateWindowWidthInfo: val => dispatch(updateWindowWidth(val)),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)