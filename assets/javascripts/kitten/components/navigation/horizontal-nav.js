import React, { Component } from 'react'
import { Badge } from 'kitten/components/notifications/badge'
import classNames from 'classnames'
import Markdown from 'react-markdown'

export class HorizontalNav extends Component {
  renderNotification() {
    if (!this.props.notification) return

    return (
      <div>
        <Badge />
      </div>
    )
  }

  renderItems() {
    const { items } = this.props

    return items.map((item) => this.renderItem(item))
  }

  renderItem(item) {
    const {
      className,
      selected,
      text,
      key,
      href,
      notification,
      ...others,
    } = item

    const itemClassName = classNames(
      'k-HorizontalNav__item',
      className,
      { 'is-selected': selected },
    )

    return (
      <li
        className={ classNames('k-HorizontalNav__element',
                               this.props.elementClassName) }
        key={ key }
        role="menuitem"
        { ...others }
      >
        <a
          href={ href }
          className={ itemClassName }
          style={ {
            height: this.props.height,
          } }
        >
          <Markdown softBreak="br" source={ text } />
        </a>
        { this.renderNotification() }
      </li>
    )
  }

  render() {
    const {
      className,
      center,
      ...others,
    } = this.props

    const navClassNames = classNames(
      'k-HorizontalNav',
       className,
      { 'k-HorizontalNav--center': center },
    )

    return (
      <ul
        role="menubar"
        id={ this.props.id }
        className={ navClassNames }
      >
        { this.renderItems() }
      </ul>
    )
  }
}

HorizontalNav.defaultProps = {
  id: null,
  className: null,
  height: 'auto',
  center: false,
  elementClassName: null,
  items: [],
  notification: false,
}
