import React from 'react'
import classNames from 'classnames'

export const Row = ({
  className,
  contentClassName,
  centered,
  light,
  dark,
  lightTopBorder,
  lightBottomBorder,
  padded,
  children,
  ...others
}) => {
  const rowClassName = classNames(
    'k-Row',
    {
      'k-Row--centered': centered,
      'k-Row--light': light,
      'k-Row--dark': dark,
      'k-Row--lightTopBorder': lightTopBorder,
      'k-Row--lightBottomBorder': lightBottomBorder,
      'k-Row--padded': padded,
    },
    className,
  )

  const rowContentClassName = classNames('k-Row__content', contentClassName)

  return (
    <div className={rowClassName} {...others}>
      <div className={rowContentClassName}>{children}</div>
    </div>
  )
}

Row.defaultProps = {
  className: null,
  contentClassName: null,
  centered: false,
  light: false,
  dark: false,
  lightTopBorder: false,
  lightBottomBorder: false,
  padded: false,
}
