"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var Image = function Image(props) {
  var cleanProps = Object.assign({}, props);
  delete cleanProps.__TYPE;
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, cleanProps, {
    className: (0, _classnames.default)('k-BackingCard__imageWrapper', props.className)
  }));
};

exports.Image = Image;
Image.propTypes = {
  children: _propTypes.default.node,
  __TYPE: _propTypes.default.string
};
Image.defaultProps = {
  __TYPE: 'Image'
};