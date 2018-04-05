import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class VerticalStroke extends Component {
  render() {
    const { className, size, ...others } = this.props

    const verticalStrokeClassName = classNames(
      'k-VerticalStroke',
      {
        'k-VerticalStroke--tiny': size == 'tiny',
        'k-VerticalStroke--default': size == 'default',
        'k-VerticalStroke--big': size == 'big',
        'k-VerticalStroke--huge': size == 'huge',
      },
      className,
    )

    return <span className={verticalStrokeClassName} {...others} />
  }
}

VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge']),
}

VerticalStroke.defaultProps = {
  size: 'default',
}
