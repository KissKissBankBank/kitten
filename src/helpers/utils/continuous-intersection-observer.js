"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _continuousIntersectionHook = _interopRequireDefault(require("./continuous-intersection-hook"));

var ContinuousIntersectionObserver = function ContinuousIntersectionObserver(_ref) {
  var options = _ref.options,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["options", "children"]);
  var beforeEl = (0, _react.useRef)(null);
  var afterEl = (0, _react.useRef)(null);
  var targetEl = (0, _react.useRef)(null);
  var consolidatedOptions = (0, _extends2.default)({
    root: null,
    rootMargin: '0px',
    threshold: 0
  }, options);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isBeforeElIntersecting = _useState2[0],
      setBeforeElIntersecting = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isTargetElIntersecting = _useState4[0],
      setTargetElIntersecting = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      isAfterElIntersecting = _useState6[0],
      setAfterElIntersecting = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isPartlyVisible = _useState8[0],
      setPartlyVisible = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      isCompletelyVisible = _useState10[0],
      setCompletelyVisible = _useState10[1];

  var _useState11 = (0, _react.useState)('before'),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      visibleElement = _useState12[0],
      setVisibleElement = _useState12[1];

  (0, _continuousIntersectionHook.default)((0, _extends2.default)({
    onIntersect: function onIntersect(entries) {
      entries.forEach(function (entry) {
        setBeforeElIntersecting(entry.isIntersecting);
        entry.isIntersecting && setVisibleElement('before');
      });
    },
    observedComponentRef: beforeEl
  }, consolidatedOptions));
  (0, _continuousIntersectionHook.default)((0, _extends2.default)({
    onIntersect: function onIntersect(entries) {
      entries.forEach(function (entry) {
        setTargetElIntersecting(entry.isIntersecting);
      });
    },
    observedComponentRef: targetEl
  }, consolidatedOptions));
  (0, _continuousIntersectionHook.default)((0, _extends2.default)({
    onIntersect: function onIntersect(entries) {
      entries.forEach(function (entry) {
        setAfterElIntersecting(entry.isIntersecting);
        entry.isIntersecting && setVisibleElement('after');
      });
    },
    observedComponentRef: afterEl
  }, consolidatedOptions));
  (0, _react.useEffect)(function () {
    setCompletelyVisible(false);
    setPartlyVisible(false);

    if (isTargetElIntersecting) {
      setPartlyVisible(true);

      if (!isBeforeElIntersecting && !isAfterElIntersecting || isBeforeElIntersecting && isAfterElIntersecting) {
        setVisibleElement('target');
        setCompletelyVisible(true);
      }
    }
  }, [isBeforeElIntersecting, isTargetElIntersecting, isAfterElIntersecting]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", (0, _extends2.default)({
    ref: beforeEl
  }, props.beforeComponentProps)), _react.default.createElement("div", (0, _extends2.default)({
    ref: targetEl
  }, props.targetComponentProps), children({
    isPartlyVisible: isPartlyVisible,
    isCompletelyVisible: isCompletelyVisible,
    visibleElement: visibleElement
  })), _react.default.createElement("div", (0, _extends2.default)({
    ref: afterEl
  }, props.afterComponentProps)));
};

var _default = ContinuousIntersectionObserver;
exports.default = _default;