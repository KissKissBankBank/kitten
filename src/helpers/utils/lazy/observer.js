"use strict";

exports.__esModule = true;
exports.LazyObserver = void 0;

var _intersectionObserver = require("../intersection-observer");

const LazyObserver = new _intersectionObserver.IntersectionObserverClass({
  rootMargin: '100px 0px'
});
exports.LazyObserver = LazyObserver;