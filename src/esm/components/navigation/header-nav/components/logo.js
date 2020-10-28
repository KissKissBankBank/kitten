import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { Context } from './context';
import classNames from 'classnames';
export var Logo = function Logo(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var id = _ref2.id;
    return /*#__PURE__*/React.createElement("a", _extends({}, props, {
      id: "".concat(id, "Logo"),
      className: classNames('k-HeaderNav-Logo', className)
    }), children);
  });
};