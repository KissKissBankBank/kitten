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
    }

    this.handleResize = this.handleResize.bind(this)
  }

  componentDidMount() {
    this.updateTargetHighlight()
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate() {
    if (!this.isTargetHighlightUpdated()) this.updateTargetHighlight()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.updateTargetHighlight()
  }

  updateTargetHighlight() {
    this.placeTargetHighlight()
    this.props.onStepDisplay(this.props)
  }

  isTargetHighlightUpdated() {
    return this.state.currentTarget == this.props.targetElement
  }

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

  placeTargetHighlight() {
    if (domElementHelper.canUseDom()) {
      this.setState({
        targetHighlightStyles: this.getTargetHighlightPositionStyles(),
        currentTarget: this.props.targetElement
      })
    }
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
        <TourPopover { ...popoverProps } />
      </div>
    )
  }
}

TourStep.defaultProps = {
  onStepDisplay: function() {},
}

export default TourStep
