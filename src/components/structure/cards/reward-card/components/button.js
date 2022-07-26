"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../../action/button");

const Button = _ref => {
  let {
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    modifier: "helium",
    fit: "content",
    className: (0, _classnames.default)('k-RewardCard__button', 'k-RewardCard__drawer', className)
  }, props));
};

exports.Button = Button;