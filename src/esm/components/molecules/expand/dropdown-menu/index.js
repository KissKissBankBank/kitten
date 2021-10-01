import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef, useState } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';
import { ArrowContainer } from '../../../../components/molecules/boxes/arrow-container';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
var zoomInAndOpacity = keyframes(["0%{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);opacity:0;}to{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(1);opacity:1;}"]);
var StyledDropdownMenu = styled.details.withConfig({
  displayName: "dropdown-menu__StyledDropdownMenu",
  componentId: "oseofw-0"
})(["position:relative;display:inline-block;.k-DropdownMenu__button{list-style:none;touch-callout:none;user-select:none;cursor:pointer;width:100%;height:100%;display:flex;align-items:center;justify-content:center;::-webkit-details-marker,::before{display:none;}}&[open] > .k-DropdownMenu__button::before{content:' ';cursor:default;display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:transparent;z-index:120;}.k-DropdownMenu__menu{display:flex;flex-direction:column;z-index:150;position:absolute;top:calc(50% + 1rem + ", ");left:50%;width:max-content;max-width:", ";height:auto;padding:", " 0 ", ";transform:translateX(calc(-1 * var(--Dropdown-transform)));transform-origin:var(--Dropdown-transform-origin);}&[open] .k-DropdownMenu__menu{animation:0.16s ease ", ";}&.k-DropdownMenu--left .k-DropdownMenu__menu{--Dropdown-transform:calc(100% - ", ");--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}&.k-DropdownMenu--center .k-DropdownMenu__menu{--Dropdown-transform:50%;--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}&.k-DropdownMenu--right .k-DropdownMenu__menu{--Dropdown-transform:", ";--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}.k-DropdownMenu__menu__item{", " color:", ";text-decoration:none;display:block;padding:", " ", ";line-height:1;font-size:", ";text-align:left;transition:color 0.2s ease;&:hover{color:", ";}&:active{color:", ";}&:focus{color:", ";outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}.k-DropdownMenu__menu__separator{height:", ";background:", ";padding:0;margin:", " 0;}"], pxToRem(8), pxToRem(300), pxToRem(8), pxToRem(10), zoomInAndOpacity, pxToRem(10 + 8), pxToRem(-8), pxToRem(-8), pxToRem(10 + 8), pxToRem(-8), TYPOGRAPHY.fontStyles.regular, COLORS.background1, pxToRem(7), pxToRem(15), stepToRem(-1), COLORS.primary1, COLORS.primary4, COLORS.primary4, COLORS.primary4, pxToRem(2), pxToRem(-2), COLORS.primary4, pxToRem(2), COLORS.grey1, pxToRem(5));
export var DropdownMenu = function DropdownMenu(_ref) {
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
      rest = _objectWithoutProperties(_ref, ["button", "open", "onToggle", "menuProps", "menuPosition", "children", "className"]);

  var detailsElement = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
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
    var options = _toConsumableArray(detailsElement.current.querySelectorAll('[role^="menuitem"]:not([hidden]):not([disabled]):not([aria-disabled="true"])'));

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

  return /*#__PURE__*/React.createElement(StyledDropdownMenu, _extends({
    ref: detailsElement,
    onToggle: handleToggle,
    open: isOpen,
    className: classNames('k-DropdownMenu', className, "k-DropdownMenu--".concat(menuPosition)),
    role: "menu",
    onKeyDown: handleKeyDown
  }, rest), /*#__PURE__*/React.createElement("summary", {
    className: "k-DropdownMenu__button"
  }, button({
    open: open
  })), /*#__PURE__*/React.createElement(ArrowContainer, _extends({
    color: COLORS.font1,
    size: 8,
    padding: 0,
    borderRadius: 4,
    position: "top"
  }, arrowDistanceProps, menuProps, {
    className: classNames('k-DropdownMenu__menu', menuProps.className),
    onClick: onLinkClicked
  }), children));
};

DropdownMenu.Link = function (_ref2) {
  var _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? '' : _ref2$href,
      className = _ref2.className,
      rest = _objectWithoutProperties(_ref2, ["href", "className"]);

  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    role: "menuitem",
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__link', className)
  }, rest));
};

DropdownMenu.Button = function (_ref3) {
  var _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'button' : _ref3$type,
      className = _ref3.className,
      rest = _objectWithoutProperties(_ref3, ["type", "className"]);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    role: "menuitem",
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__button', 'k-u-reset-button', className)
  }, rest));
};

DropdownMenu.Separator = function (_ref4) {
  var className = _ref4.className,
      rest = _objectWithoutProperties(_ref4, ["className"]);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__separator', className)
  }, rest));
};