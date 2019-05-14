import React, {Component} from 'react'
import StylishOrderedList from '../molecules/StylishOrderedList'
import {SM} from '../theme'
import If from '../atoms/If'



class OrderedNavigation extends Component {
  render() {
    const {data, active, ...props} = this.props
    return (
      <SM
        children={
          <StylishOrderedList sm 
            style={{boxSizing: 'border-box', padding: '0', display: 'flex'}}
            {...props}
          > 
            <If condition={active > 0}>
              <div style={{flex: 'none'}}>        
                {data.slice(0, active).map( ({ children, ...itemProps }, index) => <li {...itemProps} className='enabled' key={`ordered-nav-${index}`} /> )}
              </div>
            </If>
            <div style={{flex: 1}}>
              <li {...data[active]} className='active' />
            </div>
            <If condition={active < data.length}>
              <div style={{flex: 'none'}}>        
                {data.slice(active+1).map( ({children, ...itemProps}, index) => <li {...itemProps} key={`ordered-nav-${index}`} /> )}
              </div>
            </If>
          </StylishOrderedList>
        }

        else={
          <StylishOrderedList style={{textAlign: `center`}} {...props}>
            {data.map( (itemProps, index) => {
              let className = ''
              if (index < active) className = 'clickable'
              if (index === active) className = 'active'
              return <li {...itemProps} className={className} key={`ordered-nav-${index}`} />
            } )}
          </StylishOrderedList>
        }
      />
    )
  }
}
export default OrderedNavigation