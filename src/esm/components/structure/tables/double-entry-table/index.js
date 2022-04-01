import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["firstColWidth", "className"],
    _excluded2 = ["children", "headerRowProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className"],
    _excluded5 = ["className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Styles } from './styles';
export var DoubleEntryTable = function DoubleEntryTable(_ref) {
  var firstColWidth = _ref.firstColWidth,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

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
      others = _objectWithoutPropertiesLoose(_ref2, _excluded2);

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
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("td", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--Col', className)
  }, props));
};

DoubleEntryTable.HeaderCol = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("th", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol', className),
    scope: "col"
  }, props));
};

DoubleEntryTable.TitleCol = function (_ref5) {
  var className = _ref5.className,
      props = _objectWithoutPropertiesLoose(_ref5, _excluded5);

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