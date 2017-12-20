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
        'k-HorizontalStroke--medium': size == 'medium',
        'k-HorizontalStroke--big': size == 'big',
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
  size: PropTypes.oneOf(['tiny', 'medium', 'big'])
}

HorizontalStroke.defaultProps = {
  tiny: null,
  medium: null,
  big: null,
}
