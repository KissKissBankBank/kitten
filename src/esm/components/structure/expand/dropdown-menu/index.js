import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["button", "open", "onToggle", "menuProps", "menuPosition", "positionedButton", "children", "className"],
    _excluded2 = ["href", "className", "icon", "children"],
    _excluded3 = ["type", "className", "icon", "children"],
    _excluded4 = ["className"];
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';
import { ArrowContainer } from '../../../information/boxes/arrow-container';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { useFocusTrap } from '../../../../helpers/dom/use-focus-trap';
var zoomInAndOpacity = keyframes(["0%{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(.66);opacity:0;}to{transform:translateX(calc(-1 * var(--Dropdown-transform))) scale(1);opacity:1;}"]);
var StyledDropdownMenu = styled.details.withConfig({
  displayName: "dropdown-menu__StyledDropdownMenu",
  componentId: "sc-goq24h-0"
})(["position:relative;display:inline-block;.k-DropdownMenu__button{list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}:focus-visible{outline-offset:", ";&,& .k-DropdownMenu__button__inside{outline:auto;}}}.k-DropdownMenu__button__inside{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;}&[open] > .k-DropdownMenu__button::before{content:' ';cursor:default;display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:transparent;z-index:120;}.k-DropdownMenu__menu{display:flex;flex-direction:column;gap:", ";z-index:150;position:absolute;top:calc(50% + 1rem + ", ");left:50%;width:max-content;max-width:", ";height:auto;padding:", " 0 ", ";transform:translateX(calc(-1 * var(--Dropdown-transform)));transform-origin:var(--Dropdown-transform-origin);}&[open] .k-DropdownMenu__menu{animation:var(--transition) ", ";}&.k-DropdownMenu--left .k-DropdownMenu__menu{--Dropdown-transform:calc(100% - ", ");--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}&.k-DropdownMenu--center .k-DropdownMenu__menu{--Dropdown-transform:50%;--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}&.k-DropdownMenu--right .k-DropdownMenu__menu{--Dropdown-transform:", ";--Dropdown-transform-origin:var(--Dropdown-transform) ", ";}.k-DropdownMenu__menu__item{", " color:var(--color-grey-000);text-decoration:none;display:flex;flex-direction:row;align-items:center;gap:", ";padding:", " ", ";line-height:", ";font-size:", ";text-align:left;transition:color 0.2s ease;& svg,& svg path{fill:currentColor;}&:hover{color:var(--color-primary-100);}&:active,&:focus{color:var(--color-primary-300);}&:focus-visible{outline:auto;}.k-DropdownMenu__menu__item__iconWrapper{height:", ";width:", ";flex:0 0 ", ";svg{max-width:", ";max-height:", ";}}}.k-DropdownMenu__menu__separator{height:", ";background:var(--color-grey-700);padding:0;margin:", " ", ";}"], pxToRem(-2), pxToRem(1), pxToRem(8), pxToRem(300), pxToRem(8), pxToRem(10), zoomInAndOpacity, pxToRem(10 + 8), pxToRem(-8), pxToRem(-8), pxToRem(10 + 8), pxToRem(-8), TYPOGRAPHY.fontStyles.regular, pxToRem(10), pxToRem(7), pxToRem(15), pxToRem(16), stepToRem(-1), pxToRem(16), pxToRem(16), pxToRem(16), pxToRem(16), pxToRem(16), pxToRem(1), pxToRem(7), pxToRem(15));
export var DropdownMenu = function DropdownMenu(_ref) {
  var button = _ref.button,
      open = _ref.open,
      onToggle = _ref.onToggle,
      menuProps = _ref.menuProps,
      menuPosition = _ref.menuPosition,
      positionedButton = _ref.positionedButton,
      children = _ref.children,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(open),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var detailsElement = useFocusTrap({
    shouldTrapFocus: isOpen
  });
  useEffect(function () {
    setIsOpen(open);
  }, [open]);

  var onLinkClicked = function onLinkClicked() {
    setIsOpen(false);
  };

  var handleToggle = function handleToggle(event) {
    onToggle(event);
    setIsOpen(event.target.open);
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
    var options = [].concat(detailsElement.current.querySelectorAll('a:not([hidden]):not([disabled]):not([aria-disabled="true"]), button:not([hidden]):not([disabled]):not([aria-disabled="true"])'));
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
        if (!isOpen) break;
        (_detailsElement$curre = detailsElement.current) == null ? void 0 : (_detailsElement$curre2 = _detailsElement$curre.querySelector('summary')) == null ? void 0 : _detailsElement$curre2.click();
        event.preventDefault();
        event.stopPropagation();
        break;

      case 'ArrowDown':
        if (isSummaryFocused && !isOpen) {
          var _document$activeEleme;

          (_document$activeEleme = document.activeElement) == null ? void 0 : _document$activeEleme.click();
        }

        (_getSibling = getSibling('next')) == null ? void 0 : _getSibling.focus();
        event.preventDefault();
        break;

      case 'ArrowUp':
        if (!isOpen) break;
        (_getSibling2 = getSibling('prev')) == null ? void 0 : _getSibling2.focus();
        event.preventDefault();
        break;

      case ' ':
      case 'Enter':
        {
          var activeElement = document.activeElement;
          if (!activeElement instanceof HTMLElement) return;
          if (!['A', 'BUTTON'].includes(activeElement.tagName)) return;
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
    className: classNames('k-DropdownMenu', className, "k-DropdownMenu--" + menuPosition),
    onKeyDown: handleKeyDown
  }, rest), /*#__PURE__*/React.createElement("summary", {
    className: "k-DropdownMenu__button"
  }, positionedButton ? /*#__PURE__*/React.createElement("span", {
    className: "k-DropdownMenu__button__inside"
  }, button({
    open: isOpen
  })) : button({
    open: isOpen
  })), /*#__PURE__*/React.createElement(ArrowContainer, _extends({
    color: "var(--color-grey-900)",
    size: 8,
    padding: 0,
    borderRadius: 8,
    position: "top"
  }, arrowDistanceProps, menuProps, {
    className: classNames('k-DropdownMenu__menu', menuProps.className),
    onClick: onLinkClicked
  }), children));
};
DropdownMenu.defaultProps = {
  button: function button() {},
  open: false,
  onToggle: function onToggle() {},
  menuProps: {},
  menuPosition: 'left',
  positionedButton: false
};

DropdownMenu.Link = function (_ref2) {
  var _ref2$href = _ref2.href,
      href = _ref2$href === void 0 ? '' : _ref2$href,
      className = _ref2.className,
      icon = _ref2.icon,
      children = _ref2.children,
      rest = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__link', className)
  }, rest), /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon
  }), /*#__PURE__*/React.createElement("span", null, children));
};

DropdownMenu.Button = function (_ref3) {
  var _ref3$type = _ref3.type,
      type = _ref3$type === void 0 ? 'button' : _ref3$type,
      className = _ref3.className,
      icon = _ref3.icon,
      children = _ref3.children,
      rest = _objectWithoutPropertiesLoose(_ref3, _excluded3);

  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__button', 'k-u-reset-button', className)
  }, rest), /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon
  }), /*#__PURE__*/React.createElement("span", null, children));
};

DropdownMenu.Separator = function (_ref4) {
  var className = _ref4.className,
      rest = _objectWithoutPropertiesLoose(_ref4, _excluded4);

  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__separator', className)
  }, rest));
};

var IconWrapper = function IconWrapper(_ref5) {
  var icon = _ref5.icon;
  if (!icon) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "k-DropdownMenu__menu__item__iconWrapper"
  }, icon);
};