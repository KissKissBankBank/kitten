import React, { Component } from 'react'
import classNames from 'classnames'
import Markdown from 'react-markdown'

export class HorizontalNav extends Component {
  renderItems() {
    const { items } = this.props

    return items.map((item, key) => this.renderItem(item, key))
  }

  renderItem(item, key) {
    const { className, selected, text, ...linkProps } = item
    const itemClassName = classNames(
      "k-HorizontalNav__item",
      className,
      { "is-selected": selected },
    )

    return (
      <li key={ key }>
        <a className={ itemClassName } { ...linkProps }>
          <Markdown softBreak="br" source={ text } />
        </a>
      </li>
    )
  }

  render() {
    return (
      <div
        id={ this.props.id }
        className={ classNames("k-HorizontalNav", this.props.className) }
      >
        <ul
          className={ classNames("k-HorizontalNav__element",
                                 this.props.elementClassName) }
        >
          { this.renderItems() }
        </ul>
      </div>
    )
  }
}

HorizontalNav.defaultProps = {
  id: null,
  className: null,
  elementClassName: null,
  items: [],
}
