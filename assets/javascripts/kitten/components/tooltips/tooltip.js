import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  render() {
    return (
      <div className="k-Tooltip">
        <ButtonTooltipIcon data-tip
                           data-for={ this.props.data_id }
                           data-event="click"
                           data-dismiss={ this.props.data_id }
                           aria-describedby={ this.props.data_id } />

        <ReactTooltip id={ this.props.data_id }
                      class="k-Tooltip__content"
                      role="tooltip"
                      effect="solid"
                      place={ this.props.place }
                      globalEventOff="click">
          { this.props.children }
        </ReactTooltip>
      </div>
    )
  }
}
