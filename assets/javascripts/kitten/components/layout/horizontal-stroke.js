import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class HorizontalStroke extends Component {
  render() {
    const {
      className,
      size,
      ...others,
    } = this.props

    const horizontalStrokeClassName = classNames(
      'k-HorizontalStroke',
      {
        'k-HorizontalStroke--tiny': size == 'tiny',
        'k-HorizontalStroke--default': size == 'default',
        'k-HorizontalStroke--big': size == 'big',
        'k-HorizontalStroke--huge': size == 'huge',
      },
      className,
    )

    return (
      <span
        className={ horizontalStrokeClassName }
        { ...others }
      />
    )
  }
}

HorizontalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge']),
}

HorizontalStroke.defaultProps = {
  size: 'default',
}
