"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeSlider = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _nativeInputValueSetter = require("../../../helpers/dom/native-input-value-setter");

var _createEvent = require("../../../helpers/dom/create-event");

var StyledRangeSlider = _styledComponents.default.div.withConfig({
  displayName: "range-slider__StyledRangeSlider",
  componentId: "raabhu-0"
})(["--range-thumb-position:calc( ", " + var(--range-input-ratio) * (100% - (2 * ", ")) );position:relative;&::before,&::after{content:'';position:absolute;height:", ";left:0;top:", ";width:100%;background:", ";z-index:1;pointer-events:none;}&::after{width:var(--range-thumb-position);background:", ";}input[type='range']{position:relative;appearance:none;width:100%;height:", ";margin:0;padding:0;z-index:2;background:transparent;display:block;&:focus{outline:", " solid ", ";outline-offset:", ";}&::-moz-range-track{width:100%;height:", ";cursor:pointer;background:transparent;}&::-moz-range-thumb{height:", ";width:", ";box-sizing:border-box;background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50% 50%;cursor:pointer;-moz-appearance:none;appearance:none;border:", " solid ", ";border-top:0;border-bottom:0;border-radius:", ";}&::-webkit-slider-runnable-track{width:100%;height:", ";cursor:pointer;background:transparent;}&::-webkit-slider-thumb{height:", ";width:", ";box-sizing:border-box;background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50% 50%;cursor:pointer;-webkit-appearance:none;appearance:none;border:", " solid ", ";border-top:0;border-bottom:0;border-radius:", ";}&:active::-moz-range-thumb{background-color:", ";}&:active::-webkit-slider-thumb{background-color:", ";}}.k-RangeSlider__rangeThumbText{position:absolute;", " font-size:", ";line-height:", ";color:", ";left:calc(var(--range-thumb-position) - ", ");width:", ";text-align:center;}&.k-RangeSlider--rangeThumbText-top{padding-top:", ";.k-RangeSlider__rangeThumbText{top:0;}}&.k-RangeSlider--rangeThumbText-bottom{padding-bottom:", ";.k-RangeSlider__rangeThumbText{bottom:0;}}"], (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(25), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(18), _colorsConfig.default.line1, _colorsConfig.default.primary1, (0, _typography.pxToRem)(40), _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50 + 2 * 2), _colorsConfig.default.primary1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(50 + 2 * 2), _colorsConfig.default.primary1, (0, _typography.pxToRem)(2), _colorsConfig.default.background1, (0, _typography.pxToRem)(20), _colorsConfig.default.primary2, _colorsConfig.default.primary2, _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(18), _colorsConfig.default.font1, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(100), (0, _typography.pxToRem)(10 + 18), (0, _typography.pxToRem)(10 + 18));

var RangeSlider = function RangeSlider(_ref) {
  var onChange = _ref.onChange,
      initialValue = _ref.initialValue,
      wrapperProps = _ref.wrapperProps,
      rangeThumbText = _ref.rangeThumbText,
      rangeThumbPosition = _ref.rangeThumbPosition,
      props = (0, _objectWithoutProperties2.default)(_ref, ["onChange", "initialValue", "wrapperProps", "rangeThumbText", "rangeThumbPosition"]);

  var _useState = (0, _react.useState)(0),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      inputRatio = _useState2[0],
      setInputRatio = _useState2[1];

  var inputEl = (0, _react.useRef)(null);
  var changeEvent = (0, _createEvent.createEvent)('change');
  (0, _react.useEffect)(function () {
    inputEl && _nativeInputValueSetter.nativeInputValueSetter && _nativeInputValueSetter.nativeInputValueSetter.call(inputEl.current, initialValue);
    inputEl && inputEl.current.dispatchEvent(changeEvent);
  }, [initialValue, inputEl]);

  var getRatioFrom = function getRatioFrom(value) {
    var min = props.min,
        max = props.max;
    return (value - min) / (max - min);
  };

  var handleChange = function handleChange(event) {
    setInputRatio(getRatioFrom(event.target.value));
    onChange(event);
  };

  return /*#__PURE__*/_react.default.createElement(StyledRangeSlider, (0, _extends2.default)({
    style: {
      '--range-input-ratio': inputRatio
    },
    className: (0, _classnames.default)('k-RangeSlider', {
      'k-RangeSlider--rangeThumbText-top': rangeThumbText && rangeThumbPosition === 'top',
      'k-RangeSlider--rangeThumbText-bottom': rangeThumbText && rangeThumbPosition === 'bottom'
    })
  }, wrapperProps), /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: inputEl,
    type: "range",
    onChange: handleChange
  }, props)), rangeThumbText && /*#__PURE__*/_react.default.createElement("span", {
    className: "k-RangeSlider__rangeThumbText"
  }, rangeThumbText));
};

exports.RangeSlider = RangeSlider;
RangeSlider.propTypes = {
  initialValue: _propTypes.default.number,
  min: _propTypes.default.number,
  max: _propTypes.default.number,
  step: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  name: _propTypes.default.string.isRequired,
  onChange: _propTypes.default.func,
  wrapperProps: _propTypes.default.object,
  rangeThumbText: _propTypes.default.node,
  rangeThumbPosition: _propTypes.default.oneOf(['top', 'bottom'])
};
RangeSlider.defaultProps = {
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
  onChange: function onChange() {},
  wrapperProps: {},
  rangeThumbText: null,
  rangeThumbPosition: 'bottom'
};