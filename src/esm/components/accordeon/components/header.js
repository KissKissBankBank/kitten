import React, { useContext } from 'react';
import { Context } from './context';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
export var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index;

  var _useContext = useContext(Context),
      updateSelectedItem = _useContext.updateSelectedItem,
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      closeOnClick = _useContext.closeOnClick;

  return /*#__PURE__*/React.createElement("button", {
    className: "k-Accordeon__header",
    onClick: function onClick() {
      return updateSelectedItem(index);
    },
    role: "button",
    "aria-expanded": selectedItem === index,
    "aria-disabled": closeOnClick ? null : selectedItem === index,
    id: "".concat(componentId, "-").concat(id, "_header"),
    "aria-controls": "".concat(componentId, "-").concat(id, "_content")
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-Accordeon__header__content"
  }, children), /*#__PURE__*/React.createElement("span", {
    className: "k-Accordeon__header__arrow"
  }, /*#__PURE__*/React.createElement(ArrowIcon, {
    direction: selectedItem === index ? 'top' : 'bottom',
    "aria-hidden": true
  })));
};