import React from 'react'
import classNames from 'classnames'
import { findDOMNode } from 'react-dom'
import ReactTooltip from 'react-tooltip'
import ButtonTooltipIcon from 'kitten/components/buttons/button-tooltip-icon'

export class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }

    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    if (this.props.alwaysOpen) {
      this.show()
    }
  }

  handleClick() {
    if (this.props.alwaysOpen)
      return

    if (this.state.open) {
      this.hide()
    } else {
      this.show()
    }
  }

  show() {
    ReactTooltip.show(findDOMNode(this.button))
    this.setState({ open: true })
  }

  hide() {
    ReactTooltip.hide(findDOMNode(this.button))
    this.setState({ open: false })
  }

  render() {
    const { className,
            place,
            alwaysOpen,
            element,
            children,
            tooltipModifier,
            elementChildren,
            id,
            ...buttonTooltipIconProps } = this.props

    const ButtonTag = element

    const tooltipClassName = classNames(
      'k-Tooltip__content',
      `k-Tooltip__content--${tooltipModifier}`
    )

    return (
      <div className="k-Tooltip">
        <ButtonTag ref={ button => this.button = button }
                   data-tip="tooltip"
                   data-for={ id }
                   onClick={ this.handleClick }
                   aria-describedby={ id }
                   children={ elementChildren }
                   { ...buttonTooltipIconProps } />
        <ReactTooltip id={ id }
                      // This is not a mistake, this attribute is called
                      // class not className!
                      class={ tooltipClassName }
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
  elementChildren: null,
  alwaysOpen: false,
  element: ButtonTooltipIcon,
  tooltipModifier: 'hydrogen',
}
