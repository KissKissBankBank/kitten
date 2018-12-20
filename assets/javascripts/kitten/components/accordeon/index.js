import React, { Component, Fragment } from 'react'
import { Item } from './components/item'
import { Header } from './components/header'
import { Content } from './components/content'
import { Context } from './components/context'
import { Marger } from '../layout/marger'

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
      <Context.Provider value={selectedItem}>
        {items.map((item, index) => (
          <Marger key={index} bottom={index === items.length - 1 ? 0 : 1.5}>
            {React.cloneElement(item, { id: index })}
          </Marger>
        ))}
      </Context.Provider>
    )
  }
}
