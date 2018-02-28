import React, { Component } from 'react'
import classNames from 'classnames'
import { RadioButtonSet } from 'kitten/components/form/radio-button-set'

export class RadioButtonSetWithState extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: this.props.initialValue
    }

    this.itemProps = this.itemProps.bind(this)
  }

  itemProps(item) {
    return {
      ...item,
      checked: this.state.value === item.value,
      onChange: () => this.setState({ value: item.value }),
    }
  }

  render() {
    const { initialValue, items, others... } = this.props

    return (
      <RadioButtonSet
        items={ items.map(itemProps) }
        { ...others }
      />
    )
  }
}

RadioButtonSetWithState.defaultProps = {
  initialValue: 'yes',
  items: [
    {
      text: 'Yes',
      value: 'yes',
      children: null,
      id: 'radio-yes', // Replace by a real value
    },
    {
      text: 'No',
      value: 'no',
      children: null,
      id: 'radio-no', // Replace by a real value
    },
  ],
}
