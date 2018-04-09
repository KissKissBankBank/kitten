import React, { Component } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export class HorizontalStroke extends Component {
  // renderChildren() {
  //   if (!this.props.children) return null

  //   return (
  //     <span className="k-HorizontalStroke--text">
  //       {this.props.children}
  //     </span>
  //   )
  // }

  render() {
    const { className, size, children, ...others } = this.props

    const horizontalStrokeClassName = classNames(
      'k-HorizontalStroke',
      {
        'k-HorizontalStroke--tiny': size == 'tiny',
        'k-HorizontalStroke--default': size == 'default',
        'k-HorizontalStroke--big': size == 'big',
        'k-HorizontalStroke--huge': size == 'huge',
        'k-HorizontalStroke--children': children,
      },
      className,
    )

    return (
      <span className={horizontalStrokeClassName} {...others}>
        {children}
      </span>
    )
  }
}

HorizontalStroke.propTypes = {
  size: PropTypes.oneOf(['tiny', 'default', 'big', 'huge']),
}

HorizontalStroke.defaultProps = {
  size: 'default',
  children: null,
}
