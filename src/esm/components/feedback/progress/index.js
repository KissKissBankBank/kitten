import _extends from "@babel/runtime/helpers/extends";
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import classNames from 'classnames';
const valueMin = 0;
const valueMax = 100;
const StyledProgress = styled.div.withConfig({
  displayName: "progress__StyledProgress",
  componentId: "sc-12czziu-0"
})(["max-width:100%;.k-Meters-Progress__ramp{position:relative;height:", ";background:", ";border-radius:var(--border-radius-xs);&::after{content:'';position:absolute;top:0;left:0;right:0;bottom:0;max-width:var(--progress-value);transition:max-width 1s cubic-bezier(0,0.5,0.3,1);border-radius:var(--border-radius-xs);background:var(--progress-color);}}&.k-Meters-Progress--disabled,&.is-disabled{.k-Meters-Progress__ramp::after{background:", ";}}"], pxToRem(2), COLORS.line1, COLORS.line2);
export const Progress = _ref => {
  let {
    color,
    className,
    value,
    rampProps,
    disabled,
    ...others
  } = _ref;
  const [progressValue, setProgressValue] = useState(0);
  useEffect(() => {
    const progress = Math.min(Math.max(parseInt(value, 10), valueMin), valueMax);
    setProgressValue(progress);
  }, [value]);
  return /*#__PURE__*/React.createElement(StyledProgress, _extends({}, others, {
    role: "progressbar",
    "aria-valuemin": valueMin,
    "aria-valuemax": valueMax,
    "aria-valuenow": progressValue,
    className: classNames('k-Meters-Progress', className, {
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
  rampProps: {}
};
Progress.propTypes = {
  color: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  rampProps: PropTypes.object
};