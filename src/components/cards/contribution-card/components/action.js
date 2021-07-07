"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Action = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../../components/buttons/button");

var _checkedCircleIcon = require("../../../icons/checked-circle-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var Action = function Action(_ref) {
  var isInputValid = _ref.isInputValid,
      title = _ref.title,
      props = (0, _objectWithoutProperties2.default)(_ref, ["isInputValid", "title"]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    borderRadius: 4,
    type: "submit"
  }, props, {
    className: (0, _classnames.default)('k-ContributionCard__action', {
      'k-ContributionCard__actionHide': isInputValid
    }, props.className)
  })), isInputValid && /*#__PURE__*/_react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
    bgColor: _colorsConfig.default.valid,
    color: _colorsConfig.default.background1,
    title: title
  }));
};

exports.Action = Action;
Action.defaultProps = {
  isInputValid: false,
  title: ""
};
Action.propTypes = {
  isInputValid: _propTypes.default.bool,
  title: _propTypes.default.string
};