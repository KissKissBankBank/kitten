"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepperIconValidated = exports.StepperIconInProgress = exports.StepperIconDefault = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _arrowIcon = require("../../components/icons/arrow-icon");

var _checkedIcon = require("../../components/icons/checked-icon");

var StepperIcon = function StepperIcon(_ref) {
  var className = _ref.className,
      children = _ref.children;
  var iconClassNames = (0, _classnames.default)('k-ButtonIcon', 'k-ButtonIcon--nano', 'k-ButtonIcon--hydrogen', 'k-ButtonIcon--withoutHover', 'k-ButtonIcon--rounded', 'k-Stepper__icon', className);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: iconClassNames
  }, children);
};

var StepperIconDefault = function StepperIconDefault() {
  return /*#__PURE__*/_react.default.createElement(StepperIcon, {
    className: "k-ButtonIcon--empty--nano"
  });
};

exports.StepperIconDefault = StepperIconDefault;

var StepperIconInProgress = function StepperIconInProgress() {
  var inProgressClassNames = (0, _classnames.default)('k-Stepper__icon--inProgress');
  return /*#__PURE__*/_react.default.createElement(StepperIcon, {
    className: inProgressClassNames
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    className: (0, _classnames.default)('k-ButtonIcon__svg', 'k-Stepper__svg')
  }));
};

exports.StepperIconInProgress = StepperIconInProgress;

var StepperIconValidated = function StepperIconValidated() {
  var validatedClassNames = (0, _classnames.default)('k-Stepper__icon--validated', 'k-ButtonIcon--checked--nano');
  return /*#__PURE__*/_react.default.createElement(StepperIcon, {
    className: validatedClassNames
  }, /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, {
    className: (0, _classnames.default)('k-ButtonIcon__svg', 'k-Stepper__svg')
  }));
};

exports.StepperIconValidated = StepperIconValidated;