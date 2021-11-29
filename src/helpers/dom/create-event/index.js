"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = void 0;

var createEvent = function createEvent(eventName) {
  var event = new Event(eventName, {
    bubbles: true
  });
  return event;
};

exports.createEvent = createEvent;