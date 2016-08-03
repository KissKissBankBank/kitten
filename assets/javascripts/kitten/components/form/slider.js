// Slider input to choose an integer value between two bounds
window.Slider = React.createClass({
  propTypes: {
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
    // passes the current value as an argument
    //
    // You should use the given value and pass it back to the Slider props
    // to re-render the Slider value at the correct position.
    onChange: React.PropTypes.func,

    // Callback when the value has changed (clicked or dragging ended)
    // passes the current value as an argument
    onChangeEnd: React.PropTypes.func,
  },

  getDefaultProps: function() {
    return {
      value: null,
      min: 0,
      max: 100,
      step: 1,
      onChange: function() {},
      onChangeEnd: function() {},
    }
  },

  getInitialState: function() {
    return {
      grabbing: false
    }
  },

  // Allow other components to focus
  focus: function() {
    this.refs.thumb.focus()
  },

  handleKeyDown: function(e) {
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
      case keyboard.right:
      case keyboard.up:
        return this.move(this.props.value + step)
      case keyboard.left:
      case keyboard.down:
        return this.move(this.props.value - step)
      case keyboard.home:
        return this.move(min)
      case keyboard.end:
        return this.move(max)
    }
  },

  handleStart: function(e) {
    e.stopPropagation()
    e.preventDefault()

    document.addEventListener('mousemove', this.handleMove)
    document.addEventListener('mouseup', this.handleEnd)
    this.setState({ grabbing: true })
  },

  handleEnd: function(e) {
    document.removeEventListener('mousemove', this.handleMove)
    document.removeEventListener('mouseup', this.handleEnd)
    this.setState({ grabbing: false })
    this.props.onChangeEnd()
  },

  handleClick: function(e) {
    this.setState({ grabbing: false })
    this.handleMove(e)
  },

  handleMove: function(e) {
    e.stopPropagation()
    e.preventDefault()

    const { min, max } = this.props
    const coordinate = e.touches ? e.touches[0].clientX : e.clientX
    const trackPosition = this.refs.track.getBoundingClientRect()
    const ratio = (coordinate - trackPosition.left) / trackPosition.width
    const value = Math.round(ratio * (max - min) + min)

    this.move(value)
  },

  percentage: function() {
    const { min, max, value } = this.props
    const ratio = (value - min) / (max - min)
    const boundRatio = ratio > 1 ? 1 : (ratio < 0 ? 0 : ratio)
    return boundRatio * 100 + '%'
  },

  move: function(to) {
    const value = this.valueInBounds(to)

    this.props.onChange(value)
    if (!this.state.grabbing)
      this.props.onChangeEnd()
  },

  valueInBounds: function(value) {
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
  },

  render: function() {
    const trackStyles = { width: this.percentage() },
          thumbStyles = { left: this.percentage() },
          grabbingClass = this.state.grabbing ? "is-grabbing" : null

    if (this.props.name)
      var input = <input type="hidden"
                         name={this.props.name}
                         value={this.props.value ? this.props.value : ""} />

    return (
      <div className={classes("k-Slider", grabbingClass)}
           onClick={this.handleClick}>
        <div className="k-Slider__ramp"
             ref="track">
          <div className="k-Slider__progress"
               style={trackStyles}></div>
          <div className="k-Slider__handle"
               ref="thumb"
               style={thumbStyles}
               role="slider"
               tabIndex="0"
               aria-valuemin={this.props.min}
               aria-valuemax={this.props.max}
               aria-valuenow={this.props.value}
               onKeyDown={this.handleKeyDown}
               onMouseDown={this.handleStart}
               onClick={this.handleClick}>
            <GrabberIcon className="k-Slider__handle__icon" />
          </div>
        </div>
        {input}
      </div>
    )
  }
})
