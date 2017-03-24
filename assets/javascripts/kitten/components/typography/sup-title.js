import React from 'react'
import classNames from 'classnames'

export class SupTitle extends React.Component {
  render() {
    const { className, children, ...supTitleProps } = this.props

    const supTitleClassName = classNames(
      'k-SupTitle',
      className,
    )

    return (
      <div className={ supTitleClassName } { ...supTitleProps }>
        { children }
      </div>
    )
  }
}

SupTitle.defaultProps = {
  children: 'Sup Title',
}
