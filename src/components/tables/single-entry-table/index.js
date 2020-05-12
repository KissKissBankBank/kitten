"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleEntryTable = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var SingleEntryTable = function SingleEntryTable(_ref) {
  var props = (0, _extends2.default)({}, _ref);
  return /*#__PURE__*/_react.default.createElement(_styles.Styles, {
    className: "SingleEntryTable__Container"
  }, /*#__PURE__*/_react.default.createElement("table", (0, _extends2.default)({
    className: "SingleEntryTable__Table"
  }, props)));
};

exports.SingleEntryTable = SingleEntryTable;

SingleEntryTable.Header = function (_ref2) {
  var children = _ref2.children,
      headerRowProps = _ref2.headerRowProps,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["children", "headerRowProps"]);
  return /*#__PURE__*/_react.default.createElement("thead", others, /*#__PURE__*/_react.default.createElement("tr", headerRowProps, children));
};

SingleEntryTable.Body = function (props) {
  return /*#__PURE__*/_react.default.createElement("tbody", props);
};

SingleEntryTable.Row = function (props) {
  return /*#__PURE__*/_react.default.createElement("tr", props);
};

SingleEntryTable.Col = function (props) {
  return /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    className: "SingleEntryTable__Column SingleEntryTable__Column--Col"
  }, props));
};

SingleEntryTable.HeaderCol = function (props) {
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: "SingleEntryTable__Column SingleEntryTable__Column--HeaderCol",
    scope: "column"
  }, props));
};