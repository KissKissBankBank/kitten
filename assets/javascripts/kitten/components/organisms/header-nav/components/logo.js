import React, { useContext } from 'react'
import { Context } from './context'
import classNames from 'classnames'

export const Logo = ({ className = '', children, ...props }) => {
  const { id } = useContext(Context)

  return (
    <a
      {...props}
      id={`${id}Logo`}
      className={classNames('k-HeaderNav__Logo', className)}
    >
      {children}
    </a>
  )
}
