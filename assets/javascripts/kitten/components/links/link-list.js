import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class LinkList extends Component {
  constructor() {
    super()

    this.renderItem = this.renderItem.bind(this)
  }

  renderItems() {
    return this.props.items.map(this.renderItem)
  }

  renderItem(element) {
    const { key, item, href, active, className, ...others } = element

    const { color, lineHeight, itemMargin, weight } = this.props

    const linkListClassName = classNames('k-LinkList__link', className, {
      'is-active': active,
      'k-LinkList__link--light': color == 'light',
      'k-LinkList__link--dark': color == 'dark',
      'k-LinkList__link--normalLineHeight': lineHeight == 'normal',
      'k-LinkList__link--regularWeight': weight == 'regular',
      'k-LinkList__link--lightWeight': weight == 'light',
    })

    const linkListItemClassName = classNames('k-LinkList__item', {
      'k-LinkList__item--doubleMargin': itemMargin == 'double',
    })

    return (
      <li className={linkListItemClassName} key={key}>
        <a {...others} href={href} className={linkListClassName}>
          {item}
        </a>
      </li>
    )
  }

  render() {
    const {
      className,
      margin,
      items,
      lineHeight,
      itemMargin,
      ...others
    } = this.props

    const listClassName = classNames('k-LinkList', className, {
      'k-LinkList--withoutMargin': !margin,
    })

    return (
      <ul {...others} className={listClassName}>
        {this.renderItems()}
      </ul>
    )
  }
}

LinkList.defaultProps = {
  color: PropTypes.oneOf(['light', 'dark']),
  lineHeight: PropTypes.oneOf(['normal']),
  itemMargin: PropTypes.oneOf(['double']),
  weight: PropTypes.oneOf(['regular', 'light']),
}

LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [], // Eg: [{ key: …, item: …, href: … }]
  color: 'dark',
  lineHeight: null,
  itemMargin: null,
  weight: 'regular',
}
