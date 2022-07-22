import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
export const Cell = _ref => {
  let {
    name,
    className,
    style,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-SummaryCard__cell', className, "k-SummaryCard__cell__" + name),
    style: { ...style,
      '--summaryCardCell-name': name
    }
  }));
};
Cell.propTypes = {
  name: PropTypes.string.isRequired
};