"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardInfo = void 0;

var _react = _interopRequireDefault(require("react"));

var _text = require("../../../../components/typography/text");

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var RewardCardInfo = function RewardCardInfo(_ref) {
  var label = _ref.label,
      value = _ref.value,
      withMarginBottom = _ref.withMarginBottom,
      disabled = _ref.disabled;
  return /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    color: "font1",
    weight: "regular",
    className: (0, _classnames.default)('k-RewardCard__infos', {
      'k-RewardCard__infos--hasBottomMargin': withMarginBottom,
      'k-RewardCard__infos--disabled': disabled
    })
  }, "".concat(label, " "), /*#__PURE__*/_react.default.createElement(_text.Text, {
    weight: "light"
  }, value));
};

exports.RewardCardInfo = RewardCardInfo;
RewardCardInfo.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  withMarginBottom: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
RewardCardInfo.defaultProps = {
  value: null,
  withMarginBottom: true,
  disabled: false
};