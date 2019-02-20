import React, { Component } from 'react'
import classNames from 'classnames'
import Markdown from 'react-markdown'

export class TabBar extends Component {
  renderItems() {
    const { items } = this.props

    return items.map((item, key) => this.renderItem(item, key))
  }

  renderItem(item, key) {
    const { className, selected, text, ...linkProps } = item

    const itemClassName = classNames('k-TabBar__item', className, {
      'is-selected': selected,
    })

    return (
      <li key={key}>
        <a className={itemClassName} {...linkProps}>
          <Markdown softBreak="br" source={text} />
        </a>
      </li>
    )
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={classNames('k-TabBar', this.props.className)}
      >
        <nav className={classNames('k-TabBar__nav', this.props.navClassName)}>
          <ul
            className={classNames('k-TabBar__list', this.props.listClassName)}
          >
            {this.renderItems()}
          </ul>
        </nav>
      </div>
    )
  }
}

TabBar.defaultProps = {
  id: null,
  className: null,
  navClassName: null,
  listClassName: null,
  items: [],
}
