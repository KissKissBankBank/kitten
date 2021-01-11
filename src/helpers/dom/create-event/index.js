"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createEvent = void 0;

var _elementHelper = _interopRequireDefault(require("../element-helper"));

/** https://stackoverflow.com/questions/42706536/correct-way-to-dispatch-event-in-ie-11 */

/** This allows us to dispatch browser events in old IE and newer browsers */
var createEvent = function createEvent(eventName) {
  //Needed for IE Support: https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent#Browser_Compatibility
  //https://stackoverflow.com/a/49071358/79677
  var event;

  if (typeof Event === 'function') {
    event = new Event(eventName, {
      bubbles: true
    });
  } else {
    if (_elementHelper.default.canUseDom()) {
      event = document.createEvent('Event');
      event.initEvent(eventName, true, true);
    }
  }

  return event;
};

exports.createEvent = createEvent;