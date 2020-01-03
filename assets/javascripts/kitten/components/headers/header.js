import React from 'react'
import classNames from 'classnames'

export class Header extends React.Component {
  render() {
    const { className, children, fixed, ...other } = this.props
    const headerClassName = classNames(
      'k-Header',
      { 'is-fixed': fixed },
      className,
    )

    return (
      <header className={headerClassName} role="banner" {...other}>
        <div className="k-Header__container">
          <div className="k-Header__row">{children}</div>
        </div>
      </header>
    )
  }
}

export class HeaderItems extends React.Component {
  render() {
    const { className, fixedSize, ...other } = this.props
    const itemsClassName = classNames(
      'k-Header__items',
      { 'k-Header__items--fixedSize': fixedSize },
      className,
    )

    return <div className={itemsClassName} {...other} />
  }
}

export class HeaderItem extends React.Component {
  render() {
    const { className, fixedSize, centered, tag, ...other } = this.props
    const Tag = tag
    const itemClassName = classNames(
      'k-Header__item',
      {
        'k-Header__item--fixedSize': fixedSize,
        'k-Header__item--centered': centered,
      },
      className,
    )

    return <Tag className={itemClassName} {...other} />
  }
}

export const HEADER_HEIGHT = 65

Header.defaultProps = {
  fixed: false,
}

HeaderItems.defaultProps = {
  fixedSize: false,
}

HeaderItem.defaultProps = {
  tag: 'div', // 'div', 'p', 'nav', …
  fixedSize: false,
  centered: false,
}
