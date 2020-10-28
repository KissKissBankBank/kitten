import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
export var DropdownButton = forwardRef(function (_ref, dropdownButtonRef) {
  var id = _ref.id,
      className = _ref.className,
      isExpanded = _ref.isExpanded,
      rest = _objectWithoutProperties(_ref, ["id", "className", "isExpanded"]);

  var buttonClassName = classNames('k-Dropdown__button', className);
  return /*#__PURE__*/React.createElement("button", _extends({
    ref: dropdownButtonRef,
    id: id,
    type: "button",
    className: buttonClassName,
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
}; // DEPRECATED: do not use default export.

export default DropdownButton;