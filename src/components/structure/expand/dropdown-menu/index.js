"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.DropdownMenu = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _arrowContainer = require("../../../information/boxes/arrow-container");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _typography = require("../../../../helpers/utils/typography");

var _excluded = ["button", "open", "onToggle", "menuProps", "menuPosition", "children", "className"],
    _excluded2 = ["href", "className"],
    _excluded3 = ["type", "className"],
    _excluded4 = ["className"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var zoomInAndOpacity = (0, _styledComponents.keyframes)(["0%{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);opacity:0;}to{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(1);opacity:1;}"]);

var StyledDropdownMenu = _styledComponents.default.details.withConfig({
  displayName: "dropdown-menu__StyledDropdownMenu",
  componentId: "sc-goq24h-0"
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  var detailsElement = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      hasClicked = _useState2[0],
      setHasClicked = _useState2[1];

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
    var options = [].concat(detailsElement.current.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])'));
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
        (_detailsElement$curre = detailsElement.current) == null ? void 0 : (_detailsElement$curre2 = _detailsElement$curre.querySelector('summary')) == null ? void 0 : _detailsElement$curre2.click();
        event.preventDefault();
        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (isSummaryFocused && !open) {
          var _document$activeEleme;

          (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.click();
        }

        (_getSibling = getSibling('next')) == null ? void 0 : _getSibling.focus();
        event.preventDefault();
        break;

      case 'ArrowUp':
        if (isSummaryFocused && !open) {
          var _document$activeEleme2;

          (_document$activeEleme2 = document.activeElement) == null ? void 0 : _document$activeEleme2.click();
        }

        (_getSibling2 = getSibling('prev')) == null ? void 0 : _getSibling2.focus();
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
    className: (0, _classnames.default)('k-DropdownMenu', className, "k-DropdownMenu--" + menuPosition),
    role: "menu",
    onKeyDown: handleKeyDown
  }, rest), /*#__PURE__*/_react.default.createElement("summary", {
    className: "k-DropdownMenu__button"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "k-DropdownMenu__button__inside"
  }, button({
    open: isOpen
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref2, _excluded2);
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref3, _excluded3);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    type: type,
    role: "menuitem",
    className: (0, _classnames.default)('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__button', 'k-u-reset-button', className)
  }, rest));
};

DropdownMenu.Separator = function (_ref4) {
  var className = _ref4.className,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref4, _excluded4);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__separator', className)
  }, rest));
};