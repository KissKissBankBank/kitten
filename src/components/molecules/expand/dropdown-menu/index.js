"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowContainer = require("../../../../components/molecules/boxes/arrow-container");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var zoomInAndOpacity = (0, _styledComponents.keyframes)(["0%{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);opacity:0;}to{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(1);opacity:1;}"]);

var StyledDropdownMenu = _styledComponents.default.details.withConfig({
  displayName: "dropdown-menu__StyledDropdownMenu",
  componentId: "oseofw-0"
})(["position:relative;display:inline-block;.k-DropdownMenu__button{list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}:focus-visible{outline-offset:", ";&,& .k-DropdownMenu__button__inside{outline:auto;}}}.k-DropdownMenu__button__inside{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;}&[open] > .k-DropdownMenu__button::before{content:' ';cursor:default;display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:transparent;z-index:120;}.k-DropdownMenu__menu{display:flex;flex-direction:column;z-index:150;position:absolute;top:calc(50% + 1rem + ", ");left:50%;width:max-content;max-width:", ";height:auto;padding:", " 0 ", ";transform:translateX(calc(-1 * var(--Dropdown-transform)));transform-origin:var(--Dropdown-transform-origin);}&[open] .k-DropdownMenu__menu{animation:0.16s ease ", ";}&.k-DropdownMenu--left .k-DropdownMenu__menu{--Dropdown-transform:calc(100% - ", ");--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}&.k-DropdownMenu--center .k-DropdownMenu__menu{--Dropdown-transform:50%;--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}&.k-DropdownMenu--right .k-DropdownMenu__menu{--Dropdown-transform:", ";--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}.k-DropdownMenu__menu__item{", " color:", ";text-decoration:none;display:block;padding:", " ", ";line-height:1;font-size:", ";text-align:left;transition:color 0.2s ease;&:hover{color:", ";}&:active{color:", ";}&:focus{color:", ";}&:focus-visible{outline:auto;}}.k-DropdownMenu__menu__separator{height:", ";background:", ";padding:0;margin:", " 0;}"], (0, _typography.pxToRem)(-2), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(300), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(10), zoomInAndOpacity, (0, _typography.pxToRem)(10 + 8), (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(-8), (0, _typography.pxToRem)(10 + 8), (0, _typography.pxToRem)(-8), _typographyConfig.default.fontStyles.regular, _colorsConfig.default.background1, (0, _typography.pxToRem)(7), (0, _typography.pxToRem)(15), (0, _typography.stepToRem)(-1), _colorsConfig.default.primary1, _colorsConfig.default.primary4, _colorsConfig.default.primary4, (0, _typography.pxToRem)(2), _colorsConfig.default.grey1, (0, _typography.pxToRem)(5));

var DropdownMenu = function DropdownMenu(_ref) {
  var _ref$button = _ref.button,
      button = _ref$button === void 0 ? function () {} : _ref$button,
      openProp = _ref.open,
      onToggle = _ref.onToggle,
      _ref$menuProps = _ref.menuProps,
      menuProps = _ref$menuProps === void 0 ? {} : _ref$menuProps,
      _ref$menuPosition = _ref.menuPosition,
      menuPosition = _ref$menuPosition === void 0 ? 'left' : _ref$menuPosition,
      children = _ref.children,
      className = _ref.className,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["button", "open", "onToggle", "menuProps", "menuPosition", "children", "className"]);
  var detailsElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      hasClicked = _useState4[0],
      setHasClicked = _useState4[1];

  var onLinkClicked = function onLinkClicked() {
    setIsOpen(false);
    setHasClicked(true);
  };

  var handleToggle = function handleToggle() {
    if (!hasClicked) {
      return setIsOpen(!isOpen);
    }

    return setHasClicked(false);
  };

  var arrowDistanceProps = function () {
    switch (menuPosition) {
      case 'left':
        return {
          distance: 10,
          distanceIsReverse: true
        };

      case 'center':
        return {
          centered: true
        };

      case 'right':
      default:
        return {
          distance: 10
        };
    }
  }();

  var getSibling = function getSibling(direction) {
    var options = (0, _toConsumableArray2.default)(detailsElement.current.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])'));
    var index = document.activeElement instanceof HTMLElement ? options.indexOf(document.activeElement) : -1;
    var sibling = direction === 'next' ? options[index + 1] : options[index - 1];
    var opposite = direction === 'next' ? options[0] : options[options.length - 1];
    return sibling || opposite;
  };

  var handleKeyDown = function handleKeyDown(event) {
    var _detailsElement$curre, _detailsElement$curre2, _getSibling, _getSibling2;

    var isSummaryFocused = event.target instanceof Element && event.target.tagName === 'SUMMARY';

    switch (event.key) {
      case 'Escape':
        if (!open) return;
        (_detailsElement$curre = detailsElement.current) === null || _detailsElement$curre === void 0 ? void 0 : (_detailsElement$curre2 = _detailsElement$curre.querySelector('summary')) === null || _detailsElement$curre2 === void 0 ? void 0 : _detailsElement$curre2.click();
        event.preventDefault();
        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (isSummaryFocused && !open) {
          var _document$activeEleme;

          (_document$activeEleme = document.activeElement) === null || _document$activeEleme === void 0 ? void 0 : _document$activeEleme.click();
        }

        (_getSibling = getSibling('next')) === null || _getSibling === void 0 ? void 0 : _getSibling.focus();
        event.preventDefault();
        break;

      case 'ArrowUp':
        if (isSummaryFocused && !open) {
          var _document$activeEleme2;

          (_document$activeEleme2 = document.activeElement) === null || _document$activeEleme2 === void 0 ? void 0 : _document$activeEleme2.click();
        }

        (_getSibling2 = getSibling('prev')) === null || _getSibling2 === void 0 ? void 0 : _getSibling2.focus();
        event.preventDefault();
        break;

      case ' ':
      case 'Enter':
        {
          var activeElement = document.activeElement;
          if (!activeElement instanceof HTMLElement) return;
          if (activeElement.role !== 'menuitem') return;
          if (activeElement.closest('details') !== detailsElement.current) return;
          event.preventDefault();
          event.stopPropagation();
          activeElement.click();
        }
    }
  };

  return /*#__PURE__*/_react.default.createElement(StyledDropdownMenu, (0, _extends2.default)({
    ref: detailsElement,
    onToggle: handleToggle,
    open: isOpen,
    className: (0, _classnames.default)('k-DropdownMenu', className, "k-DropdownMenu--".concat(menuPosition)),
    role: "menu",
    onKeyDown: handleKeyDown
  }, rest), /*#__PURE__*/_react.default.createElement("summary", {
    className: "k-DropdownMenu__button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DropdownMenu__button__inside"
  }, button({
    open: open
  }))), /*#__PURE__*/_react.default.createElement(_arrowContainer.ArrowContainer, (0, _extends2.default)({
    color: _colorsConfig.default.font1,
    size: 8,
    padding: 0,
    borderRadius: 4,
    position: "top"
  }, arrowDistanceProps, menuProps, {
    className: (0, _classnames.default)('k-DropdownMenu__menu', menuProps.className),
    onClick: onLinkClicked
  }), children));
};

exports.DropdownMenu = DropdownMenu;

DropdownMenu.Link = function (_ref2) {
  var _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? '' : _ref2$href,
      className = _ref2.className,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["href", "className"]);
  return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
    href: href,
    role: "menuitem",
    className: (0, _classnames.default)('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__link', className)
  }, rest));
};

DropdownMenu.Button = function (_ref3) {
  var _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'button' : _ref3$type,
      className = _ref3.className,
      rest = (0, _objectWithoutProperties2.default)(_ref3, ["type", "className"]);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    type: type,
    role: "menuitem",
    className: (0, _classnames.default)('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__button', 'k-u-reset-button', className)
  }, rest));
};

DropdownMenu.Separator = function (_ref4) {
  var className = _ref4.className,
      rest = (0, _objectWithoutProperties2.default)(_ref4, ["className"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__separator', className)
  }, rest));
};