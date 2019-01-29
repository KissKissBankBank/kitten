"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavTabCarousel = void 0;

var _react = _interopRequireDefault(require("react"));

var _navTabCarousel = require("carousel/nav-tab-carousel");

var _deprecated = require("../../helpers/utils/deprecated");

var NavTabCarousel = function NavTabCarousel(props) {
  var message = "DEPRECATED:\n    Import `NavTabCarousel` from `\u2026/nav-tab-carousel`\n    instead of `\u2026/tab-bar-carousel.";
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: message
  }, _react.default.createElement(_navTabCarousel.NavTabCarousel, props));
};

exports.NavTabCarousel = NavTabCarousel;