"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SingleEntryTable = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("./styles");

var _classnames = _interopRequireDefault(require("classnames"));

var SingleEntryTable = function SingleEntryTable(_ref) {
  var className = _ref.className,
      _ref$isSliding = _ref.isSliding,
      isSliding = _ref$isSliding === void 0 ? false : _ref$isSliding,
      props = (0, _objectWithoutProperties2.default)(_ref, ["className", "isSliding"]);
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

SingleEntryTable.Col = function (_ref3) {
  var className = _ref3.className,
      props = (0, _objectWithoutProperties2.default)(_ref3, ["className"]);
  return /*#__PURE__*/_react.default.createElement("td", (0, _extends2.default)({
    className: (0, _classnames.default)('SingleEntryTable__Column SingleEntryTable__Column--Col', className)
  }, props));
};

SingleEntryTable.HeaderCol = function (_ref4) {
  var className = _ref4.className,
      props = (0, _objectWithoutProperties2.default)(_ref4, ["className"]);
  return /*#__PURE__*/_react.default.createElement("th", (0, _extends2.default)({
    className: (0, _classnames.default)('SingleEntryTable__Column SingleEntryTable__Column--HeaderCol', className),
    scope: "column"
  }, props));
};