"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Triptych = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _debounce = _interopRequireDefault(require("lodash/fp/debounce"));

var _grid = require("../../../layout/grid");

var _verticalStroke = require("../../../typography/vertical-stroke");

var _screenConfig = require("../../../../constants/screen-config");

var _typography = require("../../../../helpers/utils/typography");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _excluded = ["secondElementMarginTop"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var strokeHeight = 80;
var marginStroke = 2;
var tabletGutter = 50 / 2;
var desktopGutter = 40 / 2;
var StyledTriptych = (0, _styledComponents.default)(function (_ref) {
  var secondElementMarginTop = _ref.secondElementMarginTop,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_grid.Grid, props);
}).withConfig({
  displayName: "triptych__StyledTriptych",
  componentId: "sc-90mnmo-0"
})([".k-Triptych__verticalStroke{display:block;height:", ";margin:0 auto ", ";@media (max-width:", "px){height:", ";}}.k-Triptych__contentColumn.k-Triptych__contentColumn--odd{@media (min-width:", "px){margin-top:-", ";}}.k-Triptych__contentColumn:nth-last-child(3){margin-bottom:", ";@media (min-width:", ") and (max-width:", "){padding-left:", ";}@media (min-width:", "){margin-bottom:0;padding-right:", ";}}.k-Triptych__contentColumn:nth-last-child(2){margin-bottom:", ";@media (min-width:", ") and (max-width:", "){transition:margin-top 500 ease;margin-top:", ";padding-right:", ";}@media (min-width:", "){margin-bottom:0;padding-right:", ";padding-left:", ";}}.k-Triptych__contentColumn:nth-last-child(1){@media (min-width:", ") and (max-width:", "){padding-left:", ";}@media (min-width:", "){padding-left:", ";}}"], (0, _typography.pxToRem)(strokeHeight), (0, _typography.pxToRem)(20), _screenConfig.ScreenConfig.S.max, (0, _typography.pxToRem)(50), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(strokeHeight * 2 / 3 + marginStroke * 10), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(tabletGutter), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(desktopGutter), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), function (_ref2) {
  var secondElementMarginTop = _ref2.secondElementMarginTop;
  return (0, _typography.pxToRem)(-secondElementMarginTop);
}, (0, _typography.pxToRem)(tabletGutter), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(desktopGutter), (0, _typography.pxToRem)(desktopGutter), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.min), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.M.max), (0, _typography.pxToRem)(tabletGutter), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(desktopGutter));

var Triptych = function Triptych(_ref3) {
  var title = _ref3.title,
      item1 = _ref3.item1,
      item2 = _ref3.item2,
      item3 = _ref3.item3;

  var _useState = (0, _react.useState)(0),
      secondElementMarginTop = _useState[0],
      setsecondElementMarginTop = _useState[1];

  var titleElement = (0, _react.useRef)(null);
  var firstElement = (0, _react.useRef)(null);

  var updateSecondCardMargin = function updateSecondCardMargin() {
    var titleHeight = titleElement.current.clientHeight;
    var firstHeight = firstElement.current.clientHeight;
    setsecondElementMarginTop(firstHeight - titleHeight);
  };

  var debounceUpdateMargin = function debounceUpdateMargin() {
    return (0, _debounce.default)(200)(updateSecondCardMargin);
  };

  (0, _react.useEffect)(function () {
    debounceUpdateMargin();
    window.addEventListener('resize', debounceUpdateMargin);
    window.addEventListener('load', debounceUpdateMargin);
    return function () {
      window.removeEventListener('resize', debounceUpdateMargin);
      window.removeEventListener('load', debounceUpdateMargin);
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(StyledTriptych, {
    className: "k-Triptych k-u-align-center",
    secondElementMarginTop: secondElementMarginTop
  }, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
    "col-l": "10",
    "offset-l": "1",
    "col-m": "6",
    "offset-m": "0"
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: titleElement
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-margin-bottom-double"
  }, title), /*#__PURE__*/_react.default.createElement(_verticalStroke.VerticalStroke, {
    size: "huge",
    className: "k-Triptych__verticalStroke k-u-margin-bottom-double"
  }))), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn k-Triptych__contentColumn--odd"
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: firstElement
  }, item1)), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn"
  }, item2), /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
    "col-l": "4",
    "col-m": "6",
    className: "k-Triptych__contentColumn k-Triptych__contentColumn--odd"
  }, item3));
};

exports.Triptych = Triptych;
Triptych.propTypes = {
  title: _propTypes.default.node.isRequired,
  item1: _propTypes.default.node.isRequired,
  item2: _propTypes.default.node.isRequired,
  item3: _propTypes.default.node.isRequired
};