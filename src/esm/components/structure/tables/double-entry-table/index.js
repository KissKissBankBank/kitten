import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Styles } from './styles';
export const DoubleEntryTable = _ref => {
  let {
    firstColWidth,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(Styles, {
    className: "DoubleEntryTable__Container",
    firstColWidth: firstColWidth
  }, /*#__PURE__*/React.createElement("div", {
    className: "DoubleEntryTable__TableContainer"
  }, /*#__PURE__*/React.createElement("table", _extends({
    className: classNames('DoubleEntryTable__Table', className)
  }, props))));
};

DoubleEntryTable.Header = _ref2 => {
  let {
    children,
    headerRowProps,
    ...others
  } = _ref2;
  return /*#__PURE__*/React.createElement("thead", others, /*#__PURE__*/React.createElement("tr", headerRowProps, children));
};

DoubleEntryTable.Body = props => /*#__PURE__*/React.createElement("tbody", props);

DoubleEntryTable.Row = props => /*#__PURE__*/React.createElement("tr", props);

DoubleEntryTable.Col = _ref3 => {
  let {
    className,
    ...props
  } = _ref3;
  return /*#__PURE__*/React.createElement("td", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--Col', className)
  }, props));
};

DoubleEntryTable.HeaderCol = _ref4 => {
  let {
    className,
    ...props
  } = _ref4;
  return /*#__PURE__*/React.createElement("th", _extends({
    className: classNames('DoubleEntryTable__Column DoubleEntryTable__Column--HeaderCol', className),
    scope: "col"
  }, props));
};

DoubleEntryTable.TitleCol = _ref5 => {
  let {
    className,
    ...props
  } = _ref5;
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