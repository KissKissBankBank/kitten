"use strict";

exports.__esModule = true;
exports.createEvent = void 0;

var _elementHelper = require("../element-helper");

const createEvent = eventName => {
  if (!_elementHelper.domElementHelper.canUseDom()) return {};
  const event = new Event(eventName, {
    bubbles: true
  });
  return event;
};

exports.createEvent = createEvent;