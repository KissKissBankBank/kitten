import React from 'react'
import { Context } from './context'

export const Unlogged = ({ children }) => (
  <Context.Consumer>
    {({ isLogged }) => (!isLogged ? <>{children}</> : null)}
  </Context.Consumer>
)
