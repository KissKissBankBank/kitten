"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _continuousIntersectionHook = _interopRequireDefault(require("./continuous-intersection-hook"));

var _elementHelper = require("../dom/element-helper");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ContinuousIntersectionObserver = _ref => {
  let {
    options,
    children,
    ...props
  } = _ref;
  const beforeEl = (0, _react.useRef)(null);
  const afterEl = (0, _react.useRef)(null);
  const targetEl = (0, _react.useRef)(null);
  const consolidatedOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
    ...options
  };
  const isIOpossible = _elementHelper.domElementHelper.canUseDom() && 'IntersectionObserver' in window;
  const [isBeforeElIntersecting, setBeforeElIntersecting] = (0, _react.useState)(false);
  const [isTargetElIntersecting, setTargetElIntersecting] = (0, _react.useState)(false);
  const [isAfterElIntersecting, setAfterElIntersecting] = (0, _react.useState)(false);
  const [isPartlyVisible, setPartlyVisible] = (0, _react.useState)(false);
  const [visibleElement, setVisibleElement] = (0, _react.useState)('before');

  if (isIOpossible) {
    (0, _continuousIntersectionHook.default)({
      onIntersect: entries => {
        entries.forEach(entry => {
          setBeforeElIntersecting(entry.isIntersecting);
          entry.isIntersecting && setVisibleElement('before');
        });
      },
      observedComponentRef: beforeEl,
      ...consolidatedOptions
    });
    (0, _continuousIntersectionHook.default)({
      onIntersect: entries => {
        entries.forEach(entry => {
          setTargetElIntersecting(entry.isIntersecting);
        });
      },
      observedComponentRef: targetEl,
      ...consolidatedOptions
    });
    (0, _continuousIntersectionHook.default)({
      onIntersect: entries => {
        entries.forEach(entry => {
          setAfterElIntersecting(entry.isIntersecting);
          entry.isIntersecting && setVisibleElement('after');
        });
      },
      observedComponentRef: afterEl,
      ...consolidatedOptions
    });
    (0, _react.useEffect)(() => {
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