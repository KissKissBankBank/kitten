import React from 'react'
import domEvents from 'kitten/helpers/dom/events'

// Adds a `handleKeyDown` function to a `Slider` component
// that moves the handle left and right with the keyboard.
export function sliderKeyDownEnhancer(SliderComponent) {
  return class SliderWithHandleKeyDown extends React.Component {
    constructor(props) {
      super(props)

      this.handleKeyDown = this.handleKeyDown.bind(this)
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

    render() {
      return <SliderComponent { ...this.props } />
    }
  }
}
