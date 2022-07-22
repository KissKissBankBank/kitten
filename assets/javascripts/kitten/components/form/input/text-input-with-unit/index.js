import React from 'react'
import { TextInput } from '../../../form/input/text-input'

export const TextInputWithUnit = ({ unitWord, ...props }) => (
  <TextInput {...props} has="unit" unitIsWord={unitWord} />
)
