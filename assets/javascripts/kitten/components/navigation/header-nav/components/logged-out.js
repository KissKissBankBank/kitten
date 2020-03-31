import React from 'react'
import { Context } from './context'

export const LoggedOut = ({ children }) => (
  <Context.Consumer>
    {({ isLogged }) => (!isLogged ? children : null)}
  </Context.Consumer>
)
