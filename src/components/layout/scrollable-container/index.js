"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyledContainer = exports.ScrollableContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _container = require("../../../components/layout/container");

var _excluded = ["shadowColor", "className", "children", "style"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var gradientWidth = 20;
var StyledContainer = (0, _styledComponents.default)(_container.Container).withConfig({
  displayName: "scrollable-container__StyledContainer",
  componentId: "sc-x0e0cn-0"
})(["position:relative;padding-left:0;padding-right:0;width:100%;.k-ScrollableContainer{display:flex;white-space:nowrap;overflow-x:auto;overflow-y:hidden;overscroll-behavior-x:none;-webkit-overflow-scrolling:touch;&::-webkit-scrollbar{display:none;}scrollbar-width:none;&::before,&::after{content:'';display:block;position:absolute;top:0;bottom:0;pointer-events:none;touch-action:none;z-index:5;width:", ";opacity:0;transition:opacity var(--transition);}&::before{left:0;background-image:linear-gradient( to right,var(--scrollableContainer-gradient),transparent );}&::after{right:0;background-image:linear-gradient( to left,var(--scrollableContainer-gradient),transparent );}&.k-ScrollableContainer--hasLeftGradient::before,&.k-ScrollableContainer--hasRightGradient::after{opacity:1;}}"], (0, _typography.pxToRem)(gradientWidth));
exports.StyledContainer = StyledContainer;

var ScrollableContainer = function ScrollableContainer(_ref) {
  var _ref$shadowColor = _ref.shadowColor,
      shadowColor = _ref$shadowColor === void 0 ? _colorsConfig.default.background1 : _ref$shadowColor,
      className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(true),
      leftGradientState = _useState[0],
      setLeftGradientState = _useState[1];

  var _useState2 = (0, _react.useState)(true),
      rightGradientState = _useState2[0],
      setRightGradientState = _useState2[1];

  var refScrollableContainer = (0, _react.useRef)(null);

  var checkRight = function checkRight(element) {
    if (!element) return false;
    return element.scrollLeft === element.scrollWidth - element.parentNode.clientWidth;
  };

  var onScroll = function onScroll(event) {
    setLeftGradientState(event.target.scrollLeft === 0);
    setRightGradientState(checkRight(event.target));
  };

  (0, _react.useEffect)(function () {
    var element = refScrollableContainer.current;
    element && element.addEventListener('scroll', (0, _throttle.default)(onScroll, 200));
    setRightGradientState(checkRight(element));
    return function () {
      return element && element.removeEventListener('scroll', (0, _throttle.default)(onScroll, 200));
    };
  });
  return /*#__PURE__*/_react.default.createElement(StyledContainer, (0, _extends2.default)({}, other, {
    className: (0, _classnames.default)('k-ScrollableContainer__wrapper', className)
  }), /*#__PURE__*/_react.default.createElement("div", {
    ref: refScrollableContainer,
    className: (0, _classnames.default)('k-ScrollableContainer', {
      'k-ScrollableContainer--hasLeftGradient': !leftGradientState,
      'k-ScrollableContainer--hasRightGradient': !rightGradientState
    }),
    style: (0, _extends2.default)({}, style, {
      '--scrollableContainer-gradient': shadowColor
    })
  }, children));
};

exports.ScrollableContainer = ScrollableContainer;
ScrollableContainer.propTypes = {
  shadowColor: _propTypes.default.string
};