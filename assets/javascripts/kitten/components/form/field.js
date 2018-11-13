import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { FieldLabel } from 'kitten/components/form/field/label'
import { FieldInput } from 'kitten/components/form/field/input'
import { FieldError } from 'kitten/components/form/field/error'
import { FieldRadioButtonSet } from 'kitten/components/form/field/radio-button-set'

export class Field extends Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioButtonSet = FieldRadioButtonSet
  static Error = FieldError

  static propTypes = {
    error: PropTypes.boolean,
  }

  static defaultProps = {
    error: false,
  }

  elementsOf = (type, props) => {
    const { children } = this.props

    return React.Children.toArray(children).map(child => {
      if (child.type === type) {
        if (!props) return child

        return React.cloneElement(child, props)
      }
    })
  }

  render() {
    const { error } = this.props

    return (
      <Fragment>
        {this.elementsOf(FieldLabel)}
        {this.elementsOf(FieldInput, { error })}
        {this.elementsOf(FieldRadioButtonSet, { error })}
        {error && this.elementsOf(FieldError)}
      </Fragment>
    )
  }
}
