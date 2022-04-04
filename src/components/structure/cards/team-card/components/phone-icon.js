"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TeamCardPhoneIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../../action/button");

var _phoneIcon = require("../../../../graphics/icons/phone-icon");

var _buttonWithTooltip = require("./button-with-tooltip");

var _colorsConfig = _interopRequireDefault(require("../../../../../constants/colors-config"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["phoneNumber", "tooltipColor", "className", "buttonLabel"];

var TeamCardPhoneIcon = function TeamCardPhoneIcon(_ref) {
  var phoneNumber = _ref.phoneNumber,
      tooltipColor = _ref.tooltipColor,
      className = _ref.className,
      buttonLabel = _ref.buttonLabel,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_button.Button, {
    tag: "a",
    fit: "icon",
    href: "tel:" + phoneNumber,
    modifier: "hydrogen",
    size: "tiny",
    className: (0, _classnames.default)('k-u-hidden@s-up', className),
    "aria-label": buttonLabel
  }, /*#__PURE__*/_react.default.createElement(_phoneIcon.PhoneIcon, {
    "aria-hidden": true
  })), /*#__PURE__*/_react.default.createElement(_buttonWithTooltip.TeamCardButtonWithTooltip, (0, _extends2.default)({
    phoneNumber: phoneNumber,
    tooltipColor: tooltipColor,
    className: (0, _classnames.default)('k-u-hidden@xs-down', className),
    "aria-label": buttonLabel
  }, props)));
};

exports.TeamCardPhoneIcon = TeamCardPhoneIcon;
TeamCardPhoneIcon.propTypes = {
  phoneNumber: _propTypes.default.string,
  tooltipColor: _propTypes.default.string,
  buttonLabel: _propTypes.default.string
};
TeamCardPhoneIcon.defaultProps = {
  phoneNumber: '',
  tooltipColor: _colorsConfig.default.primary1,
  buttonLabel: 'Telephone'
};