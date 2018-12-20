import React, { Component, Fragment } from 'react'
import { Marger } from '../layout/marger'

const AccordeonContext = React.createContext(0)

const Item = props => <div {...props} />
const Header = props => <div {...props} />
const Content = props => {
  return (
    <AccordeonContext.Consumer>
      {selectedItem => {
        return selectedItem === props.id && <div {...props} />
      }}
    </AccordeonContext.Consumer>
  )
}

export class Accordeon extends Component {
  static Item = Item
  static Header = Header
  static Content = Content

  state = {
    selectedItem: 0,
  }

  render() {
    const { selectedItem } = this.state
    const { children } = this.props
    const items = React.Children.toArray(children).filter(
      child => child.type === Accordeon.Item,
    )

    return (
      <AccordeonContext.Provider value={selectedItem}>
        {items.map((item, index) => (
          <Marger key={index} bottom={index === items.length - 1 ? 0 : 1.5}>
            {React.cloneElement(item, { id: index })}
          </Marger>
        ))}
      </AccordeonContext.Provider>
    )
  }
}
