"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DocumentIconHouse = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _documentIconEmpty = require("../document-icon-empty");

var DocumentIconHouse = function DocumentIconHouse(props) {
  return /*#__PURE__*/_react.default.createElement(_documentIconEmpty.DocumentIconEmpty, props, /*#__PURE__*/_react.default.createElement("path", {
    className: "kiss-DocumentIcon__icon",
    d: "M11 12l5 4h-2v4h-2v-3h-2v3h-2v-4h-2l5 -4z"
  }));
};

exports.DocumentIconHouse = DocumentIconHouse;
DocumentIconHouse.propTypes = {
  title: _propTypes.default.string
};
DocumentIconHouse.defaultProps = {
  title: ''
};