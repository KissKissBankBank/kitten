import React from 'react'
import classNames from 'classnames'

export class SupTitle extends React.Component {
  render() {
    const { className, tag, ...supTitleProps } = this.props

    const supTitleClassName = classNames(
      'k-SupTitle',
      className,
    )

    const Tag = tag

    return (
      <Tag className={ supTitleClassName } { ...supTitleProps } />
    )
  }
}

SupTitle.defaultProps = {
  tag: 'div',
  children: 'Sup Title',
}
