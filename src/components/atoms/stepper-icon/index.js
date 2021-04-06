"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepperIcon = exports.StepperIconValidated = exports.StepperIconInProgress = exports.StepperIconDefault = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _checkedIcon = require("../../../components/icons/checked-icon");

var _iconBadge = require("../../../components/atoms/icon-badge");

var StepperIconDefault = function StepperIconDefault(props) {
  return /*#__PURE__*/_react.default.createElement(StepperIcon, (0, _extends2.default)({}, props, {
    state: "default"
  }));
};

exports.StepperIconDefault = StepperIconDefault;

var StepperIconInProgress = function StepperIconInProgress(props) {
  return /*#__PURE__*/_react.default.createElement(StepperIcon, (0, _extends2.default)({}, props, {
    state: "inProgress"
  }));
};

exports.StepperIconInProgress = StepperIconInProgress;

var StepperIconValidated = function StepperIconValidated(props) {
  return /*#__PURE__*/_react.default.createElement(StepperIcon, (0, _extends2.default)({}, props, {
    state: "validated"
  }));
};

exports.StepperIconValidated = StepperIconValidated;

var StepperIcon = function StepperIcon(_ref) {
  var state = _ref.state,
      props = (0, _objectWithoutProperties2.default)(_ref, ["state"]);

  if (state === 'inProgress' || state === 'progress') {
    return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, (0, _extends2.default)({
      size: "tiny"
    }, props), /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, null));
  }

  if (state === 'validated' || state === 'valid') {
    return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, (0, _extends2.default)({
      size: "tiny",
      valid: true
    }, props), /*#__PURE__*/_react.default.createElement(_checkedIcon.CheckedIcon, null));
  }

  return /*#__PURE__*/_react.default.createElement(_iconBadge.IconBadge, (0, _extends2.default)({
    size: "tiny",
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