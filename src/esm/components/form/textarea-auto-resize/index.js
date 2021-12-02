import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
export var TextareaAutoResize = function TextareaAutoResize(_ref) {
  var minRows = _ref.minRows,
      maxRows = _ref.maxRows,
      rows = _ref.rows,
      onChange = _ref.onChange,
      value = _ref.value,
      lineHeight = _ref.lineHeight,
      style = _ref.style,
      others = _objectWithoutProperties(_ref, ["minRows", "maxRows", "rows", "onChange", "value", "lineHeight", "style"]);

  var _useState = useState(rows),
      _useState2 = _slicedToArray(_useState, 2),
      innerRows = _useState2[0],
      setInnerRows = _useState2[1];

  var _useState3 = useState(value),
      _useState4 = _slicedToArray(_useState3, 2),
      innerValue = _useState4[0],
      setInnerValue = _useState4[1];

  var handleChange = function handleChange(event) {
    var elementStyles = getComputedStyle(event.target);
    var verticalPadding = parseInt(elementStyles.paddingTop) + parseInt(elementStyles.paddingBottom);
    var previousRows = event.target.rows;
    event.target.rows = minRows; // `~~` ? http://rocha.la/JavaScript-bitwise-operators-in-practice

    var currentRows = ~~((event.target.scrollHeight - verticalPadding) / lineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setInnerValue(event.target.value);
    setInnerRows(Math.min(currentRows, maxRows));
    onChange(event);
  };

  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: innerRows,
    value: innerValue,
    onChange: handleChange,
    style: _extends({}, style, {
      lineHeight: pxToRem(lineHeight)
    })
  }, others));
};
TextareaAutoResize.defaultProps = {
  minRows: 1,
  maxRows: 5,
  rows: 1,
  onChange: function onChange() {},
  lineHeight: 18
};
TextareaAutoResize.propTypes = {
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  lineHeight: PropTypes.number
};