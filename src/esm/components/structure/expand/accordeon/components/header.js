import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["id", "children", "index", "className"];
import React, { useContext } from 'react';
import { Context } from './context';
import { ArrowIcon } from '../../../../graphics/icons/arrow-icon';
import classNames from 'classnames';
export var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useContext = useContext(Context),
      updateSelectedItem = _useContext.updateSelectedItem,
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      closeOnClick = _useContext.closeOnClick;

  return /*#__PURE__*/React.createElement("button", _extends({
    className: classNames('k-Accordeon__header', className),
    onClick: function onClick() {
      return updateSelectedItem(index);
    },
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