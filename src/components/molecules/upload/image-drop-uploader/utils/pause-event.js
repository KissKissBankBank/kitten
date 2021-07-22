"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pauseEvent = void 0;

var pauseEvent = function pauseEvent(e) {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
};

exports.pauseEvent = pauseEvent;