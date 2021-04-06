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

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

var DoubleEntryTable = function DoubleEntryTable(_ref) {
  var firstColWidth = _ref.firstColWidth,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["firstColWidth", "className"]);
  return /*#__PURE__*/_react.default.createElement(_styles.Styles, {
    className: "DoubleEntryTable__Container",
    firstColWidth: firstColWidth
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "DoubleEntryTable__TableContainer"
  }, /*#__PURE__*/_react.default.createElement("table", (0, _extends2.default)({
    className: (0, _classnames.default)('DoubleEntryTable__Table', className)
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

DoubleEntryTable.Col = function (_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className"]);
  return /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    className: (0, _classnames.default)('DoubleEntryTable__Column DoubleEntryTable__Column--Col', className)
  }, props));
};

DoubleEntryTable.HeaderCol = function (_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className"]);
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: (0, _classnames.default)('DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol', className),
    scope: "column"
  }, props));
};

DoubleEntryTable.TitleCol = function (_ref5) {
  var className = _ref5.className,
      props = (0, _objectWithoutProperties2.default)(_ref5, ["className"]);
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: (0, _classnames.default)('DoubleEntryTable__Column DoubleEntryTable__Column--TitleCol', className),
    scope: "row"
  }, props));
};

DoubleEntryTable.defaultProps = {
  firstColWidth: 240
};
DoubleEntryTable.propTypes = {
  firstColWidth: _propTypes.default.number
};