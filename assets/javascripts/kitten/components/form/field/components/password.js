import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { PasswordInput } from '../../password-input'

export class FieldPassword extends Component {
  render() {
    return (
      <Marger top="1.5">
        <PasswordInput
          textInputProps={this.props}
          name={this.props.name}
          iconLabel={this.props.iconLabel}
          hiddenIconLabel={this.props.hiddenIconLabel}
        />
      </Marger>
    )
  }
}
