import _extends from "@babel/runtime/helpers/extends";
import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
export const TextareaAutoResize = /*#__PURE__*/forwardRef((_ref, ref) => {
  let {
    minRows,
    maxRows,
    rows,
    onChange,
    value,
    lineHeight,
    style,
    ...others
  } = _ref;
  const [innerRows, setInnerRows] = useState(rows);
  const [innerValue, setInnerValue] = useState(value);

  const handleChange = event => {
    const elementStyles = getComputedStyle(event.target);
    const verticalPadding = parseInt(elementStyles.paddingTop) + parseInt(elementStyles.paddingBottom);
    const previousRows = event.target.rows;
    event.target.rows = minRows; // `~~` ? http://rocha.la/JavaScript-bitwise-operators-in-practice

    const currentRows = ~~((event.target.scrollHeight - verticalPadding) / lineHeight);

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
    style: { ...style,
      lineHeight: pxToRem(lineHeight)
    }
  }, others));
});
TextareaAutoResize.defaultProps = {
  minRows: 1,
  maxRows: 5,
  rows: 1,
  onChange: () => {},
  lineHeight: 18
};
TextareaAutoResize.propTypes = {
  minRows: PropTypes.number,
  maxRows: PropTypes.number,
  rows: PropTypes.number,
  onChange: PropTypes.func,
  lineHeight: PropTypes.number
};