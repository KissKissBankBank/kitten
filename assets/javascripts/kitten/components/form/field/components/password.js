import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { PasswordInput } from '../../password-input'

export class FieldPassword extends Component {
  render() {
    const { name, iconLabel, hiddenIconLabel, ...others } = this.props
    return (
      <Marger top="1.5">
        <PasswordInput {...this.props} />
      </Marger>
    )
  }
}
