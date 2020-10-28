"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardButton = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("../../../../components/buttons/button");

var _deprecated = require("../../../../helpers/utils/deprecated");

var RewardCardButton = function RewardCardButton(_ref) {
  var label = _ref.label,
      onMouseEnter = _ref.onMouseEnter,
      onMouseLeave = _ref.onMouseLeave,
      onClick = _ref.onClick,
      isDisabled = _ref.isDisabled;
  if (!label) return null;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement(_button.Button, {
    size: "big",
    modifier: "helium",
    type: "button",
    "aria-labelledby": label,
    className: "k-LegacyRewardCard__button",
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    onClick: onClick,
    disabled: isDisabled
  }, label));
};

exports.RewardCardButton = RewardCardButton;
RewardCardButton.propTypes = {
  label: _propTypes.default.string,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func,
  onClick: _propTypes.default.func,
  isDisabled: _propTypes.default.bool
};
RewardCardButton.defaultProps = {
  label: '',
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {},
  onClick: function onClick() {},
  disabled: false
};