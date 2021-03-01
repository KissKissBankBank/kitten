"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocLinkBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _linkBox = require("./../link-box");

var _linkBoxIllustration = require("./../../../components/illustrations/link-box-illustration");

var _text = require("./../../../components/typography/text");

var DocLinkBox = function DocLinkBox(_ref) {
  var isExternal = _ref.isExternal,
      href = _ref.href,
      title = _ref.title,
      text = _ref.text,
      props = (0, _objectWithoutProperties2.default)(_ref, ["isExternal", "href", "title", "text"]);
  return /*#__PURE__*/_react.default.createElement(_linkBox.LinkBox, (0, _extends2.default)({
    href: href,
    isExternal: isExternal
  }, props), /*#__PURE__*/_react.default.createElement(_linkBox.LinkBox.Icon, null, /*#__PURE__*/_react.default.createElement(_linkBoxIllustration.LinkBoxIllustration, {
    className: "k-LinkBox__icon--svg"
  })), /*#__PURE__*/_react.default.createElement(_linkBox.LinkBox.Text, null, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "span",
    weight: "regular",
    size: "tiny",
    lineHeight: "normal"
  }, title), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "span",
    weight: "light",
    size: "micro",
    lineHeight: "normal"
  }, text)));
};

exports.DocLinkBox = DocLinkBox;