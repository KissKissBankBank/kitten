"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _lazyHook = _interopRequireDefault(require("../helpers/utils/lazy-hook"));

var withLazy = function withLazy(WrappedComponent) {
  return function (props) {
    var lazyComponentRef = (0, _react.useRef)(null);
    var isLazyTriggered = (0, _lazyHook.default)(lazyComponentRef);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
      ref: lazyComponentRef
    }), /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, {
      isLazyTriggered: isLazyTriggered
    })));
  };
};

var _default = withLazy;
exports.default = _default;