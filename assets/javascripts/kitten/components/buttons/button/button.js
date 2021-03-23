import React from 'react'
import { Deprecated } from '../../../helpers/utils/deprecated'
import { Button as TrueButton } from './index.js'

export const Button = props => {
  const message = `Please import Button from kitten/buttons/button.`

  return (
    <Deprecated warningMessage={message}>
      <TrueButton {...props} />
    </Deprecated>
  )
}
