import React, { Component, Fragment } from 'react'
import { Marger } from '../layout/marger'

const Item = props => <div {...props} />
const Header = props => <div {...props} />
const Content = props => <div {...props} />

export class Accordeon extends Component {
  static Item = Item
  static Header = Header
  static Content = Content

  render() {
    const { children } = this.props
    const items = React.Children.toArray(children).filter(
      child => child.type === Accordeon.Item,
    )

    return (
      <Fragment>
        {items.map(item => (
          <Marger bottom="1.5">{item}</Marger>
        ))}
      </Fragment>
    )
  }
}
