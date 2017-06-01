import React from 'react'
import classNames from 'classnames'
import { Tooltip } from 'kitten/components/tooltips/tooltip'
import { Manager, Target, Popper, Arrow } from 'react-popper'

export const withTooltip = (WrappedComponent, wrappedProps) => {
  class WithTooltip extends React.Component {
    render() {
      const { children,
              className,
              tooltipClassName,
              id,
              ...others } = this.props

      const withTooltipClassName = classNames(
        'k-WithTooltip',
        className,
      )

      const withTooltipTooltipClassName = classNames(
        'k-WithTooltip__tooltip',
        'popper',
      )

      return (
        <Manager>
          <div className={ withTooltipClassName } { ...others }>
            <Popper placement="right" className="popper"
                    ref={c => (this._popper = findDOMNode(c))}>
                <Tooltip id={ id }
                         className={ withTooltipTooltipClassName }>
                  Bonjour
                  <Arrow>
                      <span
                        className="popper__arrow"
                      />
                  </Arrow>
                </Tooltip>
            </Popper>
            <Target>
              <WrappedComponent data-for={ id }
                                aria-describedby={ id } />
            </Target>
          </div>
        </Manager>
      )
    }
  }

  return WithTooltip
}
