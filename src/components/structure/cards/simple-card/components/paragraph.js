"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Paragraph = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../typography/text");

var _horizontalStroke = require("../../../../typography/horizontal-stroke");

var _parser = require("../../../../../helpers/utils/parser");

const Paragraph = _ref => {
  let {
    paragraph
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-SimpleCard__paragraph"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    lineHeight: "normal",
    size: "micro",
    weight: "400",
    tag: "p",
    className: "k-u-margin-bottom-singleHalf"
  }, (0, _parser.parseHtml)(paragraph)), /*#__PURE__*/_react.default.createElement(_horizontalStroke.HorizontalStroke, {
    size: "small",
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