import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class ArrowIcon extends Component {
  render() {
    const { className, direction, disabled, ...others } = this.props

    const arrowIconClassNames = classNames(
      'k-ArrowIcon',
      {
        [`k-ArrowIcon--${direction}`]: direction,
        'k-ArrowIcon--disabled': disabled,
      },
      className,
    )

    return (
      <svg
        className={arrowIconClassNames}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 6 6"
        {...others}
      >
        <title>Arrow</title>
        <path d="M6 0H0v6h2V2h4z" />
      </svg>
    )
  }
}

ArrowIcon.propTypes = {
  direction: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
}

ArrowIcon.defaultProps = {
  direction: 'right',
  disabled: false,
}
