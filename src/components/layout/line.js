"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Line = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Line = function Line(props) {
  return _react.default.createElement("div", _extends({}, props, {
    className: (0, _classnames.default)('k-Line', props.className)
  }));
};

exports.Line = Line;

Line.Item = function (props) {
  return _react.default.createElement("div", _extends({}, props, {
    className: (0, _classnames.default)('k-Line__item', props.className)
  }));
};

Line.defaultProps = {
  className: null,
  children: null
};
Line.Item.defaultProps = {
  className: null,
  children: null
};