import React from 'react'
import classNames from 'classnames'
import {
  StepperIconDefault,
  StepperIconInProgress,
  StepperIconValidated,
} from 'kitten/components/steppers/stepper-icon'

const iconTypeComponents = {
  'default': StepperIconDefault,
  'inProgress': StepperIconInProgress,
  'validated': StepperIconValidated,
}

export class Stepper extends React.Component {
  lineBreaks(text) {
    const regex = /(\n)/i

    return text.split(regex).map((line, index) =>
      line.match(regex)
      ? <br className="k-Stepper__break" key={ index } />
      : line
    )
  }

  renderLink(item) {
    const Tag = item.href ? 'a' : 'span'
    const IconType = iconTypeComponents[item.iconType]
    const attrs = {
      className: classNames(
        'k-Stepper__link',
        item.linkClassNames,
      ),
      href: Tag == 'a' ? item.href : null,
    }

    return <Tag { ...attrs }>
      <IconType />
      { this.lineBreaks(item.text) }
    </Tag>
  }

  renderItems() {
    const items = this.props.items
    const itemClassNames = classNames(
      'k-Stepper__item',
      { 'k-Stepper__item--tinySpacing': this.props.withTinySpacing },
    )

    return items.map((item, index) =>
      <li className={ itemClassNames } key={ index }>
        { this.renderLink(item, index) }
      </li>
    )
  }

  render() {
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
