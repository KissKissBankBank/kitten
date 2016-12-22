import React from 'react'
import classNames from 'classnames'
import GrabberIcon from 'kitten/components/icons/grabber-icon'
import domEvents from 'kitten/helpers/dom/events'
import domElementHelper from 'kitten/helpers/dom/element-helper'

// Slider input to choose an integer value between two bounds
export class Slider extends React.Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }

  // Allow other components to focus
  focus() {
    this.refs.focus()
  }

  handleKeyDown(e) {
    // Make bigger steps when alt or shift key is being held
    const { min, max } = this.props

    // make larger steps if alt or shift is entered,
    // change direction if we go to high to low
    let step = this.props.step
    if (e.altKey)
      step *= 10
    if (e.shiftKey)
      step *= 10
    if (min > max)
      step *= -1

    switch (e.keyCode) {
      case domEvents.keyboard.right:
      case domEvents.keyboard.up:
        return this.move(this.props.value + step)
      case domEvents.keyboard.left:
      case domEvents.keyboard.down:
        return this.move(this.props.value - step)
      case domEvents.keyboard.home:
        return this.move(min)
      case domEvents.keyboard.end:
        return this.move(max)
    }
  }

  handleMove(ratio) {
    const value = Math.round(ratio * (max - min) + min)
    this.move(value)
  }

  ratio() {
    return this.ratioForValue(this.props.value)
  }

  ratioForValue(value) {
    const { min, max } = this.props
    return value === null
      ? min
      : this.ratioInBounds((value - min) / (max - min))
  }

  move(to) {
    const value = this.valueInBounds(to)
    this.props.onChange(value, this.ratioForValue(value))
  }

  ratioInBounds(ratio) {
    return ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio)
  }

  valueInBounds(value) {
    const { min, max, step } = this.props

    if (value === null)
      return min < max ? min : max

    if (min < max) {
      if (value < min)
        return min
      else if (value > max)
        return max
    } else {
      if (value > min)
        return min
      else if (value < max)
        return max
    }

    return Math.round(value / step) * step
  }

  render() {
    return <SliderContents ref="contents"
                           { ...this.props }
                           { ...this.state }
                           onMove={ this.handleMove }
                           onKeyDown={ this.handleKeyDown }
                           onStart={ this.handleStart }
                           onClick={ this.handleClick }
                           onAction={ this.props.onAction }
                           ratio={ this.ratio() } />
  }
}

export class SliderContents extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      grabbing: false,
    }

    this.handleMove = this.handleMove.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleEnd = this.handleEnd.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  // Allow other components to focus
  focus() {
    this.refs.thumb.focus()
  }

  handleClick(e) {
    this.props.onAction(e)
    this.setState({ grabbing: false })
    this.handleMove(e)
  }

  handleStart(e) {
    this.props.onAction(e)
    e.stopPropagation()
    e.preventDefault()

    if (domElementHelper.canUseDom()) {
      document.addEventListener('mousemove', this.handleMove)
      document.addEventListener('touchmove', this.handleMove)
      document.addEventListener('mouseup', this.handleEnd)
      document.addEventListener('touchend', this.handleEnd)
    }

    this.setState({ grabbing: true })
  }

  handleEnd() {
    if (domElementHelper.canUseDom()) {
      document.removeEventListener('mousemove', this.handleMove)
      document.removeEventListener('touchmove', this.handleMove)
      document.removeEventListener('mouseup', this.handleEnd)
      document.removeEventListener('touchend', this.handleEnd)
    }

    this.setState({ grabbing: false })
  }

  handleMove(e) {
    e.stopPropagation()
    e.preventDefault()

    const coordinate = e.touches ? e.touches[0].clientX : e.clientX
    const trackPosition = this.refs.track.getBoundingClientRect()
    const ratio = (coordinate - trackPosition.left) / trackPosition.width

    this.props.onMove(ratio)
  }

  renderInput() {
    if (this.props.name)
      return <input type="hidden"
                    name={ this.props.name }
                    value={ this.props.value || '' } />
  }

  render() {
    const percentage = this.props.ratio * 100 + '%'
    const trackStyles = { width: percentage }
    const thumbStyles = { left: percentage }
    const grabbingClass = this.state.grabbing ? 'is-grabbing' : null

    return (
      <div className={ classNames("k-Slider", grabbingClass) }
           onClick={ this.handleClick }>
        <div className="k-Slider__ramp"
             ref="track">
          <div className="k-Slider__progress"
               style={ trackStyles }></div>
          <div className="k-Slider__handle"
               ref="thumb"
               style={ thumbStyles }
               role="slider"
               tabIndex="0"
               aria-valuemin={ this.props.min }
               aria-valuemax={ this.props.max }
               aria-valuenow={ this.props.value }
               onKeyDown={ this.props.onKeyDown }
               onMouseDown={ this.handleStart }
               onTouchStart={ this.handleStart }
               onClick={ this.handleClick }
               onFocus={ this.props.onAction }>
            <GrabberIcon className="k-Slider__handleIcon" />
          </div>
        </div>
        { this.renderInput() }
      </div>
    )
  }
}

Slider.propTypes = {
  // Starting value (e.g. 50)
  initialValue: React.PropTypes.number,

  // Minimum possible value (e.g. 0)
  min: React.PropTypes.number,

  // Maximum possible value (e.g. 100)
  max: React.PropTypes.number,

  // Space between each possible value when updated by keyboard (e.g. 1)
  step: React.PropTypes.number,

  // Input name, if needed (e.g. "amount")
  name: React.PropTypes.string,

  // Callback when the value changes (clicked or while dragging)
  // passes the current value and percentage as an argument
  //
  // You should use the given value and pass it back to the Slider props
  // to re-render the Slider value at the correct position.
  onChange: React.PropTypes.func,

  // Callback when we click, touch or focus
  onAction: React.PropTypes.func,
}

Slider.defaultProps = {
  value: null,
  min: 0,
  max: 100,
  step: 1,
  onChange: function() {},
  onChangeEnd: function() {},
}
