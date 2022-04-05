import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["minRows", "maxRows", "rows", "onChange", "value", "lineHeight", "style"];
import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
export var TextareaAutoResize = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var minRows = _ref.minRows,
      maxRows = _ref.maxRows,
      rows = _ref.rows,
      onChange = _ref.onChange,
      value = _ref.value,
      lineHeight = _ref.lineHeight,
      style = _ref.style,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(rows),
      innerRows = _useState[0],
      setInnerRows = _useState[1];

  var _useState2 = useState(value),
      innerValue = _useState2[0],
      setInnerValue = _useState2[1];

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
    ref: ref || null,
    rows: innerRows,
    value: innerValue,
    onChange: handleChange,
    style: _extends({}, style, {
      lineHeight: pxToRem(lineHeight)
    })
  }, others));
});
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