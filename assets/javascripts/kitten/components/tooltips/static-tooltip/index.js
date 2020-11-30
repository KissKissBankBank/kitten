import React, { Component } from 'react'
import classNames from 'classnames'

export class StaticTooltip extends Component {
  renderArrow() {
    let style

    if (this.props.arrowLeftPosition) {
      style = { left: this.props.arrowLeftPosition }
    }

    return <span style={style} className="k-StaticTooltip__arrow" />
  }

  render() {
    const { children, className, arrowLeftPosition, ...others } = this.props

    const staticTooltipClassName = classNames('k-StaticTooltip', className)

    return (
      <div className={staticTooltipClassName} {...others}>
        <div className="k-StaticTooltip__content">
          {this.renderArrow()}
          {children}
        </div>
      </div>
    )
  }
}

StaticTooltip.defaultProps = {
  arrowLeftPosition: null,
}
