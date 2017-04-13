import React from 'react'
import classNames from 'classnames'

export const Container = ({ className, ...props }) => {
  const containerClassName = classNames('k-Container', className)

  return (
    <div className={ containerClassName } { ...props } />
  )
}

Container.defaultProps = {
  className: null,
}
