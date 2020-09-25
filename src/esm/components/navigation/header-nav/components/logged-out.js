import React from 'react';
import { Context } from './context';
export var LoggedOut = function LoggedOut(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var isLogged = _ref2.isLogged;
    return !isLogged ? children : null;
  });
};