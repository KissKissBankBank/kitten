import React from 'react'
import classNames from 'classnames'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export class NewTooltip extends React.Component {
  renderArrow() {
    let style

    if (this.props.arrowLeftPosition) {
      style = { left: this.props.arrowLeftPosition }
    }

    return (
      <span style={ style } className="k-NewTooltip__arrow" />
    )
  }

  render() {
    const { children,
            className,
            arrowLeftPosition,
            ...others } = this.props

    const newTooltipClassName = classNames(
      'k-NewTooltip',
      className,
    )

    return (
      <div className={ newTooltipClassName } { ...others }>
        <div className="k-NewTooltip__button">
          <ButtonTooltipIcon />
        </div>

        <div className="k-NewTooltip__content">
          { this.renderArrow() }
          { children }
        </div>
      </div>
    )
  }
}

NewTooltip.defaultProps = {
  arrowLeftPosition: null,
}
