"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardImage = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var RewardCardImage = function RewardCardImage(_ref) {
  var alt = _ref.alt,
      className = _ref.className,
      disabled = _ref.disabled,
      others = (0, _objectWithoutProperties2.default)(_ref, ["alt", "className", "disabled"]);
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({}, others, {
    alt: alt,
    className: (0, _classnames.default)('k-RewardCard__image', className, {
      'k-RewardCard__image--disabled': disabled
    })
  }));
};

exports.RewardCardImage = RewardCardImage;
RewardCardImage.propTypes = {
  alt: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
RewardCardImage.defaultProps = {
  alt: '',
  disabled: false
};