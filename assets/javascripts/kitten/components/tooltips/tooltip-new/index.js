import React, { Component } from 'react'
import classNames from 'classnames'
import { Marger } from '../../../components/layout/marger'

export class TooltipNew extends Component {
  renderArrow() {
    return <span className="k-TooltipNew__arrow" />
  }

  render() {
    const { children, className, ...others } = this.props

    const tooltipNewClassName = classNames('k-TooltipNew', className)

    return (
      <div className={tooltipNewClassName} role="tooltip" {...others}>
        <Marger top="2" bottom="2">
          {children}
          {this.renderArrow()}
        </Marger>
      </div>
    )
  }
}
