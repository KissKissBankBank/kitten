import React from 'react'
import classNames from 'classnames'
import { Checkbox } from 'kitten/components/form/checkbox'

export class CheckboxSet extends React.Component {
  constructor(props) {
    super(props)
    this.renderCheckbox = this.renderCheckbox.bind(this)
  }

  renderCheckbox(item, index) {
    const { className, ...itemProps } = item
    const checkboxClassName = classNames('k-CheckboxSet__checkbox', className)
    const validName = (this.props.name || 'k-CheckboxSet').replace(/[^\w]/g, '')
    const uniqId = `${validName}${index}`

    return(
      <Checkbox className={ checkboxClassName }
                error={ this.props.error }
                name={ this.props.name }
                key={ uniqId }
                id={ uniqId }
                { ...itemProps } />
    )
  }

  renderCheckboxes() {
    const { items, className, name, error, ...checkboxSetProps } = this.props
    const checkboxSetClassName = classNames(
      'k-CheckboxSet',
      className
    )

    return (
      <div className={ checkboxSetClassName } { ...checkboxSetProps }>
        { this.props.items.map(this.renderCheckbox) }
      </div>
    )
  }

  render() {
    return (
      <div>
        { this.renderCheckboxes() }
      </div>
    )
  }
}

CheckboxSet.defaultProps = {
  name: 'checkboxSet[]',
  items: [{
    label: 'filter 1',
    defaultChecked: true,
  }],
}
