import React from 'react'
import classNames from 'classnames'
import { Marger } from 'kitten/components/layout/marger'

export class TooltipNew extends React.Component {
  renderArrow() {

    return (
      <span className="k-TooltipNew__arrow" />
    )
  }

  render() {
    const { children,
            className,
            arrowLeftPosition,
            ...others } = this.props

    const tooltipNewClassName = classNames(
      'k-TooltipNew',
      className,
    )

    return (
      <div className={ tooltipNewClassName } { ...others }>
        <Marger top="2" bottom="2">
          { children }
          { this.renderArrow() }
        </Marger>
      </div>
    )
  }
}

TooltipNew.defaultProps = {
  arrowLeftPosition: '50%',
}
