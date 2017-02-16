import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  render() {
    return (
      <div className="k-Tooltip">
        <ButtonTooltipIcon data-tip
                           data-for={ this.props.id }
                           data-event="click"
                           data-dismiss={ this.props.id }
                           aria-describedby={ this.props.id } />

        <ReactTooltip id={ this.props.id }
                      className="k-Tooltip__content"
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
