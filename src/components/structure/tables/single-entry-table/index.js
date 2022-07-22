"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.SingleEntryTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

const SingleEntryTable = _ref => {
  let {
    className,
    isSliding = false,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement(_styles.Styles, {
    className: (0, _classnames.default)('SingleEntryTable__Container', {
      'SingleEntryTable--isSliding': isSliding
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "SingleEntryTable__TableContainer"
  }, /*#__PURE__*/_react.default.createElement("table", (0, _extends2.default)({
    className: (0, _classnames.default)('SingleEntryTable__Table', className)
  }, props))));
};

exports.SingleEntryTable = SingleEntryTable;

SingleEntryTable.Header = _ref2 => {
  let {
    children,
    headerRowProps,
    ...others
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("thead", others, /*#__PURE__*/_react.default.createElement("tr", headerRowProps, children));
};

SingleEntryTable.Body = props => /*#__PURE__*/_react.default.createElement("tbody", props);

SingleEntryTable.Row = props => /*#__PURE__*/_react.default.createElement("tr", props);

SingleEntryTable.Col = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    className: (0, _classnames.default)('SingleEntryTable__Column SingleEntryTable__Column--Col', className)
  }, props));
};

SingleEntryTable.HeaderCol = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: (0, _classnames.default)('SingleEntryTable__Column SingleEntryTable__Column--HeaderCol', className),
    scope: "col"
  }, props));
};