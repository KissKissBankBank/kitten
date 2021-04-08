"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _button = require("../../../buttons/button/button");

var Button = function Button(props) {
  var cleanProps = Object.assign({}, props);
  delete cleanProps.__TYPE;
  return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
    borderRadius: 4,
    modifier: "helium"
  }, cleanProps, {
    className: (0, _classnames.default)('k-BackingCard__button', 'k-BackingCard__drawer', props.className)
  }));
};

exports.Button = Button;
Button.propTypes = {
  children: _propTypes.default.node,
  __TYPE: _propTypes.default.string
};
Button.defaultProps = {
  __TYPE: 'Button'
};