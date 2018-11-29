import React, { Component } from 'react'
import { FieldLabel } from './components/label'
import { FieldInput } from './components/input'
import { FieldError } from './components/error'
import { FieldRadioButtonSet } from './components/radio-button-set'
import { FieldSelect } from './components/select'

export class Field extends Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioButtonSet = FieldRadioButtonSet
  static Select = FieldSelect
  static Error = FieldError

  render = () => this.props.children
}
