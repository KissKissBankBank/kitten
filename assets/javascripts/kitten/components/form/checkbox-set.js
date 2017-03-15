import React from 'react'
import classNames from 'classnames'
import { Checkbox } from 'kitten/components/form/checkbox'

export class CheckboxSet extends React.Component {
  constructor(props) {
    super(props)
    this.createCheckbox = this.createCheckbox.bind(this)
  }

  createCheckbox(item) {
    const { label, checked } = item
    const { items, className, ...inputProps } = this.props
    const checkboxClassName = classNames('k-CheckboxSet__checkbox', className)

    return(
      <Checkbox children={ label }
                className={ checkboxClassName }
                { ...inputProps }
                defaultChecked={ checked }/>
    )
  }

  createCheckboxes() {
    return this.props.items.map(this.createCheckbox)
  }

  render() {
    return (
      <div>
        { this.createCheckboxes() }
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
