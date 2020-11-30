import React from 'react';
import classNames from 'classnames';
import { ArrowIcon } from '../../components/icons/arrow-icon';
import { CheckedIcon } from '../../components/icons/checked-icon';

var StepperIcon = function StepperIcon(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var iconClassNames = classNames('k-ButtonIcon', 'k-ButtonIcon--nano', 'k-ButtonIcon--hydrogen', 'k-ButtonIcon--withoutHover', 'k-ButtonIcon--rounded', 'k-Stepper__icon', className);
  return /*#__PURE__*/React.createElement("span", {
    className: iconClassNames
  }, children);
};

export var StepperIconDefault = function StepperIconDefault() {
  return /*#__PURE__*/React.createElement(StepperIcon, {
    className: "k-ButtonIcon--empty--nano"
  });
};
export var StepperIconInProgress = function StepperIconInProgress() {
  var inProgressClassNames = classNames('k-Stepper__icon--inProgress');
  return /*#__PURE__*/React.createElement(StepperIcon, {
    className: inProgressClassNames
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    className: classNames('k-ButtonIcon__svg', 'k-Stepper__svg')
  }));
};
export var StepperIconValidated = function StepperIconValidated() {
  var validatedClassNames = classNames('k-Stepper__icon--validated', 'k-ButtonIcon--checked--nano');
  return /*#__PURE__*/React.createElement(StepperIcon, {
    className: validatedClassNames
  }, /*#__PURE__*/React.createElement(CheckedIcon, {
    className: classNames('k-ButtonIcon__svg', 'k-Stepper__svg')
  }));
};