import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import { ButtonQuestionMarkIcon } from '../../components/buttons/button-question-mark-icon'

export class Tooltip extends Component {
  render() {
    const { place, children, id, ...buttonQuestionMarkIconProps } = this.props

    return (
      <div className="k-Tooltip">
        <ButtonQuestionMarkIcon
          data-tip
          data-for={id}
          data-event="click"
          data-dismiss={id}
          aria-describedby={id}
          {...buttonQuestionMarkIconProps}
        />
        <ReactTooltip
          id={id}
          // This is not a mistake, this attribute is called
          // class not className!
          class="k-Tooltip__content"
          role="tooltip"
          effect="solid"
          place={place}
          event="none"
        >
          {children}
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

// DEPRECATED: do not use default export.
export default Tooltip
