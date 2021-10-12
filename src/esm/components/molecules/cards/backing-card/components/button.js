import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import classNames from 'classnames';
import { Button as KittenButton } from '../../../../molecules/buttons/button';
export var Button = function Button(_ref) {
  var className = _ref.className,
      props = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(KittenButton, _extends({
    borderRadius: 4,
    modifier: "helium",
    fit: "fluid"
  }, props, {
    className: classNames('k-BackingCard__button', 'k-BackingCard__drawer', className)
  }));
};