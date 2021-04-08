"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Subtitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../components/typography/text");

var _parser = require("../../../../helpers/utils/parser");

var Subtitle = function Subtitle(_ref) {
  var subtitle = _ref.subtitle;
  return /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    weight: "regular",
    tag: "div",
    className: "k-SimpleCard__subtitle k-u-margin-bottom-singleHalf"
  }, (0, _parser.parseHtml)(subtitle));
};

exports.Subtitle = Subtitle;
Subtitle.propTypes = {
  subtitle: _propTypes.default.string
};
Subtitle.defaultProps = {
  subtitle: null
};