import React from 'react'
import TooltipIcon from './tooltip-icon'
import ReactTooltip from 'react-tooltip'

export default class Tooltip extends React.Component {
  render() {
    return (
      <div>
        <TooltipIcon data-tip
                     data-for="tooltip"
                     data-event="click" />

        <ReactTooltip id="tooltip"
                      class="k-Tooltip--custom"
                      effect="solid">
          { this.props.children }
        </ReactTooltip>
      </div>
    )
  }
}
