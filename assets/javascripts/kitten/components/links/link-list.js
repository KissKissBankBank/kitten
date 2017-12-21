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
    const {
      key,
      item,
      href,
      active,
    } = element

    const { color } = this.props

    const linkListClassName = classNames(
      'k-LinkList__link',
      {
        'is-active': active,
        'k-LinkList__link--light': color ==  'light',
        'k-LinkList__link--dark': color ==  'dark',
      },
    )

    return (
      <li
        className="k-LinkList__item"
        key={ key }
      >
        <a
          href={ href }
          className={ linkListClassName }
        >
          { item }
        </a>
      </li>
    )
  }

  render() {
    const {
      className,
      margin,
      items,
      ...others,
    } = this.props

    const listClassName = classNames(
      'k-LinkList',
      className,
      {
        'k-LinkList--withoutMargin': !margin,
      }
    )

    return (
      <ul className={ listClassName } { ...others }>
        { this.renderItems() }
      </ul>
    )
  }
}

LinkList.defaultProps = {
  color: PropTypes.oneOf(['light', 'dark']),
}

LinkList.defaultProps = {
  className: null,
  margin: true,
  items: [], // Eg: [{ key: …, item: …, href: … }]
  color: 'dark',
}
