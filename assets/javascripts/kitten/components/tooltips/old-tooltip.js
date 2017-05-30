import React from 'react'
import ReactTooltip from 'react-tooltip'

export default class Tooltip extends React.Component {
  render() {
    const { place,
            children,
            id,
            ...buttonTooltipIconProps } = this.props

    return (
      <div className="k-Tooltip">
        <ButtonTooltipIcon data-tip
                           data-for={ id }
                           data-event="click"
                           data-dismiss={ id }
                           aria-describedby={ id }
                           { ...buttonTooltipIconProps } />
        <ReactTooltip id={ id }
                      // This is not a mistake, this attribute is called
                      // class not className!
                      class="k-Tooltip__content"
                      role="tooltip"
                      effect="solid"
                      place={ place }
                      event="none">
          { children }
        </ReactTooltip>
      </div>
    )
  }
}

Tooltip.defaultProps = {
  id: '',
  place: 'right',
  children: null,
}
