"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderKeyDownHandler = sliderKeyDownHandler;

var _events = require("../../helpers/dom/events");

function sliderKeyDownHandler(e) {
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
    case _events.domEvents.keyboard.right:
    case _events.domEvents.keyboard.up:
      return this.move(this.props.value + step);

    case _events.domEvents.keyboard.left:
    case _events.domEvents.keyboard.down:
      return this.move(this.props.value - step);

    case _events.domEvents.keyboard.home:
      return this.move(min);

    case _events.domEvents.keyboard.end:
      return this.move(max);
  }
}