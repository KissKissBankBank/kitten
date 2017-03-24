import React from 'react'
import classNames from 'classnames'

export const SupTitle = props => {
  const { className, tag, ...supTitleProps } = props

  const supTitleClassName = classNames(
    'k-SupTitle',
    className,
  )

  const Tag = tag

  return (
    <Tag className={ supTitleClassName } { ...supTitleProps } />
  )
}

SupTitle.defaultProps = {
  tag: 'div',
  children: 'Sup Title',
}
