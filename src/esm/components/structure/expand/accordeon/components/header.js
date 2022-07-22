import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import { Context } from './context';
import { ArrowIcon } from '../../../../graphics/icons/arrow-icon';
import classNames from 'classnames';
export const Header = _ref => {
  let {
    id,
    children,
    index,
    className,
    ...props
  } = _ref;
  const {
    updateSelectedItem,
    selectedItem,
    componentId,
    closeOnClick
  } = useContext(Context);
  return /*#__PURE__*/React.createElement("button", _extends({
    className: classNames('k-Accordeon__header', className),
    onClick: () => updateSelectedItem(index),
    role: "button",
    "aria-expanded": selectedItem.includes(index),
    "aria-disabled": closeOnClick ? null : selectedItem.includes(index),
    id: componentId + "-" + id + "_header",
    "aria-controls": componentId + "-" + id + "_content"
  }, props), /*#__PURE__*/React.createElement("span", {
    className: "k-Accordeon__header__content"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "k-Accordeon__header__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: selectedItem.includes(index) ? 'top' : 'bottom',
    "aria-hidden": true
  })));
};