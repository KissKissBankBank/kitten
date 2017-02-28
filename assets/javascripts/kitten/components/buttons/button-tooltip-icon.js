import React from 'react'
import { TooltipIcon } from 'kitten/components/icons/tooltip-icon'

export default class ButtonTooltipIcon extends React.Component {
  render() {
    return (
      <button { ...this.props }
              className="k-ButtonIcon
                         k-ButtonIcon--beryllium
                         k-ButtonIcon--micro">
        <TooltipIcon className="k-ButtonIcon__svg" />
      </button>
    )
  }
}

ButtonTooltipIcon.defaultProps = {
  type: 'button',
}
