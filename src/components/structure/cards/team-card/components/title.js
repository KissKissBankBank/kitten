"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TeamCardTitle = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../../typography/text");

var _marger = require("../../../../layout/marger");

const TeamCardTitle = _ref => {
  let {
    children,
    subTitle
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "2"
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "medium",
    weight: "700",
    color: "font1"
  }, children), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_text.Text, {
    size: "micro",
    color: "font1",
    weight: "400"
  }, subTitle));
};

exports.TeamCardTitle = TeamCardTitle;
TeamCardTitle.propTypes = {
  children: _propTypes.default.string.isRequired,
  subTitle: _propTypes.default.string.isRequired
};