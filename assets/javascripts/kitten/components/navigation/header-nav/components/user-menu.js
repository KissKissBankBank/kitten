import React from 'react'
import { Context } from './context'

export const UserMenu = props => (
  <Context.Consumer>
    {({ isLogged }) => (isLogged ? <>isLogged</> : null)}
  </Context.Consumer>
)
