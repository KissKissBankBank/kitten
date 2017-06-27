import React from 'react'
import classNames from 'classnames'
import { TooltipNew } from 'kitten/components/tooltips/tooltip-new'

export const withTooltip = (WrappedComponent, wrappedProps) => {
  const WithTooltip = props => {
    const { children,
            className,
            tooltipClassName,
            id,
            ...others } = props

    return (
      <div>
        <TooltipNew id={ id } { ...others }>
          { children }
        </TooltipNew>

        <div>
          <WrappedComponent
            data-for={ id }
            aria-describedby={ id } />
        </div>
      </div>
    )
  }

  return WithTooltip
}
