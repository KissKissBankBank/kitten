import React from 'react'
import { TooltipIcon } from 'kitten/components/icons/tooltip-icon'

export default class ButtonTooltipIcon extends React.Component {
  render() {
    return (
      <button className="k-ButtonIcon
                         k-ButtonIcon--beryllium
                         k-ButtonIcon--micro"
              { ...this.props }>
        <TooltipIcon className="k-ButtonIcon__svg"/>
      </button>
    )
  }
}
