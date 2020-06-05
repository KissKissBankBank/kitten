import React from 'react'
import { Marger } from '../../../layout/marger'
import { PasswordInput } from '../../password-input'

export const FieldPassword = props => (
  <Marger top="1">
    <PasswordInput {...props} />
  </Marger>
)
