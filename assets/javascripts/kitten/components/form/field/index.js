import { Component } from 'react'
import { FieldLabel } from './components/label'
import { FieldInput } from './components/input'
import { FieldError } from './components/error'
import { FieldRadioButtonSet } from './components/radio-button-set'
import { FieldSelect } from './components/select'
import { FieldPassword } from './components/password'

export class Field extends Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioButtonSet = FieldRadioButtonSet
  static Select = FieldSelect
  static ErrorMessage = FieldError
  static Password = FieldPassword

  render = () => this.props.children
}
