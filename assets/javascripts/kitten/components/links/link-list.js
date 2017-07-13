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
    const { key, content, href, active } = element

    const linkListClassName = classNames(
      'k-LinkList__link',
      {
        'is-active': active,
      },
    )

    return (
      <li className="k-LinkList__content">
        <a
          href={ href }
          key={ key }
          className={ linkListClassName }
          active={ active }>
          { content }
        </a>
      </li>
    )
  }

  render() {
    const {
      className,
      ...others,
    } = this.props

    const listClassName = classNames(
      'k-LinkList',
      className,
    )

    return (
      <ul className={ listClassName } { ...others }>
        { this.renderItems() }
      </ul>
    )
  }
}

LinkList.defaultProps = {
  className: null,
  items: [], // Eg: [{ key: …, content: …, href: … }]
  href: '#',
}
