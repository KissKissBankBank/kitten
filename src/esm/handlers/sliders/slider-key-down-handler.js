import { domEvents } from '../../helpers/dom/events'; // KeyDown on a Slider should move the handle left and right with the keyboard.
// The component needs a `move()` function that takes a value.

export function sliderKeyDownHandler(e) {
  // Make bigger steps when alt or shift key is being held
  var _this$props = this.props,
      min = _this$props.min,
      max = _this$props.max; // make larger steps if alt or shift is entered,
  // change direction if we go to high to low

  var step = this.props.step;
  if (e.altKey) step *= 10;
  if (e.shiftKey) step *= 10;
  if (min > max) step *= -1;

  switch (e.keyCode) {
    case domEvents.keyboard.right:
    case domEvents.keyboard.up:
      return this.move(this.props.value + step);

    case domEvents.keyboard.left:
    case domEvents.keyboard.down:
      return this.move(this.props.value - step);

    case domEvents.keyboard.home:
      return this.move(min);

    case domEvents.keyboard.end:
      return this.move(max);
  }
}