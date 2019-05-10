import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ThemeProvider } from 'styled-components'
import './App.css';

import When from './components/pages/When'
import What from './components/pages/What'
import Payment from './components/pages/Payment'
import Header from './components/organisms/Header'
import { theme } from './components/theme'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Header />
          <Router>
            <Link to="/booking/when">Home</Link>
            <Link to="/booking/what">About</Link>
            <Link to="/booking/details-and-payment">Users</Link>
            <Route exact path={["/", "/booking", "/booking/when"]} component={When} />
            <Route path="/booking/what" component={What} />
            <Route path="/booking/details-and-payment" component={Payment} />
          </Router>
        </React.Fragment>
      </ThemeProvider>
    </div>
  );
}

export default App;
