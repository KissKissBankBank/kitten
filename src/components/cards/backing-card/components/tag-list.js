"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var TagList = function TagList(props) {
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({}, props, {
    className: (0, _classnames.default)('k-BackingCard__tagList', 'k-BackingCard__drawer', props.className)
  }));
};

exports.TagList = TagList;