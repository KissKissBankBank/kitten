import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["id", "className", "isExpanded"];
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var DropdownButton = forwardRef(function (_ref, dropdownButtonRef) {
  var id = _ref.id,
      className = _ref.className,
      isExpanded = _ref.isExpanded,
      rest = _objectWithoutProperties(_ref, _excluded);

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
  onClick: function onClick() {},
  isExpanded: false
};