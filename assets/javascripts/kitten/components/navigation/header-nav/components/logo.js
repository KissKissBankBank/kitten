import React from 'react'
import { Context } from './context'

export const Logo = ({ className = '', children, ...props }) => (
  <Context.Consumer>
    {({ id }) => (
      <a
        id={`${id}Logo`}
        className={`k-HeaderNav-Logo ${className}`.trim()}
        {...props}
      >
        {children}
      </a>
    )}
  </Context.Consumer>
)
