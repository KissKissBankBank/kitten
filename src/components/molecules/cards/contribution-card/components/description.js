"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Description = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../../../../components/atoms/typography/text");

var Description = function Description(props) {
  return /*#__PURE__*/_react.default.createElement(_text.Text, (0, _extends2.default)({
    tag: "p",
    color: "font1",
    weight: "light",
    size: "micro"
  }, props, {
    className: (0, _classnames.default)('k-ContributionCard__description', props.className)
  }));
};

exports.Description = Description;