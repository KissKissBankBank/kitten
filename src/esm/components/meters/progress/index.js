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
})(["max-width:100%;.k-Meters-Progress__ramp{position:relative;height:", ";background:", ";&::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:", ";transition:max-width 1s cubic-bezier(0,0.5,0.3,1);background:", ";}}&.k-Meters-Progress--disabled,&.is-disabled{.k-Meters-Progress__ramp::after{background:", ";}}&.k-Meters-Progress--orion .k-Meters-Progress__ramp{&,&::after{border-radius:", ";}}"], pxToRem(2), COLORS.line1, function (_ref) {
  var progressValue = _ref.progressValue;
  return progressValue;
}, function (_ref2) {
  var sliderColor = _ref2.sliderColor;
  return sliderColor;
}, COLORS.line2, pxToRem(3));
export var Progress = function Progress(_ref3) {
  var color = _ref3.color,
      className = _ref3.className,
      value = _ref3.value,
      rampProps = _ref3.rampProps,
      variant = _ref3.variant,
      disabled = _ref3.disabled,
      others = _objectWithoutProperties(_ref3, ["color", "className", "value", "rampProps", "variant", "disabled"]);

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
    className: classNames('k-Meters-Progress', className, "k-Meters-Progress--".concat(variant), {
      'k-Meters-Progress--disabled': disabled
    }),
    sliderColor: color,
    progressValue: "".concat(progressValue, "%")
  }), /*#__PURE__*/React.createElement("div", _extends({}, rampProps, {
    className: classNames('k-Meters-Progress__ramp', rampProps.className)
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