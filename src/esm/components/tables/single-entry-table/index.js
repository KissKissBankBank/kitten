import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Styles } from './styles';
import classNames from 'classnames';
export var SingleEntryTable = function SingleEntryTable(_ref) {
  var _ref$isSliding = _ref.isSliding,
      isSliding = _ref$isSliding === void 0 ? false : _ref$isSliding,
      props = _objectWithoutProperties(_ref, ["isSliding"]);

  return /*#__PURE__*/React.createElement(Styles, {
    className: classNames('SingleEntryTable__Container', {
      'SingleEntryTable--isSliding': isSliding
    })
  }, /*#__PURE__*/React.createElement("div", {
    className: "SingleEntryTable__TableContainer"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: "SingleEntryTable__Table"
  }, props))));
};

SingleEntryTable.Header = function (_ref2) {
  var children = _ref2.children,
      headerRowProps = _ref2.headerRowProps,
      others = _objectWithoutProperties(_ref2, ["children", "headerRowProps"]);

  return /*#__PURE__*/React.createElement("thead", others, /*#__PURE__*/React.createElement("tr", headerRowProps, children));
};

SingleEntryTable.Body = function (props) {
  return /*#__PURE__*/React.createElement("tbody", props);
};

SingleEntryTable.Row = function (props) {
  return /*#__PURE__*/React.createElement("tr", props);
};

SingleEntryTable.Col = function (props) {
  return /*#__PURE__*/React.createElement("td", _extends({
    className: "SingleEntryTable__Column SingleEntryTable__Column--Col"
  }, props));
};

SingleEntryTable.HeaderCol = function (props) {
  return /*#__PURE__*/React.createElement("th", _extends({
    className: "SingleEntryTable__Column SingleEntryTable__Column--HeaderCol",
    scope: "column"
  }, props));
};