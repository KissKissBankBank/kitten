import React from 'react'
import classNames from 'classnames'

export const Separator = ({ darker, className, ...props }) => {
  const separatorClassName = classNames(
    'k-Separator',
    { 'k-Separator--darker': darker },
    className,
  )

  return <hr className={separatorClassName} {...props} />
}

Separator.defaultProps = {
  className: null,
  darker: false,
}
