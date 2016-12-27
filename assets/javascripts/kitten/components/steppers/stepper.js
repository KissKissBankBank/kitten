import React from 'react'
import classNames from 'classnames'

export class Stepper extends React.Component {

  breakLine(text) {
    const regex = /(\n)/i

    return text.split(regex).map((line) => {
      return line.match(regex) ? <br className="k-Stepper__break" /> : line
    })
  }

  renderLink(item) {
    const Tag = item.focusable === false ? 'span' : 'a'
    const attrs = {
      className: classNames(
        'k-Stepper__link',
        item.linkClassNames,
      ),
      href: Tag == 'a' ? item.href : null
    }

    return <Tag { ...attrs }>
      { this.breakLine(item.text) }
    </Tag>
  }

  renderItems() {
    const items = this.props.items
    const itemClassNames = classNames(
      'k-Stepper__item',
      { 'k-Stepper__item--tinySpacing': this.props.withTinySpacing },
    )

    return items.map((item) => {
      return <li className={ itemClassNames }>
        { this.renderLink(item) }
      </li>
    })
  }

  render() {
    if (!this.props.items.length)
      return false

    const listClassNames = classNames(
      'k-Stepper__list',
      { 'k-Stepper__list--alignStart': this.props.withAlignStart },
    )

    return (
      <nav className="k-Stepper" role="navigation">
        <ul className={ listClassNames }>
          { this.renderItems() }
        </ul>
      </nav>
    )
  }
}

Stepper.defaultProps = {
  withAlignStart: false,
  withTinySpacing: false,
  items: [],
}
