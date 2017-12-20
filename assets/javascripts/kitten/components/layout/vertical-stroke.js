import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class VerticalStroke extends Component {
  render() {
    const {
      className,
      size,
      ...others,
    } = this.props

    const verticalStrokeClassName = classNames(
      'k-VerticalStroke',
      {
        'k-VerticalStroke--tiny': size == 'tiny',
        'k-VerticalStroke--medium': size == 'medium',
        'k-VerticalStroke--big': size == 'big',
      },
      className,
    )

    return (
      <span
        className={ verticalStrokeClassName }
        { ...others }
      />
    )
  }
}

VerticalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'medium', 'big'])
}

VerticalStroke.defaultProps = {
  tiny: null,
  medium: null,
  big: null,
}
