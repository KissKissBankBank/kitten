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

    return (
      <div className={ withTooltipClassName } { ...others }>
        <div className="k-WithTooltip__origin">
          <WrappedComponent data-for={ id }
                            aria-describedby={ id } />
        </div>

        <Tooltip  id={ id } className={ tooltipClassName } { ...others }>
          { children }
        </Tooltip>
      </div>
    )
  }

  return WithTooltip
}
