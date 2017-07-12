import React, { Component } from 'react'
import classNames from 'classnames'

export class LinkList extends Component {
  constructor() {
    super()

    this.renderItem = this.renderItem.bind(this)
  }

  renderItems() {
    return this.props.items.map(this.renderItem)
  }

  renderItem(element) {

    const { key, item } = element
    const itemClassName = classNames(
      'k-LinkList__item',
    )

    return (
      <li key={ key } className={ itemClassName }
        { item }
      </li>
    )
  }

  render() {
    return (
      <ul className="k-LinkList">
        { this.renderItems() }
      </ul>
    )
  }
}
