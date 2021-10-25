"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LazyLoader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _lazyObserver = _interopRequireDefault(require("./lazy-observer"));

var LazyLoader = function LazyLoader(_ref) {
  var children = _ref.children,
      others = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isVisible = _useState2[0],
      setVisible = _useState2[1];

  var lazyComponentRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    _lazyObserver.default.observe(lazyComponentRef.current, function () {
      return setVisible(true);
    });

    return function () {
      return _lazyObserver.default.unobserve(lazyComponentRef.current);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: lazyComponentRef
  }, others), isVisible && children);
};

exports.LazyLoader = LazyLoader;