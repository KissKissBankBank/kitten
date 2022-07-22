"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StepperIconValidated = exports.StepperIconInProgress = exports.StepperIconDefault = exports.StepperIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _checkedIcon = require("../../graphics/icons/checked-icon");

var _iconBadge = require("../../information/icon-badge");

const StepperIconDefault = props => /*#__PURE__*/_react.default.createElement(StepperIcon, (0, _extends2.default)({}, props, {
  state: "default"
}));

exports.StepperIconDefault = StepperIconDefault;

const StepperIconInProgress = props => /*#__PURE__*/_react.default.createElement(StepperIcon, (0, _extends2.default)({}, props, {
  state: "inProgress"
}));

exports.StepperIconInProgress = StepperIconInProgress;

const StepperIconValidated = props => /*#__PURE__*/_react.default.createElement(StepperIcon, (0, _extends2.default)({}, props, {
  state: "validated"
}));

exports.StepperIconValidated = StepperIconValidated;

const StepperIcon = _ref => {
  let {
    state,
    ...props
  } = _ref;

  if (state === 'inProgress' || state === 'progress') {
    return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, (0, _extends2.default)({
      size: "small",
      status: "info"
    }, props), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, null));
  }

  if (state === 'validated' || state === 'valid') {
    return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, (0, _extends2.default)({
      size: "small",
      status: "success"
    }, props), /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, null));
  }

  return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, (0, _extends2.default)({
    size: "small",
    empty: true
  }, props));
};

exports.StepperIcon = StepperIcon;
StepperIcon.defaultProps = {
  state: 'default'
};
StepperIcon.propTypes = {
  state: _propTypes.default.oneOf(['default', 'progress', 'inProgress', 'validated', 'valid'])
};