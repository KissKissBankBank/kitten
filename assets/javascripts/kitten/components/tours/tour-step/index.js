import React from 'react'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { TourPopover } from '../../../components/tours/tour-popover'

export class TourStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      targetHighlightStyles: null,
      currentPositionTarget: this.props.targetElement,
      popoverComputedStyles: null,
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleTargetHighlightPosition = this.handleTargetHighlightPosition.bind(
      this,
    )
    this.handlePopoverPosition = this.handlePopoverPosition.bind(this)
  }

  // Component lifecyle.

  componentDidMount() {
    this.positionTargetHighlight()
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    if (!this.isTargetHighlightPositionUpdated()) {
      this.positionTargetHighlight()
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  // Component listener callbacks.

  handleResize() {
    this.positionTargetHighlight()
  }

  handleTargetHighlightPosition() {
    this.props.onTargetHighlightPosition(this.props)
  }

  handlePopoverPosition(popover) {
    this.positionPopover(popover)
  }

  // Component methods.

  getTargetHighlightPositionStyles() {
    const target = document.querySelector(this.props.targetElement)
    const targetStyles = target.getBoundingClientRect()
    const targetHeight = targetStyles.height
    const targetWidth = targetStyles.width
    const targetTop = targetStyles.top
    const targetLeft = targetStyles.left

    const highlight = this.refs.targetHighlight
    const highlightStyles = highlight.getBoundingClientRect()
    const highlightHeight = highlightStyles.height
    const highlightWidth = highlightStyles.width
    const highlightTop = targetTop + targetHeight / 2 - highlightHeight / 2
    const highlightLeft = targetLeft + targetWidth / 2 - highlightWidth / 2

    return {
      top: highlightTop + 'px',
      left: highlightLeft + 'px',
    }
  }

  positionTargetHighlight() {
    if (domElementHelper.canUseDom()) {
      this.handleTargetHighlightPosition()

      this.setState({
        targetHighlightStyles: this.getTargetHighlightPositionStyles(),
        currentPositionTarget: this.props.targetElement,
      })
    }
  }

  positionPopover(popover) {
    this.setState({
      popoverComputedStyles: this.getPopoverPositionStyles(
        popover,
        this.props.popoverPosition,
      ),
    })
  }

  getPopoverPositionStyles(popover, position) {
    if (!position) return

    const target = document.querySelector(this.props.targetElement)

    if (position == 'right') {
      const left =
        domElementHelper.getComputedLeft(target) -
        domElementHelper.getComputedWidth(popover) +
        domElementHelper.getComputedWidth(target)

      return { left: left }
    }

    return { left: domElementHelper.getComputedLeft(target) }
  }

  isTargetHighlightPositionUpdated() {
    return this.state.currentPositionTarget == this.props.targetElement
  }

  renderTargetHighlight() {
    return (
      <div
        ref="targetHighlight"
        className="k-Tour__step__targetHighlight"
        style={this.state.targetHighlightStyles}
      >
        <span className="k-Tour__step__targetHighlightContent" />
      </div>
    )
  }

  render() {
    const { targetElement, ...popoverProps } = this.props

    return (
      <div className="k-Tour__step">
        {this.renderTargetHighlight()}
        <TourPopover
          ref="popover"
          onPopoverPosition={this.handlePopoverPosition}
          style={this.state.popoverComputedStyles}
          {...popoverProps}
        />
      </div>
    )
  }
}

TourStep.defaultProps = {
  position: null, // 'left' | 'right'
}

// DEPRECATED: do not use default export.
export default TourStep
