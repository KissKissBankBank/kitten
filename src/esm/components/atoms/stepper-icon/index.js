import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { CheckedIcon } from '../../../components/icons/checked-icon';
import { IconBadge } from '../../../components/atoms/icon-badge';
export var StepperIconDefault = function StepperIconDefault(props) {
  return /*#__PURE__*/React.createElement(StepperIcon, _extends({}, props, {
    state: "default"
  }));
};
export var StepperIconInProgress = function StepperIconInProgress(props) {
  return /*#__PURE__*/React.createElement(StepperIcon, _extends({}, props, {
    state: "inProgress"
  }));
};
export var StepperIconValidated = function StepperIconValidated(props) {
  return /*#__PURE__*/React.createElement(StepperIcon, _extends({}, props, {
    state: "validated"
  }));
};
export var StepperIcon = function StepperIcon(_ref) {
  var state = _ref.state,
      props = _objectWithoutProperties(_ref, ["state"]);

  if (state === 'inProgress' || state === 'progress') {
    return /*#__PURE__*/React.createElement(IconBadge, _extends({
      size: "tiny"
    }, props), /*#__PURE__*/React.createElement(ArrowIcon, null));
  }

  if (state === 'validated' || state === 'valid') {
    return /*#__PURE__*/React.createElement(IconBadge, _extends({
      size: "tiny",
      valid: true
    }, props), /*#__PURE__*/React.createElement(CheckedIcon, null));
  }

  return /*#__PURE__*/React.createElement(IconBadge, _extends({
    size: "tiny",
    empty: true
  }, props));
};
StepperIcon.defaultProps = {
  state: 'default'
};
StepperIcon.propTypes = {
  state: PropTypes.oneOf(['default', 'progress', 'inProgress', 'validated', 'valid'])
};