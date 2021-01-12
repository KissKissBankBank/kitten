import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem, stepToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import TYPOGRAPHY from '../../../constants/typography-config';
import { nativeInputValueSetter } from '../../../helpers/dom/native-input-value-setter';
import { createEvent } from '../../../helpers/dom/create-event';
var StyledRangeSlider = styled.div.withConfig({
  displayName: "range-slider__StyledRangeSlider",
  componentId: "raabhu-0"
})(["--range-thumb-position:calc( ", " + var(--range-input-ratio) * (100% - (2 * ", ")) );position:relative;&::before,&::after{content:'';position:absolute;height:", ";left:0;top:", ";width:100%;background:", ";z-index:1;pointer-events:none;}&::after{width:var(--range-thumb-position);background:", ";}input[type='range']{position:relative;appearance:none;width:100%;height:", ";margin:0;padding:0;z-index:2;background:transparent;display:block;&:focus{outline:", " solid ", ";outline-offset:", ";}&::-moz-range-track{width:100%;height:", ";cursor:pointer;background:transparent;}&::-moz-range-thumb{height:", ";width:", ";box-sizing:border-box;background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50% 50%;cursor:pointer;-moz-appearance:none;appearance:none;border:", " solid ", ";border-top:0;border-bottom:0;border-radius:", ";}&::-webkit-slider-runnable-track{width:100%;height:", ";cursor:pointer;background:transparent;}&::-webkit-slider-thumb{height:", ";width:", ";box-sizing:border-box;background-color:", ";background-image:url(\"data:image/svg+xml,%3Csvg height='10' width='10' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 10'%3E%3Cpath fill='%23fff' d='M0 0 h 2 V 10 h -2 z M4 0 h 2 V 10 h -2 z M8 0 h 2 V 10 h -2 z' /%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:50% 50%;cursor:pointer;-webkit-appearance:none;appearance:none;border:", " solid ", ";border-top:0;border-bottom:0;border-radius:", ";}&:active::-moz-range-thumb{background-color:", ";}&:active::-webkit-slider-thumb{background-color:", ";}}.k-RangeSlider__rangeThumbText{position:absolute;", " font-size:", ";line-height:", ";color:", ";left:calc(var(--range-thumb-position) - ", ");width:", ";text-align:center;}&.k-RangeSlider--rangeThumbText-top{padding-top:", ";.k-RangeSlider__rangeThumbText{top:0;}}&.k-RangeSlider--rangeThumbText-bottom{padding-bottom:", ";.k-RangeSlider__rangeThumbText{bottom:0;}}"], pxToRem(25), pxToRem(25), pxToRem(4), pxToRem(18), COLORS.line1, COLORS.primary1, pxToRem(40), COLORS.primary4, pxToRem(2), pxToRem(2), pxToRem(40), pxToRem(40), pxToRem(50 + 2 * 2), COLORS.primary1, pxToRem(2), COLORS.background1, pxToRem(20), pxToRem(40), pxToRem(40), pxToRem(50 + 2 * 2), COLORS.primary1, pxToRem(2), COLORS.background1, pxToRem(20), COLORS.primary2, COLORS.primary2, TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(18), COLORS.font1, pxToRem(50), pxToRem(100), pxToRem(10 + 18), pxToRem(10 + 18));
export var RangeSlider = function RangeSlider(_ref) {
  var onChange = _ref.onChange,
      initialValue = _ref.initialValue,
      wrapperProps = _ref.wrapperProps,
      rangeThumbText = _ref.rangeThumbText,
      rangeThumbPosition = _ref.rangeThumbPosition,
      props = _objectWithoutProperties(_ref, ["onChange", "initialValue", "wrapperProps", "rangeThumbText", "rangeThumbPosition"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      inputRatio = _useState2[0],
      setInputRatio = _useState2[1];

  var inputEl = useRef(null);
  var changeEvent = createEvent('change');
  useEffect(function () {
    inputEl && nativeInputValueSetter && nativeInputValueSetter.call(inputEl.current, initialValue);
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

  return /*#__PURE__*/React.createElement(StyledRangeSlider, _extends({
    style: {
      '--range-input-ratio': inputRatio
    },
    className: classNames('k-RangeSlider', {
      'k-RangeSlider--rangeThumbText-top': rangeThumbText && rangeThumbPosition === 'top',
      'k-RangeSlider--rangeThumbText-bottom': rangeThumbText && rangeThumbPosition === 'bottom'
    })
  }, wrapperProps), /*#__PURE__*/React.createElement("input", _extends({
    ref: inputEl,
    type: "range",
    onChange: handleChange
  }, props)), rangeThumbText && /*#__PURE__*/React.createElement("span", {
    className: "k-RangeSlider__rangeThumbText"
  }, rangeThumbText));
};
RangeSlider.propTypes = {
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
  initialValue: 0,
  min: 0,
  max: 100,
  step: 1,
  onChange: function onChange() {},
  wrapperProps: {},
  rangeThumbText: null,
  rangeThumbPosition: 'bottom'
};