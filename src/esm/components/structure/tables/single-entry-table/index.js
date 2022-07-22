import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import { Styles } from './styles';
import classNames from 'classnames';
export const SingleEntryTable = _ref => {
  let {
    className,
    isSliding = false,
    ...props
  } = _ref;
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

SingleEntryTable.Header = _ref2 => {
  let {
    children,
    headerRowProps,
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement("thead", others, /*#__PURE__*/React.createElement("tr", headerRowProps, children));
};

SingleEntryTable.Body = props => /*#__PURE__*/React.createElement("tbody", props);

SingleEntryTable.Row = props => /*#__PURE__*/React.createElement("tr", props);

SingleEntryTable.Col = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("td", _extends({
    className: classNames('SingleEntryTable__Column SingleEntryTable__Column--Col', className)
  }, props));
};

SingleEntryTable.HeaderCol = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("th", _extends({
    className: classNames('SingleEntryTable__Column SingleEntryTable__Column--HeaderCol', className),
    scope: "col"
  }, props));
};