import React, { Component } from 'react'
import classNames from 'classnames'

const valueMax = 100

export class Progress extends Component {
  render() {
    const {
      className,
      color,
      value,
      rampProps,
      ...others,
    } = this.props

    const progressClassName = classNames(
      'k-Progress',
      className,
    )

    const progressValue = value > valueMax ? valueMax : value

    const style = {
      backgroundColor: `${color}`,
      width: `${progressValue}%`,
    }

    const rampClassName = classNames(
      'k-Progress__ramp',
      rampProps.className,
    )

    return (
      <div
        { ...others }
        role="progressbar"
        aria-valuemin="0"
        aria-valuemax={ `${valueMax}` }
        aria-valuenow={ progressValue }
        className={ progressClassName }>
        <div { ...rampProps } className={ rampClassName }>
          <div
            className="k-Progress__slider"
            style={ style }
          />
        </div>
      </div>
    )
  }
}

Progress.defaultProps = {
  className: null,
  color: null,
  value: 50,
  rampProps: {},
}
