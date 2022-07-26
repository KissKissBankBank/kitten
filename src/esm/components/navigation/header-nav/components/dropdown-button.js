import _extends from "@babel/runtime/helpers/extends";
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export const DropdownButton = /*#__PURE__*/forwardRef((_ref, dropdownButtonRef) => {
  let {
    id,
    className,
    isExpanded,
    ...rest
  } = _ref;
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: dropdownButtonRef,
    id: id,
    type: "button",
    className: classNames('k-Dropdown__button', 'k-HeaderNavDropdown__button', 'k-u-reset-button', className),
    "aria-haspopup": "true",
    "aria-expanded": isExpanded
  }, rest));
});
DropdownButton.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool
};
DropdownButton.defaultProps = {
  children: 'Toggle button',
  onClick: () => {},
  isExpanded: false
};