// TODO move to "sliders" group (breaking change)

import React from 'react'
import { SliderBar } from 'kitten/components/sliders/slider-bar'
import { sliderKeyDownEnhancer }
  from 'kitten/enhancers/sliders/slider-key-down-enhancer'

// Slider input to choose an integer value between two bounds
class BaseSlider extends React.Component {
  constructor(props) {
    super(props)

    this.handleMove = this.handleMove.bind(this)
  }

  // Allow other components to focus
  focus() {
    this.refs.focus()
  }

  handleMove(ratio) {
    const { min, max } = this.props
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
    return <SliderBar ref="contents"
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

export const Slider = sliderKeyDownEnhancer(BaseSlider)

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
