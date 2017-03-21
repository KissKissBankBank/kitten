import React from 'react'
import classNames from 'classnames'

export class Progress extends React.Component {
  render() {
    const { className,
            value,
            ...others } = this.props

    const progressClassName = classNames(
      'k-Progress',
      className,
    )

    const style = {
      width: `${value}%`,
    }

    return (
      <div role="progressbar"
           aria-valuemin="0"
           aria-valuemax="100"
           aria-valuenow={ this.props.value }
           className={ progressClassName }
           { ...others }>
        <div className="k-Progress__ramp">
          <div className="k-Progress__slider" style={ style }></div>
        </div>
      </div>
    )
  }
}

Progress.defaultProps = {
  value: 50,
}
