"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Header = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _context = require("./context");

var _arrowIcon = require("../../../../graphics/icons/arrow-icon");

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["id", "children", "index", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Header = function Header(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.Context),
      updateSelectedItem = _useContext.updateSelectedItem,
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      closeOnClick = _useContext.closeOnClick;

  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon__header', className),
    onClick: function onClick() {
      return updateSelectedItem(index);
    },
    role: "button",
    "aria-expanded": selectedItem.includes(index),
    "aria-disabled": closeOnClick ? null : selectedItem.includes(index),
    id: componentId + "-" + id + "_header",
    "aria-controls": componentId + "-" + id + "_content"
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Accordeon__header__content"
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    className: "k-Accordeon__header__arrow"
  }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
    direction: selectedItem.includes(index) ? 'top' : 'bottom',
    "aria-hidden": true
  })));
};

exports.Header = Header;