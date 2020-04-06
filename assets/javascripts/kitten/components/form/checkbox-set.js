import React from 'react'
import classNames from 'classnames'
import { Checkbox } from '../../components/form/checkbox'

export class CheckboxSet extends React.Component {
  constructor(props) {
    super(props)
    this.renderCheckbox = this.renderCheckbox.bind(this)
  }

  renderCheckbox(item) {
    const { className, ...itemProps } = item
    const checkboxClassName = classNames('k-CheckboxSet__checkbox', className)

    return (
      <Checkbox
        className={checkboxClassName}
        error={this.props.error}
        name={this.props.name}
        key={item.id}
        {...itemProps}
      />
    )
  }

  render() {
    const { items, className, name, error, ...checkboxSetProps } = this.props
    const checkboxSetClassName = classNames('k-CheckboxSet', className)

    return (
      <div className={checkboxSetClassName} {...checkboxSetProps}>
        {this.props.items.map(this.renderCheckbox)}
      </div>
    )
  }
}

CheckboxSet.defaultProps = {
  name: 'checkboxSet[]',
  error: false,
  items: [
    {
      label: 'filter 1',
      defaultChecked: true,
      id: 'myCheckbox', // Replace by a real value
    },
  ],
}
