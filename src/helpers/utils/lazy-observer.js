"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _intersectionObserver = require("./intersection-observer");

var LazyObserver = new _intersectionObserver.IntersectionObserverClass({
  rootMargin: '100px 0px'
});
var _default = LazyObserver;
exports.default = _default;