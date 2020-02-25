import React from 'react'
import { Context } from './context'

export const Unlogged = props => (
  <Context.Consumer>
    {({ isLogged }) => (!isLogged ? <>{props.children}</> : null)}
  </Context.Consumer>
)
