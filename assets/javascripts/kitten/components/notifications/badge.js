import React from 'react'
import classNames from 'classnames'

export class Badge extends React.Component {
  render() {
    const { className, ...others } = this.props
    const badgeClassName = classNames('k-Badge', className)

    return (
      <span className={ badgeClassName } { ...others } />
    )
  }
}

Badge.defaultProps = {
  className: null,
}
