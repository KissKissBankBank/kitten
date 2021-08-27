"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _continuousIntersectionHook = _interopRequireDefault(require("./continuous-intersection-hook"));

var _elementHelper = _interopRequireDefault(require("../dom/element-helper"));

var _excluded = ["options", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ContinuousIntersectionObserver = function ContinuousIntersectionObserver(_ref) {
  var options = _ref.options,
      children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var beforeEl = (0, _react.useRef)(null);
  var afterEl = (0, _react.useRef)(null);
  var targetEl = (0, _react.useRef)(null);
  var consolidatedOptions = (0, _extends2.default)({
    root: null,
    rootMargin: '0px',
    threshold: 0
  }, options);
  var isIOpossible = _elementHelper.default.canUseDom() && 'IntersectionObserver' in window;

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

  var _useState9 = (0, _react.useState)('before'),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      visibleElement = _useState10[0],
      setVisibleElement = _useState10[1];

  if (isIOpossible) {
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
      setPartlyVisible(false);

      if (isTargetElIntersecting) {
        setPartlyVisible(true);

        if (!isBeforeElIntersecting && !isAfterElIntersecting || isBeforeElIntersecting && isAfterElIntersecting) {
          setVisibleElement('target');
        }
      }
    }, [isBeforeElIntersecting, isTargetElIntersecting, isAfterElIntersecting]);
  } else {
    // if there's not IntersectionObserver
    setVisibleElement('target');
    setPartlyVisible(true);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: beforeEl
  }, props.beforeComponentProps)), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: targetEl
  }, props.targetComponentProps), children({
    isPartlyVisible: isPartlyVisible,
    isCompletelyVisible: visibleElement === 'target',
    visibleElement: visibleElement
  })), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: afterEl
  }, props.afterComponentProps)));
};

var _default = ContinuousIntersectionObserver;
exports.default = _default;