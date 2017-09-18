import React, { Component } from 'react'
import classNames from 'classnames'

export class ArrowIcon extends Component {
  render() {
    const {
      className,
      direction,
      disabled,
      ...others,
    } = this.props

    const arrowIconClassNames = classNames(
      className,
      {
        [`k-ArrowIcon--${direction}`]: direction,
        'k-ArrowIcon--disabled': disabled,
      },
    )

    return (
      <svg
        className={ arrowIconClassNames }
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        { ...others }
      >
        <path d="M7.828,5L6.414,6.413L2.172,2.172l1.414-1.415L7.828,5z" />
        <path d="M7.828,5L3.586,9.243L2.172,7.827l4.242-4.241L7.828,5z" />
      </svg>
    )
  }
}

ArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
}
