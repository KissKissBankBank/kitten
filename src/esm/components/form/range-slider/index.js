import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["disabled", "onChange", "initialValue", "wrapperProps", "rangeThumbText", "rangeThumbPosition"];
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { nativeInputValueSetter } from '../../../helpers/dom/native-input-value-setter';
import { createEvent } from '../../../helpers/dom/create-event';
import { ScreenConfig } from '../../../constants/screen-config';
var StyledRangeSlider = styled.div.withConfig({
  displayName: "range-slider__StyledRangeSlider",
  componentId: "raabhu-0"
})(["--range-thumb-position:calc( ", " + var(--range-input-ratio) * (100% - (2 * ", ")) );position:relative;&::before,&::after{content:'';position:absolute;height:", ";left:0;top:", ";width:100%;background:", ";z-index:1;pointer-events:none;}&::after{width:var(--range-thumb-position);background:", ";}input[type='range']{position:relative;appearance:none;width:100%;height:", ";margin:0;padding:0;z-index:2;background:transparent;display:block;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&::-moz-range-track{width:100%;height:", ";cursor:pointer;background:transparent;}&::-moz-range-thumb{height:", ";width:", ";box-sizing:border-box;background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50% 50%;cursor:pointer;-moz-appearance:none;appearance:none;border:", " solid ", ";border-top:0;border-bottom:0;border-radius:", ";}&::-webkit-slider-runnable-track{width:100%;height:", ";cursor:pointer;background:transparent;}&::-webkit-slider-thumb{height:", ";width:", ";box-sizing:border-box;background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50% 50%;cursor:pointer;-webkit-appearance:none;appearance:none;border:", " solid ", ";border-top:0;border-bottom:0;border-radius:", ";}&:active::-moz-range-thumb{background-color:", ";}&:active::-webkit-slider-thumb{background-color:", ";}&:disabled::-moz-range-track{cursor:not-allowed;}&:disabled::-webkit-slider-runnable-track{cursor:not-allowed;}&:disabled::-moz-range-thumb{background-color:", ";cursor:not-allowed;}&:disabled::-webkit-slider-thumb{background-color:", ";cursor:not-allowed;}}.k-RangeSlider__rangeThumbText{position:absolute;", " font-size:", ";line-height:", ";color:", ";left:calc(var(--range-thumb-position) - ", ");width:", ";text-align:center;}&.k-RangeSlider--rangeThumbText-top{padding-top:", ";&::before,&::after{top:unset;bottom:", ";}.k-RangeSlider__rangeThumbText{top:0;}}&.k-RangeSlider--rangeThumbText-bottom{padding-bottom:", ";.k-RangeSlider__rangeThumbText{bottom:0;}}&.k-RangeSlider--disabled{&::after{background:", ";}.k-RangeSlider__rangeThumbText{color:", ";}}@media (min-width:", "){--range-thumb-position:calc( ", " + var(--range-input-ratio) * (100% - (2 * ", ")) );&::before,&::after{top:", ";}input[type='range']{height:", ";&::-moz-range-track{height:", ";}&::-moz-range-thumb{height:", ";width:", ";border-radius:", ";}&::-webkit-slider-runnable-track{height:", ";}&::-webkit-slider-thumb{height:", ";width:", ";border-radius:", ";}}&.k-RangeSlider--rangeThumbText-top{padding-top:", ";&::before,&::after{top:unset;bottom:", ";}.k-RangeSlider__rangeThumbText{top:0;}}&.k-RangeSlider--rangeThumbText-bottom{padding-bottom:", ";.k-RangeSlider__rangeThumbText{bottom:0;}}}"], pxToRem(20), pxToRem(20), pxToRem(4), pxToRem(13), COLORS.line1, COLORS.primary1, pxToRem(30), COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, pxToRem(30), pxToRem(30), pxToRem(40 + 2 * 2), COLORS.primary1, pxToRem(2), COLORS.background1, pxToRem(15), pxToRem(30), pxToRem(30), pxToRem(40 + 2 * 2), COLORS.primary1, pxToRem(2), COLORS.background1, pxToRem(15), COLORS.primary2, COLORS.primary2, COLORS.line2, COLORS.line2, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(18), COLORS.font1, pxToRem(50), pxToRem(100), pxToRem(20 + 13), pxToRem(13), pxToRem(20 + 13), COLORS.line2, COLORS.font2, pxToRem(ScreenConfig.S.min), pxToRem(25), pxToRem(25), pxToRem(18), pxToRem(40), pxToRem(40), pxToRem(40), pxToRem(50 + 2 * 2), pxToRem(20), pxToRem(40), pxToRem(40), pxToRem(50 + 2 * 2), pxToRem(20), pxToRem(10 + 18), pxToRem(18), pxToRem(10 + 18));
export var RangeSlider = function RangeSlider(_ref) {
  var disabled = _ref.disabled,
      onChange = _ref.onChange,
      initialValue = _ref.initialValue,
      wrapperProps = _ref.wrapperProps,
      rangeThumbText = _ref.rangeThumbText,
      rangeThumbPosition = _ref.rangeThumbPosition,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      inputRatio = _useState2[0],
      setInputRatio = _useState2[1];

  var inputEl = useRef(null);
  var changeEvent = createEvent('change');
  useEffect(function () {
    (inputEl === null || inputEl === void 0 ? void 0 : inputEl.current) && nativeInputValueSetter && nativeInputValueSetter.call(inputEl.current, initialValue);
    (inputEl === null || inputEl === void 0 ? void 0 : inputEl.current) && inputEl.current.dispatchEvent(changeEvent);
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

  return /*#__PURE__*/React.createElement(StyledRangeSlider, _extends({
    style: {
      '--range-input-ratio': inputRatio
    },
    className: classNames('k-RangeSlider', {
      'k-RangeSlider--disabled': disabled,
      'k-RangeSlider--rangeThumbText-top': rangeThumbText && rangeThumbPosition === 'top',
      'k-RangeSlider--rangeThumbText-bottom': rangeThumbText && rangeThumbPosition === 'bottom'
    })
  }, wrapperProps), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    ref: inputEl,
    type: "range",
    onChange: handleChange
  }, props)), rangeThumbText && /*#__PURE__*/React.createElement("span", {
    className: "k-RangeSlider__rangeThumbText"
  }, rangeThumbText));
};
RangeSlider.propTypes = {
  disabled: PropTypes.bool,
  initialValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  wrapperProps: PropTypes.object,
  rangeThumbText: PropTypes.node,
  rangeThumbPosition: PropTypes.oneOf(['top', 'bottom'])
};
RangeSlider.defaultProps = {
  disabled: false,
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
  onChange: function onChange() {},
  wrapperProps: {},
  rangeThumbText: null,
  rangeThumbPosition: 'bottom'
};