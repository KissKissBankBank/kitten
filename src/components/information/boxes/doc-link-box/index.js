"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DocLinkBox = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _linkBox = require("./../link-box");

var _linkBoxIllustration = require("../../../graphics/illustrations/link-box-illustration");

var _text = require("../../../typography/text");

var _excluded = ["isExternal", "href", "title", "text"];

var DocLinkBox = function DocLinkBox(_ref) {
  var isExternal = _ref.isExternal,
      href = _ref.href,
      title = _ref.title,
      text = _ref.text,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement(_linkBox.LinkBox, (0, _extends2.default)({
    href: href,
    isExternal: isExternal
  }, props), /*#__PURE__*/_react.default.createElement(_linkBox.LinkBox.Icon, null, /*#__PURE__*/_react.default.createElement(_linkBoxIllustration.LinkBoxIllustration, {
    className: "k-LinkBox__icon--svg"
  })), /*#__PURE__*/_react.default.createElement(_linkBox.LinkBox.Text, null, /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "span",
    weight: "500",
    size: "small",
    lineHeight: "normal"
  }, title), /*#__PURE__*/_react.default.createElement(_text.Text, {
    tag: "span",
    weight: "400",
    size: "micro",
    lineHeight: "normal"
  }, text)));
};

exports.DocLinkBox = DocLinkBox;