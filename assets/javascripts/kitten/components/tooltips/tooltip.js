import React from 'react'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export default class Tooltip extends React.Component {
  render() {
    return (
      <div className="k-Tooltip">
        <ButtonTooltipIcon dataTip
                           dataFor={ this.props.id }
                           dataEvent="click"
                           dataDismiss={ this.props.id }
                           ariaDescribedby={ this.props.id }
                           type={ this.props.type }
                           { ...this.props }/>

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
