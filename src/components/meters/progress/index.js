"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Progress = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var valueMax = 100;

var StyledProgress = _styledComponents.default.div.withConfig({
  displayName: "progress__StyledProgress",
  componentId: "sc-11kqp3l-0"
})(["max-width:100%;"]);

var StyledRamp = (0, _styledComponents.default)(function (_ref) {
  var style = _ref.style,
      sliderColor = _ref.sliderColor,
      progressValue = _ref.progressValue,
      props = (0, _objectWithoutProperties2.default)(_ref, ["style", "sliderColor", "progressValue"]);
  return _react.default.createElement("div", props);
}).withConfig({
  displayName: "progress__StyledRamp",
  componentId: "sc-11kqp3l-1"
})(["position:relative;height:", ";background:", ";", " &::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:", ";transition:max-width 1s cubic-bezier(0,0.5,0.3,1);background:", ";", ".is-disabled &{background:", ";}}"], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, function (_ref2) {
  var style = _ref2.style;
  return style;
}, function (_ref3) {
  var progressValue = _ref3.progressValue;
  return progressValue;
}, function (_ref4) {
  var sliderColor = _ref4.sliderColor;
  return sliderColor;
}, StyledProgress, _colorsConfig.default.line2);

var Progress = function Progress(_ref5) {
  var color = _ref5.color,
      value = _ref5.value,
      rampProps = _ref5.rampProps,
      others = (0, _objectWithoutProperties2.default)(_ref5, ["color", "value", "rampProps"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      progressValue = _useState2[0],
      setProgressValue = _useState2[1];

  (0, _react.useEffect)(function () {
    setProgressValue(value > valueMax ? valueMax : value);
  }, []);
  return _react.default.createElement(StyledProgress, (0, _extends2.default)({}, others, {
    role: "progressbar",
    "aria-valuemin": 0,
    "aria-valuemax": valueMax,
    "aria-valuenow": progressValue
  }), _react.default.createElement(StyledRamp, (0, _extends2.default)({}, rampProps, {
    sliderColor: color,
    progressValue: "".concat(progressValue, "%")
  })));
};

exports.Progress = Progress;
Progress.defaultProps = {
  color: _colorsConfig.default.primary1,
  value: 50,
  rampProps: {}
};
Progress.propTypes = {
  color: _propTypes.default.string,
  value: _propTypes.default.number,
  rampProps: _propTypes.default.object
};