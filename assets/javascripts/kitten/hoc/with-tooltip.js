import React from 'react'
import classNames from 'classnames'
import { TooltipNew } from 'kitten/components/tooltips/tooltip-new'

export const withTooltip = (WrappedComponent, wrappedProps) => {
  const WithTooltip = props => {
    const { children,
            id,
            ...others } = props

    return (
      <div style={{ position: 'relative' }}>
        <TooltipNew id={ id } { ...others }>
          { children }
        </TooltipNew>

        <WrappedComponent
          data-for={ id }
          aria-describedby={ id } />
      </div>
    )
  }

  return WithTooltip
}
