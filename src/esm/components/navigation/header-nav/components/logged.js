import React from 'react';
import { Context } from './context';
export var Logged = function Logged(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var isLogged = _ref2.isLogged;
    return isLogged ? /*#__PURE__*/React.createElement(React.Fragment, null, children) : null;
  });
};