import React from 'react'
import { Context } from './context'
import classNames from 'classnames'

export const Logo = ({ className = '', children, ...props }) => (
  <Context.Consumer>
    {({ id }) => (
      <a
        {...props}
        id={`${id}Logo`}
        className={classNames('k-HeaderNav-Logo', className)}
      >
        {children}
      </a>
    )}
  </Context.Consumer>
)
