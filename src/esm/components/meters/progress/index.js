import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
var valueMin = 0;
var valueMax = 100;
var StyledProgress = styled.div.withConfig({
  displayName: "progress__StyledProgress",
  componentId: "sc-11kqp3l-0"
})(["max-width:100%;"]);
var StyledRamp = styled(function (_ref) {
  var style = _ref.style,
      sliderColor = _ref.sliderColor,
      progressValue = _ref.progressValue,
      props = _objectWithoutProperties(_ref, ["style", "sliderColor", "progressValue"]);

  return /*#__PURE__*/React.createElement("div", props);
}).withConfig({
  displayName: "progress__StyledRamp",
  componentId: "sc-11kqp3l-1"
})(["position:relative;height:", ";background:", ";", " &::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:", ";transition:max-width 1s cubic-bezier(0,0.5,0.3,1);background:", ";", ".is-disabled &{background:", ";}}.k-Meters-Progress--orion &{border-radius:", ";&::after{border-radius:", ";}}"], pxToRem(2), COLORS.line1, function (_ref2) {
  var style = _ref2.style;
  return style;
}, function (_ref3) {
  var progressValue = _ref3.progressValue;
  return progressValue;
}, function (_ref4) {
  var sliderColor = _ref4.sliderColor;
  return sliderColor;
}, StyledProgress, COLORS.line2, pxToRem(3), pxToRem(3));
export var Progress = function Progress(_ref5) {
  var color = _ref5.color,
      value = _ref5.value,
      rampProps = _ref5.rampProps,
      variant = _ref5.variant,
      others = _objectWithoutProperties(_ref5, ["color", "value", "rampProps", "variant"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      progressValue = _useState2[0],
      setProgressValue = _useState2[1];

  useEffect(function () {
    var progress = 0;
    var valueAsNumber = parseInt(value, 10);
    if (valueAsNumber < valueMin) progress = valueMin;else if (valueAsNumber > valueMax) progress = valueMax;else progress = valueAsNumber;
    setProgressValue(progress);
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledProgress, _extends({}, others, {
    role: "progressbar",
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    "aria-valuenow": progressValue,
    className: classNames('k-Meters-Progress', "k-Meters-Progress--".concat(variant))
  }), /*#__PURE__*/React.createElement(StyledRamp, _extends({}, rampProps, {
    sliderColor: color,
    progressValue: "".concat(progressValue, "%"),
    className: "k-Meters-Progress__ramp"
  })));
};
Progress.defaultProps = {
  color: COLORS.primary1,
  value: 50,
  rampProps: {},
  variant: 'andromeda'
};
Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object,
  variant: PropTypes.string
};