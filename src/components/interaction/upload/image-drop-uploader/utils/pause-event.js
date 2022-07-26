"use strict";

exports.__esModule = true;
exports.pauseEvent = void 0;

const pauseEvent = e => {
  if (e.stopPropagation) e.stopPropagation();
  if (e.preventDefault) e.preventDefault();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
};

exports.pauseEvent = pauseEvent;