import { Component } from 'react'
import { FieldLabel } from './components/label'
import { FieldInput } from './components/input'
import { FieldError } from './components/error'
import { FieldRadioButtonSet } from './components/radio-button-set'
import { FieldSelect } from './components/select'
import { FieldCheckbox } from './components/checkbox'
import { FieldPassword } from './components/password'
import { FieldAutocomplete } from './components/autocomplete'

export class Field extends Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioButtonSet = FieldRadioButtonSet
  static Select = FieldSelect
  static Checkbox = FieldCheckbox
  static ErrorMessage = FieldError
  static Password = FieldPassword
  static Autocomplete = FieldAutocomplete

  render = () => this.props.children
}
