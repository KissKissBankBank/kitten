import React from 'react'
import { SliderContents, withHandleKeyDown }
  from 'kitten/components/form/slider'
import SliderTooltip from 'kitten/components/form/slider-tooltip'

class BaseSliderWithTooltipAndPower extends React.Component {
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
    const powerRatio = this.computePowerRatio(ratio)
    const value = Math.round(powerRatio * (max - min) + min)
    this.move(value)
  }

  move(to) {
    const value = this.valueInBounds(to)
    const ratio = this.ratioForValue(value)
    this.setState({ ratio })
    this.props.onChange(value, ratio)
  }

  // Turns a normal ratio (between 0 and 1) into a ratio with a different
  // distribution based on the power.
  //
  // Example:
  //   computePowerRatio(0) # => 0
  //   computePowerRatio(0.5) # => 0.76534543
  //   computePowerRatio(1) # => 1
  computePowerRatio(ratio) {
    return ratio < 0 ? 0 : Math.pow(ratio, this.props.power)
  }

  // Inverse of computePowerRatio. Turns a powered ratio (between 0 and 1) into
  // the ratio where we should place the slider.
  //
  // Example:
  //   computeRatio(0) # => 0
  //   computeRatio(0.76534543) # => 0.5
  //   computeRatio(1) # => 1
  computeRatio(powerRatio) {
    return Math.pow(powerRatio, 1 / this.props.power)
  }

  ratio() {
    return this.ratioForValue(this.props.value)
  }

  ratioForValue(value) {
    const { min, max } = this.props

    if (value === null || isNaN(value))
      return 0

    const powerRatio = (value - min) / (max - min)
    return this.ratioInBounds(this.computeRatio(powerRatio))
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
    const { tooltipClass, tooltipText } = this.props

    return (
      <div>
        <SliderTooltip className={ tooltipClass }
                       percentage={ this.ratio() * 100 + '%' }>
          { tooltipText }
        </SliderTooltip>
        <SliderContents onAction={ this.props.onAction }
                        onMove={ this.props.onMove }
                        name={ this.props.name }
                        value={ this.props.value }
                        min={ this.props.min }
                        max={ this.props.max }
                        ratio={ this.ratio() }
                        onMove={ this.handleMove }
                        onStart={ this.handleStart }
                        onKeyDown={ this.handleKeyDown }
                        onStart={ this.handleStart }
                        onStart={ this.handleStart }
                        onClick={ this.handleClick }
                        onAction={ this.props.onAction } />
      </div>
    )
  }
}

export const SliderWithTooltipAndPower =
  withHandleKeyDown(BaseSliderWithTooltipAndPower)

SliderWithTooltipAndPower.defaultProps = {
  value: null,
  min: 0,
  max: 100,
  step: 1,
  power: 1,
  onChange: function() {},
  onChangeEnd: function() {},
}
