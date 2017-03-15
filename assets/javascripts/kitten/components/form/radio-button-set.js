import React from 'react'
import classNames from 'classnames'
import { RadioButton } from 'kitten/components/form/radio-button'

export class RadioButtonSet extends React.Component {
  constructor(props) {
    super(props)
    this.renderRadioButton = this.renderRadioButton.bind(this)
  }

  renderRadioButton(item) {
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

  renderRadioButtons() {
    return this.props.items.map(this.renderRadioButton)
  }

  render() {
    return (
      <div>
        { this.renderRadioButtons() }
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
