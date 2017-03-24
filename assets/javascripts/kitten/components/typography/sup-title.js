import React from 'react'
import classNames from 'classnames'

export const SupTitle = props => {
  const { className, children, tag, ...supTitleProps } = props

  const supTitleClassName = classNames(
    'k-SupTitle',
    className,
  )

  const Tag = tag

  return (
    <Tag className={ supTitleClassName } { ...supTitleProps }>
      { children }
    </Tag>
  )
}

SupTitle.defaultProps = {
  tag: 'div',
  children: 'Sup Title',
}
