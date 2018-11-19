"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlImageWithCaption = void 0;

var _react = _interopRequireDefault(require("react"));

var _imageWithCaption = require("kitten/components/images/image-with-caption");

var _text = require("kitten/components/typography/text");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlImageWithCaption = function KarlImageWithCaption() {
  return _react.default.createElement(_imageWithCaption.ImageWithCaption, null, _react.default.createElement(_text.Text, {
    size: "default",
    color: "font1"
  }, _react.default.createElement("span", {
    className: "k-u-weight-bold"
  }, "Lorem ipsum dolor "), "sit amet, consectetur adipiscing elit, sed do eiusmod"));
};

exports.KarlImageWithCaption = KarlImageWithCaption;