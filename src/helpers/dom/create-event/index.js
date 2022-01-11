"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.createEvent = void 0;

var _elementHelper = _interopRequireDefault(require("../element-helper"));

var createEvent = function createEvent(eventName) {
  if (!_elementHelper.default.canUseDom()) return {};
  var event = new Event(eventName, {
    bubbles: true
  });
  return event;
};

exports.createEvent = createEvent;