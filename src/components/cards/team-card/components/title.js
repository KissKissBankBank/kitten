"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../typography/text");

var _marger = require("../../../layout/marger");

var TeamCardTitle = function TeamCardTitle(_ref) {
  var children = _ref.children,
      subTitle = _ref.subTitle;
  return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "2"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "default",
    weight: "bold",
    color: "font1"
  }, children), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    color: "font1",
    weight: "light"
  }, subTitle));
};

exports.TeamCardTitle = TeamCardTitle;
TeamCardTitle.propTypes = {
  children: _propTypes.default.string.isRequired,
  subTitle: _propTypes.default.string.isRequired
};