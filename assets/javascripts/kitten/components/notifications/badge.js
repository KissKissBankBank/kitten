import React, { Component } from 'react'
import classNames from 'classnames'

export class Badge extends Component {
  render() {
    const { className, spaced, ...others } = this.props

    const badgeClassName = classNames('k-Badge', className, {
      'k-Badge--spaced': spaced,
    })

    return <span role="alert" className={badgeClassName} {...others} />
  }
}

Badge.defaultProps = {
  className: null,
  spaced: false,
}
