import React from 'react'
import classNames from 'classnames'

export class StaticTooltip extends React.Component {
  renderArrow() {
    let style

    if (this.props.arrowLeftPosition) {
      style = { left: this.props.arrowLeftPosition }
    }

    return (
      <span style={ style } className="k-StaticTooltip__arrow" />
    )
  }

  render() {
    const { children,
            className,
            ...others } = this.props

    const staticTooltipClassName = classNames(
      'k-StaticTooltip',
      className,
    )

    return (
      <div className={ staticTooltipClassName } { ...others }>
        { this.renderArrow() }
        <div className="k-StaticTooltip__content">
          { children }
        </div>
      </div>
    )
  }
}

StaticTooltip.defaultProps = {
  arrowLeftPosition: null,
}