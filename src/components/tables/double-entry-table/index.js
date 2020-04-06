"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DoubleEntryTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("./styles");

var DoubleEntryTable = function DoubleEntryTable(_ref) {
  var firstColWidth = _ref.firstColWidth,
      props = (0, _objectWithoutProperties2.default)(_ref, ["firstColWidth"]);
  return /*#__PURE__*/_react.default.createElement(_styles.Styles, {
    className: "DoubleEntryTable__Container",
    firstColWidth: firstColWidth
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "DoubleEntryTable__TableContainer"
  }, /*#__PURE__*/_react.default.createElement("table", (0, _extends2.default)({
    className: "DoubleEntryTable__Table"
  }, props))));
};

exports.DoubleEntryTable = DoubleEntryTable;

DoubleEntryTable.Header = function (_ref2) {
  var children = _ref2.children,
      headerRowProps = _ref2.headerRowProps,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["children", "headerRowProps"]);
  return /*#__PURE__*/_react.default.createElement("thead", others, /*#__PURE__*/_react.default.createElement("tr", headerRowProps, children));
};

DoubleEntryTable.Body = function (props) {
  return /*#__PURE__*/_react.default.createElement("tbody", props);
};

DoubleEntryTable.Row = function (props) {
  return /*#__PURE__*/_react.default.createElement("tr", props);
};

DoubleEntryTable.Col = function (props) {
  return /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    className: "DoubleEntryTable__Column DoubleEntryTable__Column--Col"
  }, props));
};

DoubleEntryTable.HeaderCol = function (props) {
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: "DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol",
    scope: "column"
  }, props));
};

DoubleEntryTable.TitleCol = function (props) {
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: "DoubleEntryTable__Column DoubleEntryTable__Column--TitleCol",
    scope: "row"
  }, props));
};

DoubleEntryTable.defaultProps = {
  firstColWidth: 240
};
DoubleEntryTable.propTypes = {
  firstColWidth: _propTypes.default.number
};