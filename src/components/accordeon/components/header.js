"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = void 0;

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index;

  var _useContext = (0, _react.useContext)(_context.Context),
      updateSelectedItem = _useContext.updateSelectedItem,
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      closeOnClick = _useContext.closeOnClick;

  return /*#__PURE__*/_react.default.createElement("button", {
    className: "k-Accordeon__header",
    onClick: function onClick() {
      return updateSelectedItem(index);
    },
    role: "button",
    "aria-expanded": selectedItem === index,
    "aria-disabled": closeOnClick ? null : selectedItem === index,
    id: "".concat(componentId, "-").concat(id, "_header"),
    "aria-controls": "".concat(componentId, "-").concat(id, "_content")
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Accordeon__header__content"
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Accordeon__header__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    version: "solid",
    direction: selectedItem === index ? 'top' : 'bottom',
    "aria-hidden": true
  })));
};

exports.Header = Header;