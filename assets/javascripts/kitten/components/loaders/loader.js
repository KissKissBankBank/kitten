import React, { Component } from 'react'
import classNames from 'classnames'

const Circle = ({ color, ...others }) => {
  const size = 5

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${size * 2} ${size * 2}`}
      {...others}
    >
      <circle fill={color} cx={size} cy={size} r={size} />
    </svg>
  )
}

export class Loader extends Component {
  render() {
    const { tag, className, color, ...others } = this.props

    const Tag = tag

    const loaderClassName = classNames('k-Loader', className)

    const circle = <Circle className="k-Loader__circle" color={color} />

    return (
      <Tag className={loaderClassName} {...others}>
        {circle}
        {circle}
        {circle}
      </Tag>
    )
  }
}

Loader.defaultProps = {
  tag: 'div',
  className: null,
  color: null,
}
