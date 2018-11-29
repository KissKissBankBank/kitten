import React, { Component } from 'react'
import { FieldLabel } from './field/label'
import { FieldInput } from './field/input'
import { FieldError } from './field/error'
import { FieldRadioButtonSet } from './field/radio-button-set'
import { FieldSelect } from './field/select'

export class Field extends Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioButtonSet = FieldRadioButtonSet
  static Select = FieldSelect
  static Error = FieldError

  render = () => this.props.children
}
