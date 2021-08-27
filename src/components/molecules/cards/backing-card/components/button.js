"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../../molecules/buttons/button");

var _excluded = ["className"];

var Button = function Button(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    borderRadius: 4,
    modifier: "helium"
  }, props, {
    className: (0, _classnames.default)('k-BackingCard__button', 'k-BackingCard__drawer', className)
  }));
};

exports.Button = Button;