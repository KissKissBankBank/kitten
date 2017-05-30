import React from 'react'
import classNames from 'classnames'

export class NewTooltip extends React.Component {
  // renderArrow() {
  //   let style

  //   if (this.props.arrowLeftPosition) {
  //     style = { left: this.props.arrowLeftPosition }
  //   }

  //   return (
  //     <span style={ style } className="k-NewTooltip__arrow" />
  //   )
  // }

  render() {
    const { children,
            className,
            id,
            ...others } = this.props

    const newTooltipClassName = classNames(
      'k-NewTooltip',
      className,
    )

    return (
      <div className={ newTooltipClassName } { ...others }>
        <div className="k-NewTooltip__button">
          <ButtonTooltipIcon id={ id } />
        </div>

        <div id={ id }
             className="k-NewTooltip__content">
          { children }
        </div>
      </div>
    )
  }
}

NewTooltip.defaultProps = {
  //arrowLeftPosition: null,
}
