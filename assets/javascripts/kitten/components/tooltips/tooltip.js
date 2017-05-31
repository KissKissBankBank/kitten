import React from 'react'
import classNames from 'classnames'
import { withTooltip } from 'kitten/hoc/with-tooltip'

export class Tooltip extends React.Component {
  renderArrow() {
    let style

    if (this.props.arrowLeftPosition) {
      style = { left: this.props.arrowLeftPosition }
    }

    return (
      <span style={ style } className="k-Tooltip__arrow" />
    )
  }

  render() {
    const { children,
            className,
            arrowLeftPosition,
            ...others } = this.props

    const tooltipClassName = classNames(
      'k-Tooltip',
      className,
    )

    return (
      <div className={ tooltipClassName } { ...others }>
        { this.renderArrow() }
        { children }
      </div>
    )
  }
}

Tooltip.defaultProps = {
  arrowLeftPosition: "182px",
}
