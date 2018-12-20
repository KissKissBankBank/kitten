import React, { Component } from 'react'
import { Item } from './components/item'
import { Header } from './components/header'
import { Content } from './components/content'
import { Context } from './components/context'
import { Marger } from '../layout/marger'

export class Accordeon extends Component {
  static Item = Item
  static Header = Header
  static Content = Content

  constructor(props) {
    super(props)
    this.state = {
      selectedItem: null,
      updateSelectedItem: this.updateSelectedItem,
    }
  }
  updateSelectedItem = newSelectedItemId => {
    this.setState({ selectedItem: newSelectedItemId })
  }

  render() {
    const { children } = this.props
    const items = React.Children.toArray(children).filter(
      child => child.type === Accordeon.Item,
    )

    return (
      <Context.Provider value={this.state}>
        {items.map((item, index) => (
          <Marger key={index} bottom={index === items.length - 1 ? 0 : 1.5}>
            {React.cloneElement(item, { id: index })}
          </Marger>
        ))}
      </Context.Provider>
    )
  }
}
