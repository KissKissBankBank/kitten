import React, { Component } from 'react'
import { Marger } from '../../../layout/marger'
import { PasswordInput } from '../../password-input'

export const FieldPassword = props => (
  <Marger top="1.5">
    <PasswordInput {...props} />
  </Marger>
)
