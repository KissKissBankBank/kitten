import React from 'react'
import classNames from 'classnames'
import { Tooltip } from 'kitten/components/tooltips/tooltip'

export const withTooltip = (WrappedComponent, wrappedProps) => {
  const WithTooltip = props => {
    const { children,
            className,
            tooltipClassName,
            id,
            ...others } = props

    const withTooltipClassName = classNames(
      'k-WithTooltip',
      className,
    )

    const withTooltipTooltipClassName = classNames(
      'k-WithTooltip__tooltip',
    )

    return (
      <div className={ withTooltipClassName } { ...others }>
        <Tooltip id={ id }
                 className={ withTooltipTooltipClassName }
                 { ...others }>
          { children }
        </Tooltip>

        <div>
          <WrappedComponent data-for={ id }
                            aria-describedby={ id } />
        </div>
      </div>
    )
  }

  return WithTooltip
}
