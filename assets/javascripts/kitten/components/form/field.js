import React, { Component } from 'react'
import { FieldLabel } from 'kitten/components/form/field/label'
import { FieldInput } from 'kitten/components/form/field/input'
import { FieldError } from 'kitten/components/form/field/error'
import { FieldRadioButtonSet } from 'kitten/components/form/field/radio-button-set'
import { FieldSelect } from 'kitten/components/form/field/select'

export class Field extends Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioButtonSet = FieldRadioButtonSet
  static Select = FieldSelect
  static Error = FieldError

  render = () => this.props.children
}
