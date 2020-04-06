import React from 'react'
import { TooltipNew } from '../components/tooltips/tooltip-new'

export const withTooltip = WrappedComponent => {
  const WithTooltip = props => {
    const { children, id, ...others } = props

    return (
      <div style={{ position: 'relative' }}>
        <TooltipNew id={id} {...others}>
          {children}
        </TooltipNew>

        <WrappedComponent data-for={id} aria-describedby={id} />
      </div>
    )
  }

  return WithTooltip
}
