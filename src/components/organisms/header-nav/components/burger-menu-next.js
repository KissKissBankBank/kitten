"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BurgerMenuNext = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _burgerIcon = require("../../../../components/graphics/icons/burger-icon");

var _visuallyHidden = require("../../../../components/accessibility/visually-hidden");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _context = require("./context");

var _classnames = _interopRequireDefault(require("classnames"));

var _useDropdown2 = require("../hooks/use-dropdown");

var _dropdownButton = require("./dropdown-button");

var _excluded = ["children", "dropdownContentWidth", "className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var namespace = 'kkbbAndCo';
var CLOSE_EVENT = "".concat(namespace, ":platformMenu:close");

var BurgerMenuNext = function BurgerMenuNext(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, _excluded);

  var _useContext = (0, _react.useContext)(_context.Context),
      id = _useContext.id,
      callOnToggle = _useContext.callOnToggle;

  var _useDropdown = (0, _useDropdown2.useDropdown)({
    dropdownContentWidth: dropdownContentWidth,
    callOnToggle: callOnToggle,
    dropdownAnchorSide: 'left',
    closeEvents: [CLOSE_EVENT],
    buttonId: "".concat(id, "PlateformMenu"),
    menuId: "".concat(id, "PlateformMenu__content")
  }),
      dropdownProps = _useDropdown.dropdownProps,
      buttonProps = _useDropdown.buttonProps,
      menuProps = _useDropdown.menuProps,
      isDropdownExpanded = _useDropdown.isDropdownExpanded;

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, dropdownProps, props, {
    className: (0, _classnames.default)(className, dropdownProps.className)
  }), /*#__PURE__*/_react.default.createElement(_dropdownButton.DropdownButton, (0, _extends2.default)({}, buttonProps, {
    className: (0, _classnames.default)(buttonProps.className, 'k-HeaderNav__BurgerMenu__button', 'k-ButtonIcon', 'k-ButtonIcon--tiny')
  }), isDropdownExpanded ? /*#__PURE__*/_react.default.createElement(_burgerIcon.BurgerIcon, {
    isActive: true,
    hoverColor: _colorsConfig.default.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  }) : /*#__PURE__*/_react.default.createElement(_burgerIcon.BurgerIcon, {
    isAnimatedOnHover: true,
    hoverColor: _colorsConfig.default.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react.default.createElement(_visuallyHidden.VisuallyHidden, null, "Menu")), /*#__PURE__*/_react.default.createElement("div", menuProps, children));
};

exports.BurgerMenuNext = BurgerMenuNext;