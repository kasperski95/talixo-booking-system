import { Component } from 'react'
import { connect } from 'react-redux'


const theme = {
  colors: {
    base: {
      bg: {
        light: 'white',
        main: '#f5f5f5',
        dark: '#d1d5d8',
      },
      txt: {
        light: '#adadad',
        main: '#1E2731',
      },
    },

    primary: {
      bg: {
        main: '#3e444C',
        dark: '#1D2630',
      },

      txt: {
        main: 'white',
        dark: '#49565E',
      },
    },

    accent: {
      light: '#fe7d0a',
      main: '#ff4800'
    },

    info: {
      bg: {
        main: '#111'
      },
      txt: {
        main: '#888'
      }
    },

    danger: {
      bg: {
        main: '#D11'
      },
      txt: {
        main: 'white',
        dark: '#E33'
      }
    }
  },


  spacing: {
    header: '2.25em',
    maxWidth: '980px',
    inputHeight: '3em',
    gutters: ['0.5em', '1em', '1.5em', '2em', '2.5em', '3em'],
    rounding: '0.25em'
  },


  shadows: ['0 0.25em 0.375em -1px rgba(0,0,0,0.5)'],


  breakpoints: {
    md: '768px',
    lg: '1024px'
  }
}

export default theme;



class Sm extends Component {
  render() {
    if (this.props.windowWidth < parseInt(theme.breakpoints.md))
      return this.props.children

    if (this.props.else)
      return this.props.else

    return (null)
  }
}

class Md extends Component {
  render() {
    if (this.props.windowWidth < parseInt(theme.breakpoints.lg))
      return this.props.children

    if (this.props.else)
      return this.props.else

    return (null)
  }
}

// ===============================================================================
// REDUX
const mapStateToProps = state => ({
  windowWidth: state.windowWidth
})
export const SM = connect(mapStateToProps, null)(Sm)
export const MD = connect(mapStateToProps, null)(Md)