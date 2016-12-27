import React from 'react'
import classNames from 'classnames'

export default class Stepper extends React.Component {

  breakLine(text) {
    const regex = /(\n)/i

    return text.split(regex).map((line) => {
      return line.match(regex) ? <br className="k-Stepper__break" /> : line
    })
  }

  renderItems() {
    const items = this.props.items
    const itemClassNames = classNames(
      'k-Stepper__item',
      { 'k-Stepper__item--tinySpacing': this.props.withTinySpacing },
    )

    return items.map((item) => {
      const linkClassNames = classNames(
        'k-Stepper__link',
        item.linkClassNames,
      )

      return <li className={ itemClassNames }>
        <a className={ linkClassNames } href={ item.href }>
          { this.breakLine(item.text) }
        </a>
      </li>
    })
  }

  render() {
    if (!this.props.items.length)
      return false

    const listClassNames = classNames(
      'k-Stepper__list',
      { 'k-Stepper__list--alignStart': this.props.isAlignStart },
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
  isAlignStart: false,
  withTinySpacing: false,
  items: [],
}
