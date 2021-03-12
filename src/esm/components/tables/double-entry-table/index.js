import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Styles } from './styles';
export var DoubleEntryTable = function DoubleEntryTable(_ref) {
  var firstColWidth = _ref.firstColWidth,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["firstColWidth", "className"]);

  return /*#__PURE__*/React.createElement(Styles, {
    className: "DoubleEntryTable__Container",
    firstColWidth: firstColWidth
  }, /*#__PURE__*/React.createElement("div", {
    className: "DoubleEntryTable__TableContainer"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: classNames('DoubleEntryTable__Table', className)
  }, props))));
};

DoubleEntryTable.Header = function (_ref2) {
  var children = _ref2.children,
      headerRowProps = _ref2.headerRowProps,
      others = _objectWithoutProperties(_ref2, ["children", "headerRowProps"]);

  return /*#__PURE__*/React.createElement("thead", others, /*#__PURE__*/React.createElement("tr", headerRowProps, children));
};

DoubleEntryTable.Body = function (props) {
  return /*#__PURE__*/React.createElement("tbody", props);
};

DoubleEntryTable.Row = function (props) {
  return /*#__PURE__*/React.createElement("tr", props);
};

DoubleEntryTable.Col = function (_ref3) {
  var className = _ref3.className,
      props = _objectWithoutProperties(_ref3, ["className"]);

  return /*#__PURE__*/React.createElement("td", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--Col', className)
  }, props));
};

DoubleEntryTable.HeaderCol = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutProperties(_ref4, ["className"]);

  return /*#__PURE__*/React.createElement("th", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol', className),
    scope: "column"
  }, props));
};

DoubleEntryTable.TitleCol = function (_ref5) {
  var className = _ref5.className,
      props = _objectWithoutProperties(_ref5, ["className"]);

  return /*#__PURE__*/React.createElement("th", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--TitleCol', className),
    scope: "row"
  }, props));
};

DoubleEntryTable.defaultProps = {
  firstColWidth: 240
};
DoubleEntryTable.propTypes = {
  firstColWidth: PropTypes.number
};