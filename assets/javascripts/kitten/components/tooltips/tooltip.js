import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from '../../components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  render() {
    return (
      <div>
        <ButtonTooltipIcon data-tip
                     data-for={ this.props.data_for}
                     data-event="click"
                     data-dismiss={this.props.data_for} />

        <ReactTooltip id={ this.props.data_id}
                      role={ this.props.data_role}
                      aria-describedby={ this.props.data_id }
                      class="k-Tooltip"
                      effect="solid"
                      place={ this.props.place }
                      globalEventOff="click" >
          { this.props.children }
        </ReactTooltip>
      </div>
    )
  }
}
