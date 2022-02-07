import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "isSliding"],
    _excluded2 = ["children", "headerRowProps"],
    _excluded3 = ["className"],
    _excluded4 = ["className"];
import React from 'react';
import { Styles } from './styles';
import classNames from 'classnames';
export var SingleEntryTable = function SingleEntryTable(_ref) {
  var className = _ref.className,
      _ref$isSliding = _ref.isSliding,
      isSliding = _ref$isSliding === void 0 ? false : _ref$isSliding,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Styles, {
    className: classNames('SingleEntryTable__Container', {
      'SingleEntryTable--isSliding': isSliding
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "SingleEntryTable__TableContainer"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: classNames('SingleEntryTable__Table', className)
  }, props))));
};

SingleEntryTable.Header = function (_ref2) {
  var children = _ref2.children,
      headerRowProps = _ref2.headerRowProps,
      others = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("thead", others, /*#__PURE__*/React.createElement("tr", headerRowProps, children));
};

SingleEntryTable.Body = function (props) {
  return /*#__PURE__*/React.createElement("tbody", props);
};

SingleEntryTable.Row = function (props) {
  return /*#__PURE__*/React.createElement("tr", props);
};

SingleEntryTable.Col = function (_ref3) {
  var className = _ref3.className,
      props = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("td", _extends({
    className: classNames('SingleEntryTable__Column SingleEntryTable__Column--Col', className)
  }, props));
};

SingleEntryTable.HeaderCol = function (_ref4) {
  var className = _ref4.className,
      props = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("th", _extends({
    className: classNames('SingleEntryTable__Column SingleEntryTable__Column--HeaderCol', className),
    scope: "column"
  }, props));
};