import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from '../organisms/Header'
import { ResxContext } from '../resx.js'
import OrderedNavigation from '../organisms/OrderedNavigation'
import Page from '../molecules/Page'
import Scrollbar from 'react-scrollbars-custom'
 


class What extends Component {
  
  render() {
    const data = this.context;
    document.title = `[2/3] ${data.title} - ${data.chooseCar}`

    const { ...props } = this.props;
    return (
      <React.Fragment>
        <Header />

        <Page>
          <OrderedNavigation active={1}
            data={[
              {children: data.whenAndWhen, onClick: () => {props.history.push('/booking/when')}},
              {children: data.chooseCar},
              {children: data.detailsAndPayment}
            ]}
          />
          <h2>Store</h2>
          <pre style={{fontSize: '0.7em'}}>
            {JSON.stringify(props.store, null, 2)}
          </pre>
        </Page>

      </React.Fragment>
    )
  }
}
What.contextType = ResxContext;

const mapStateToProps = state => ({store: state})
export default connect(mapStateToProps, null)(What)