import React from 'react'
import classNames from 'classnames'

export const IconBadge = props => {
  const { className, children, ...others } = props
  const iconBadgeClassName = classNames('k-IconBadge', className)

  return (
    <span className={iconBadgeClassName} {...others}>
      <span className="k-IconBadge__content">{children}</span>
    </span>
  )
}

IconBadge.defaultProps = {
  className: null,
}
