import React from 'react'
import classNames from 'classnames'
import { RadioButton } from 'kitten/components/form/radio-button'

export class RadioButtonSet extends React.Component {
  constructor(props) {
    super(props)
    this.createRadioButton = this.createRadioButton.bind(this)
  }

  createRadioButton(item) {
    const { label, checked, children } = item
    const { items, className, ...inputProps } = this.props
    const radioButtonClassName = classNames(
      'k-RadioButtonSet__radio-button',
      className
    )

    return(
      <RadioButton text={ label }
                   children={ children }
                   className={ radioButtonClassName }
                   { ...inputProps }
                   defaultChecked={ checked } />
    )
  }

  createRadioButtons() {
    return this.props.items.map(this.createRadioButton)
  }

  render() {
    return (
      <div>
        { this.createRadioButtons() }
      </div>
    )
  }
}

RadioButtonSet.defaultProps = {
  items: [{
    label: 'filter 1',
    children: 'lorem ipsum dolor',
    checked: true,
  }],
}
