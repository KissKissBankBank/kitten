import React from 'react'
import classNames from 'classnames'

export class Header extends React.Component {
  render() {
    const { className, children, isFixed, ...other } = this.props
    const headerClassName = classNames(
      'k-Header',
      { 'is-fixed': isFixed },
      className,
    )

    return (
      <header className={ headerClassName }
              role="banner"
              { ...other }>
        <div className="k-Header__container">
          <div className="k-Header__row">
            { children }
          </div>
        </div>
      </header>
    )
  }
}

export class HeaderItems extends React.Component {
  render() {
    const { className, children, fixedSize, ...other } = this.props
    const itemsClassName = classNames(
      'k-Header__items',
      { 'k-Header__items--fixedSize': fixedSize },
      className,
    )

    return (
      <div className={ itemsClassName } {...other }>
        { children }
      </div>
    )
  }
}

export class HeaderItem extends React.Component {
  render() {
    const { className, children, fixedSize, ...other } = this.props
    const Tag = this.props.tag
    const itemClassName = classNames(
      'k-Header__item',
      { 'k-Header__item--fixedSize': fixedSize },
      className,
    )

    return (
      <Tag className={ itemClassName } {...other }>
        { children }
      </Tag>
    )
  }
}

Header.defaultProps = {
  isFixed: false,
}

HeaderItems.defaultProps = {
  fixedSize: false,
}

HeaderItem.defaultProps = {
  tag: 'div', // 'div', 'p', 'nav', …
  fixedSize: false,
}
