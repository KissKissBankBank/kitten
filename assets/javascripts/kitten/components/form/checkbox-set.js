import React from 'react'
import classNames from 'classnames'
import { Checkbox } from 'kitten/components/form/checkbox'

export class CheckboxSet extends React.Component {
  constructor(props) {
    super(props)
    this.renderCheckbox = this.renderCheckbox.bind(this)
  }

  renderCheckbox(item) {
    const { label, checked } = item
    const { items, className, ...inputProps } = this.props
    const checkboxClassName = classNames('k-CheckboxSet__checkbox', className)

    return(
      <Checkbox children={ label }
                className={ checkboxClassName }
                { ...inputProps }
                defaultChecked={ checked } />
    )
  }

  renderCheckboxes() {
    return this.props.items.map(this.renderCheckbox)
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
  items: [{
    label: 'filter 1',
    checked: true,
  }],
}
