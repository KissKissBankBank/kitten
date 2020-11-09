import React from 'react'
import classNames from 'classnames'
import { RadioButton } from '../../../components/form/radio-button'

export class RadioButtonSet extends React.Component {
  constructor(props) {
    super(props)
    this.renderRadioButton = this.renderRadioButton.bind(this)
  }

  renderRadioButton(item) {
    const { className, ...itemProps } = item
    const radioButtonClassName = classNames(
      'k-RadioButtonSet__radioButton',
      className,
    )

    return (
      <RadioButton
        className={radioButtonClassName}
        error={this.props.error}
        name={this.props.name}
        key={item.id}
        {...itemProps}
      />
    )
  }

  render() {
    const { items, className, name, error, ...radioButtonSetProps } = this.props
    const radioButtonSetClassName = classNames('k-RadioButtonSet', className)

    return (
      <div className={radioButtonSetClassName} {...radioButtonSetProps}>
        {this.props.items.map(this.renderRadioButton)}
      </div>
    )
  }
}

RadioButtonSet.defaultProps = {
  name: 'radioButtonSet',
  error: false,
  items: [
    {
      text: 'filter 1',
      children: 'lorem ipsum dolor',
      defaultChecked: true,
      id: 'myRadioButton', // Replace by a real value
    },
  ],
}
