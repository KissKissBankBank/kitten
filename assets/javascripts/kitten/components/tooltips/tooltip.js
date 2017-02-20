import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  render() {
    const { place,
            ...others } = this.props

    return (
      <div className="k-Tooltip">
        <ButtonTooltipIcon data-tip
                           data-for={ this.props.id }
                           data-event="click"
                           data-dismiss={ this.props.id }
                           aria-describedby={ this.props.id }
                           { ...others } />

        <ReactTooltip id={ this.props.id }
                      className="k-Tooltip__content"
                      role="tooltip"
                      effect="solid"
                      place={ place }
                      globalEventOff="click">
          { this.props.children }
        </ReactTooltip>
      </div>
    )
  }
}

Tooltip.defaultProps = {
  id: 'tooltip-id',
  place: 'right',
  type: 'button',
  children: null,
}
