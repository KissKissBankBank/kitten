"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollableContainer = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styled = require("./styled");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _throttle = _interopRequireDefault(require("lodash/throttle"));

var _excluded = ["shadowColor", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ScrollableContainer = function ScrollableContainer(_ref) {
  var _ref$shadowColor = _ref.shadowColor,
      shadowColor = _ref$shadowColor === void 0 ? _colorsConfig.default.background1 : _ref$shadowColor,
      children = _ref.children,
      other = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      leftGradientState = _useState2[0],
      setLeftGradientState = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      rightGradientState = _useState4[0],
      setRightGradientState = _useState4[1];

  var refScrollableContainer = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var element = refScrollableContainer.current;

    function onScroll(event) {
      setLeftGradientState(event.target.scrollLeft === 0);
      setRightGradientState(event.target.scrollLeft === event.target.scrollWidth - event.target.parentNode.clientWidth);
    }

    element && element.addEventListener('scroll', (0, _throttle.default)(onScroll, 200));
    return function () {
      return element && element.removeEventListener('scroll', (0, _throttle.default)(onScroll, 200));
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_styled.StyledContainer, other, /*#__PURE__*/_react.default.createElement(_styled.StyledScrollableContainer, {
    shadowColor: shadowColor,
    ref: refScrollableContainer,
    displayLeftGradient: !leftGradientState,
    displayRightGradient: !rightGradientState
  }, children));
};

exports.ScrollableContainer = ScrollableContainer;
ScrollableContainer.propTypes = {
  shadowColor: _propTypes.default.string
};