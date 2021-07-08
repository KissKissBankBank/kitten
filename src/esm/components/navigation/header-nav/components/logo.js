import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useContext } from 'react';
import { Context } from './context';
import classNames from 'classnames';
export var Logo = function Logo(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  var _useContext = useContext(Context),
      id = _useContext.id;

  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    id: "".concat(id, "Logo"),
    className: classNames('k-HeaderNav__Logo', className)
  }), children);
};