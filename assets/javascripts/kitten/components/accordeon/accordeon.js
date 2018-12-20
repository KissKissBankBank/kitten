import React, { Component } from 'react'

const Item = () => <div />
const Header = () => <div />
const Content = () => <div />

class Accordeon extends Component {
  static Item = Item
  static Header = Header
  static Content = Content

  render() {
    const items = React.Children.toArray(children).filter(
      child => child.type === Accordeon.Item,
    )
    return items
  }
}

export default Accordeon
