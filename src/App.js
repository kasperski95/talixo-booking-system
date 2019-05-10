import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components'

import When from './components/pages/When'
import What from './components/pages/What'
import Payment from './components/pages/Payment'
import AppWrapper from './components/atoms/AppWrapper'
import theme from './components/theme'
import Style from './components/Style'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Style />
        <AppWrapper>
          <Router>
            {/* <Link to="/booking/when">Home</Link>
            <Link to="/booking/what">About</Link>
            <Link to="/booking/details-and-payment">Users</Link> */}
            <Route exact path={["/", "/booking", "/booking/when"]} component={When} />
            <Route path="/booking/what" component={What} />
            <Route path="/booking/details-and-payment" component={Payment} />
          </Router>
        </AppWrapper>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
