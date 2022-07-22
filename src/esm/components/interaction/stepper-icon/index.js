import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../../graphics/icons/arrow-icon';
import { CheckedIcon } from '../../graphics/icons/checked-icon';
import { IconBadge } from '../../information/icon-badge';
export const StepperIconDefault = props => /*#__PURE__*/React.createElement(StepperIcon, _extends({}, props, {
  state: "default"
}));
export const StepperIconInProgress = props => /*#__PURE__*/React.createElement(StepperIcon, _extends({}, props, {
  state: "inProgress"
}));
export const StepperIconValidated = props => /*#__PURE__*/React.createElement(StepperIcon, _extends({}, props, {
  state: "validated"
}));
export const StepperIcon = _ref => {
  let {
    state,
    ...props
  } = _ref;

  if (state === 'inProgress' || state === 'progress') {
    return /*#__PURE__*/React.createElement(IconBadge, _extends({
      size: "small",
      status: "info"
    }, props), /*#__PURE__*/React.createElement(ArrowIcon, null));
  }

  if (state === 'validated' || state === 'valid') {
    return /*#__PURE__*/React.createElement(IconBadge, _extends({
      size: "small",
      status: "success"
    }, props), /*#__PURE__*/React.createElement(CheckedIcon, null));
  }

  return /*#__PURE__*/React.createElement(IconBadge, _extends({
    size: "small",
    empty: true
  }, props));
};
StepperIcon.defaultProps = {
  state: 'default'
};
StepperIcon.propTypes = {
  state: PropTypes.oneOf(['default', 'progress', 'inProgress', 'validated', 'valid'])
};