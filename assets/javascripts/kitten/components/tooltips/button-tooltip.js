import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipText from 'kitten/components/buttons/button-tooltip-text'

export default class ButtonTooltip extends React.Component {
  render() {
    return (
      <div className="k-ButtonTooltip">
        <ButtonTooltipText data-tip
                           data-for={ this.props.id }
                           data-event="click"
                           aria-describedby={ this.props.id } />

        <ReactTooltip id={ this.props.id }
                      class="k-ButtonTooltip__content"
                      role="tooltip"
                      effect="solid"
                      place={ this.props.place }>
          { this.props.children }
        </ReactTooltip>
      </div>
    )
  }
}
