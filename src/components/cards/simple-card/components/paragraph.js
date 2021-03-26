"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paragraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _horizontalStroke = require("../../../../components/layout/horizontal-stroke");

var _parser = require("../../../../helpers/utils/parser");

var Paragraph = function Paragraph(_ref) {
  var paragraph = _ref.paragraph;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SimpleCard__paragraph"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    lineHeight: "normal",
    size: "micro",
    weight: "light",
    tag: "p",
    className: "k-u-margin-bottom-singleHalf"
  }, (0, _parser.parseHtml)(paragraph)), /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "tiny",
    className: "k-u-margin-top-singleHalf"
  }));
};

exports.Paragraph = Paragraph;
Paragraph.propTypes = {
  paragraph: _propTypes.default.string
};
Paragraph.defaultProps = {
  paragraph: null
};