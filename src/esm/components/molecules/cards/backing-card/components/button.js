import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"];
import React from 'react';
import classNames from 'classnames';
import { Button as KittenButton } from '../../../../molecules/buttons/button';
export var Button = function Button(_ref) {
  var className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(KittenButton, _extends({
    modifier: "helium",
    fit: "content",
    className: classNames('k-BackingCard__button', 'k-BackingCard__drawer', className)
  }, props));
};