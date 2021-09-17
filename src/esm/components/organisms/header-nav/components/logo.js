import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children"];
import React, { useContext } from 'react';
import { Context } from './context';
import classNames from 'classnames';
export var Logo = function Logo(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(Context),
      id = _useContext.id;

  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    id: id + "Logo",
    className: classNames('k-HeaderNav__Logo', className)
  }), children);
};