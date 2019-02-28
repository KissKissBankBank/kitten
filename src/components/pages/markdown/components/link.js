"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownLink = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var MarkdownLink = function MarkdownLink(props) {
  return _react.default.createElement("a", {
    href: props.href,
    className: "k-Paragraph__link"
  }, props.children);
};

exports.MarkdownLink = MarkdownLink;