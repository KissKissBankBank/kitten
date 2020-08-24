import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import { ButtonQuestionMarkIcon } from '../../../components/buttons/button-question-mark-icon'
import domElementHelper from '../../../helpers/dom/element-helper'

export const Tooltip = ({
  place,
  children,
  id,
  ...buttonQuestionMarkIconProps
}) => {
  const tooltipElement = useRef(null)

  const handleButtonClick = event => {
    event.preventDefault()

    if (domElementHelper.canUseDom()) {
      window.dispatchEvent(new CustomEvent('TooltipEvents__close_all'))
      event.target.dispatchEvent(new CustomEvent(`TooltipEvents__open_${id}`))
    }
  }

  return (
    <div className="k-Tooltip">
      <ButtonQuestionMarkIcon
        data-tip
        data-for={id}
        data-event={`TooltipEvents__open_${id}`}
        onClick={handleButtonClick}
        data-dismiss={id}
        aria-describedby={id}
        data-place={place}
        {...buttonQuestionMarkIconProps}
      />
      <ReactTooltip
        ref={tooltipElement}
        id={id}
        className="k-Tooltip__content"
        role="tooltip"
        effect="solid"
        event="none"
        globalEventOff="TooltipEvents__close_all"
      >
        {children}
      </ReactTooltip>
    </div>
  )
}

Tooltip.defaultProps = {
  id: '',
  place: 'right',
  children: null,
}

Tooltip.propTypes = {
  id: PropTypes.string,
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node,
}

// DEPRECATED: do not use default export.
export default Tooltip
