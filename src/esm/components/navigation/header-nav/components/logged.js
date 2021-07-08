import React, { useContext } from 'react';
import { Context } from './context';
export var Logged = function Logged(_ref) {
  var children = _ref.children;

  var _useContext = useContext(Context),
      isLogged = _useContext.isLogged;

  if (!isLogged) return null;
  return children;
};