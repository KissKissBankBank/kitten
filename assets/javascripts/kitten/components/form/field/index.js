import React from 'react'
import { FieldLabel } from './components/label'
import { FieldInput } from './components/input'
import { FieldError } from './components/error'
import { FieldHelp } from './components/help'
import { FieldRadioSet } from './components/radio-set'
import { FieldRadioButtonSet } from './components/radio-button-set'
import { FieldCheckbox } from './components/checkbox'
import { FieldPassword } from './components/password'
import { FieldAutocomplete } from './components/autocomplete'

export class Field extends React.Component {
  static Label = FieldLabel
  static Input = FieldInput
  static RadioSet = FieldRadioSet
  static RadioButtonSet = FieldRadioButtonSet
  static Checkbox = FieldCheckbox
  static ErrorMessage = FieldError
  static Help = FieldHelp
  static Password = FieldPassword
  static Autocomplete = FieldAutocomplete

  render = () => {
    const { tag, children } = this.props

    const Component = tag

    if (!!tag) {
      return <Component>{children}</Component>
    }

    return children
  }
}
