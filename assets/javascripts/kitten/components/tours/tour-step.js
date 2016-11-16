import React from 'react'
import objectAssign from 'core-js/library/fn/object/assign'
import domElementHelper from 'kitten/helpers/dom/element-helper'
import TourPopover from 'kitten/components/tours/tour-popover'

class TourStep extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      targetHighlightStyles: null,
      currentTarget: this.props.targetElement,
      popoverComputedStyles: null,
    }

    this.handleResize = this.handleResize.bind(this)
    this.handleTargetHighlightPlace = this.handleTargetHighlightPlace.bind(this)
    this.handlePopoverPlace = this.handlePopoverPlace.bind(this)
  }

  // Component lifecyle.

  componentDidMount() {
    this.positionTargetHighlight()
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    if (this.shouldUpdatePosition()) {
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

  handleTargetHighlightPlace() {
    this.props.onTargetHighlightPlace(this.props)
  }

  handlePopoverPlace(popover) {
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
    const highlightTop = targetTop +
                         (targetHeight / 2) -
                         (highlightHeight / 2)
    const highlightLeft = targetLeft +
                          (targetWidth / 2) -
                          (highlightWidth / 2)

    return {
      top: highlightTop + 'px',
      left: highlightLeft + 'px',
    }
  }

  positionTargetHighlight() {
    if (domElementHelper.canUseDom()) {
      this.handleTargetHighlightPlace()

      this.setState({
        targetHighlightStyles: this.getTargetHighlightPositionStyles(),
        currentTarget: this.props.targetElement
      })
    }
  }

  positionPopover(popover) {
    this.setState({
      popoverComputedStyles:
        this.getPopoverPositionStyles(popover, this.props.popoverPosition)
    })
  }

  getPopoverPositionStyles(popover, position) {
    if (!position) return

    const target = document.querySelector(this.props.targetElement)
    const targetStyles = target.getBoundingClientRect()
    const popoverStyles = popover.getBoundingClientRect()

    if (position == 'right') {
      const left = targetStyles.left - popoverStyles.width + targetStyles.width

      return { left: left }
    }

     return { left: targetStyles.left }
  }

  isTargetHighlightUpdated() {
    return this.state.currentTarget == this.props.targetElement
  }

  shouldUpdatePosition() {
    return !this.isTargetHighlightUpdated()
  }

  renderTargetHighlight() {
    return (
      <div ref="targetHighlight"
           className="k-Tour__step__targetHighlight"
           style={ this.state.targetHighlightStyles }>
        <span className="k-Tour__step__targetHighlightContent"></span>
      </div>
    )
  }

  render() {
    const { targetElement, ...popoverProps } = this.props

    return(
      <div className="k-Tour__step">
        { this.renderTargetHighlight() }
        <TourPopover ref="popover"
                     onPopoverPlace={ this.handlePopoverPlace }
                     style={ this.state.popoverComputedStyles }
                     { ...popoverProps } />
      </div>
    )
  }
}

TourStep.defaultProps = {
  position: null, // 'left' | 'right'
}

export default TourStep
