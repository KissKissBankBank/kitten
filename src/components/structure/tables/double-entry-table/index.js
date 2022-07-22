"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DoubleEntryTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styles = require("./styles");

const DoubleEntryTable = _ref => {
  let {
    firstColWidth,
    className,
    ...props
  } = _ref;
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

DoubleEntryTable.Header = _ref2 => {
  let {
    children,
    headerRowProps,
    ...others
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("thead", others, /*#__PURE__*/_react.default.createElement("tr", headerRowProps, children));
};

DoubleEntryTable.Body = props => /*#__PURE__*/_react.default.createElement("tbody", props);

DoubleEntryTable.Row = props => /*#__PURE__*/_react.default.createElement("tr", props);

DoubleEntryTable.Col = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    className: (0, _classnames.default)('DoubleEntryTable__Column DoubleEntryTable__Column--Col', className)
  }, props));
};

DoubleEntryTable.HeaderCol = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: (0, _classnames.default)('DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol', className),
    scope: "col"
  }, props));
};

DoubleEntryTable.TitleCol = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
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