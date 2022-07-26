import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import { Context } from './context';
import classNames from 'classnames';
export const Logo = _ref => {
  let {
    className = '',
    children,
    ...props
  } = _ref;
  const {
    id
  } = useContext(Context);
  return /*#__PURE__*/React.createElement("a", _extends({}, props, {
    id: id + "Logo",
    className: classNames('k-HeaderNav__Logo', className)
  }), children);
};