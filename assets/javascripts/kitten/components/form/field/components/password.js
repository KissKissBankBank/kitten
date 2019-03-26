import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { PasswordInput } from '../../password-input'

export class FieldPassword extends Component {
  render() {
    const { name, iconLabel, hiddenIconLabel, ...textInputProps } = this.props
    return (
      <Marger top="1.5">
        <PasswordInput
          textInputProps={textInputProps}
          name={name}
          iconLabel={iconLabel}
          hiddenIconLabel={hiddenIconLabel}
        />
      </Marger>
    )
  }
}
