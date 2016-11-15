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
    this.handleTargetHighlightPlace = this.handleTargetHighlightPlace.bind(this)
  }

  // Component lifecyle.

  componentDidMount() {
    this.placeTargetHighlight()
    window.addEventListener('resize', this.handleResize)
  }

  componentWillReceiveProps(nextProps) {
    if (this.canPlaceTargetHighlight(nextProps)) {
      this.placeTargetHighlight(nextProps)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  // Component listener callbacks.

  canPlaceTargetHighlight(props) {
    return !!props.targetElement
  }

  handleResize() {
    this.placeTargetHighlight()
  }

  handleTargetHighlightPlace() {
    this.props.onTargetHighlightPlace(this.props)
  }

  // Component methods.

  getTargetHighlightPositionStyles(props = this.props) {
    const target = document.querySelector(props.targetElement)
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

  placeTargetHighlight(props = this.props) {
    if (domElementHelper.canUseDom()) {
      // TODO: fix this ugly patch.
      // We have to delay the target highlight display because of a rendering
      // bug due to the computed positioning.
      setTimeout(this.handleTargetHighlightPlace, 800)

      this.setState({
        targetHighlightStyles: this.getTargetHighlightPositionStyles(props),
        currentTarget: props.targetElement
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

export default TourStep
