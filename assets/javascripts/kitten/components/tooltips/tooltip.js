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
    this.show = this.show.bind(this)
  }

  componentDidMount() {
    if (this.props.alwaysOpen) {
      setTimeout(this.show, 1000)
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
            children,
            refElement,
            refElementProps,
            tooltipModifier,
            id } = this.props

    const RefTag = refElement

    const tooltipContainerClassName = classNames(
      'k-Tooltip',
      className,
    )

    const tooltipClassName = classNames(
      'k-Tooltip__content',
      `k-Tooltip__content--${tooltipModifier}`
    )

    return (
      <div className={ tooltipContainerClassName }>
        <RefTag ref={ button => this.button = button }
                   data-tip="tooltip"
                   data-for={ id }
                   onClick={ this.handleClick }
                   aria-describedby={ id }
                   { ...refElementProps } />
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
  alwaysOpen: false,
  tooltipModifier: 'hydrogen',
  refElement: ButtonTooltipIcon,
}
