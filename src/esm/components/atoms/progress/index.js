import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["color", "className", "value", "rampProps", "variant", "disabled"];
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
  componentId: "sc-8timnv-0"
})(["max-width:100%;.k-Meters-Progress__ramp{position:relative;height:", ";background:", ";&::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:var(--progress-value);transition:max-width 1s cubic-bezier(0,0.5,0.3,1);background:var(--progress-color);}}&.k-Meters-Progress--disabled,&.is-disabled{.k-Meters-Progress__ramp::after{background:", ";}}&.k-Meters-Progress--orion .k-Meters-Progress__ramp{&,&::after{border-radius:var(--border-radius-xs);}}"], pxToRem(2), COLORS.line1, COLORS.line2);
export var Progress = function Progress(_ref) {
  var color = _ref.color,
      className = _ref.className,
      value = _ref.value,
      rampProps = _ref.rampProps,
      variant = _ref.variant,
      disabled = _ref.disabled,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(0),
      progressValue = _useState[0],
      setProgressValue = _useState[1];

  useEffect(function () {
    var progress = Math.min(Math.max(parseInt(value, 10), valueMin), valueMax);
    setProgressValue(progress);
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledProgress, _extends({}, others, {
    role: "progressbar",
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    "aria-valuenow": progressValue,
    className: classNames('k-Meters-Progress', className, "k-Meters-Progress--" + variant, {
      'k-Meters-Progress--disabled': disabled
    }),
    style: {
      '--progress-color': color,
      '--progress-value': progressValue + "%"
    }
  }), /*#__PURE__*/React.createElement("div", _extends({}, rampProps, {
    className: classNames('k-Meters-Progress__ramp', rampProps.className)
  })));
};
Progress.defaultProps = {
  color: COLORS.primary1,
  value: '50',
  rampProps: {},
  variant: 'orion'
};
Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object,
  variant: PropTypes.oneOf(['orion', 'andromeda'])
};