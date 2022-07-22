import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { ArrowContainer } from '../../../information/boxes/arrow-container';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import { useFocusTrap } from '../../../../helpers/hooks/use-focus-trap';
const zoomInAndOpacity = keyframes(["0%{transform:translateX(calc(-1 * var(--Dropdown-transform-x))) scale(.66);opacity:0;}to{transform:translateX(calc(-1 * var(--Dropdown-transform-x))) scale(1);opacity:1;}"]);
const StyledDropdownMenu = styled.details.withConfig({
  displayName: "dropdown-menu__StyledDropdownMenu",
  componentId: "sc-goq24h-0"
})(["position:relative;display:inline-block;.k-DropdownMenu__button{list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}:focus-visible{outline-offset:", ";&,& .k-DropdownMenu__button__inside{outline:auto;}}}.k-DropdownMenu__button__inside{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;}&[open] > .k-DropdownMenu__button::before{content:' ';cursor:default;display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:transparent;z-index:120;}.k-DropdownMenu__menu{display:flex;flex-direction:column;gap:", ";z-index:150;position:absolute;top:calc(50% + 1rem + ", " + (var(--dropdownMenu-top)));left:50%;width:max-content;max-width:", ";height:auto;padding:", " 0 ", ";transform:translateX(calc(-1 * var(--Dropdown-transform-x)));transform-origin:var(--Dropdown-transform-origin);}&[open] .k-DropdownMenu__menu{animation:var(--transition) ", ";}&.k-DropdownMenu--h-left .k-DropdownMenu__menu{--Dropdown-transform-x:calc(100% - ", ");--Dropdown-transform-origin:var(--Dropdown-transform-x) ", ";}&.k-DropdownMenu--h-center .k-DropdownMenu__menu{--Dropdown-transform-x:50%;--Dropdown-transform-origin:var(--Dropdown-transform-x) ", ";}&.k-DropdownMenu--h-right .k-DropdownMenu__menu{--Dropdown-transform-x:", ";--Dropdown-transform-origin:var(--Dropdown-transform-x) ", ";}.k-DropdownMenu__menu__item{", " color:var(--color-grey-000);text-decoration:none;display:flex;flex-direction:row;align-items:center;gap:", ";padding:", " ", ";line-height:", ";font-size:", ";text-align:left;transition:color 0.2s ease;& svg,& svg path{fill:currentColor;}&:hover{color:var(--color-primary-100);}&:active,&:focus{color:var(--color-primary-300);}&:focus-visible{outline:auto;}.k-DropdownMenu__menu__item__iconWrapper{height:", ";width:", ";flex:0 0 ", ";svg{max-width:", ";max-height:", ";}}}.k-DropdownMenu__menu__separator{height:", ";background:var(--color-grey-700);padding:0;margin:", " ", ";}"], pxToRem(-2), pxToRem(1), pxToRem(8), pxToRem(300), pxToRem(8), pxToRem(10), zoomInAndOpacity, pxToRem(10 + 8), pxToRem(-8), pxToRem(-8), pxToRem(10 + 8), pxToRem(-8), TYPOGRAPHY.fontStyles['500'], pxToRem(10), pxToRem(7), pxToRem(15), pxToRem(16), stepToRem(-1), pxToRem(16), pxToRem(16), pxToRem(16), pxToRem(16), pxToRem(16), pxToRem(1), pxToRem(7), pxToRem(15));
export const DropdownMenu = _ref => {
  let {
    button,
    open,
    onOpen,
    onClose,
    onToggle,
    menuProps,
    menuPosition,
    positionedButton,
    children,
    className,
    top,
    style,
    ...rest
  } = _ref;
  const [isOpen, setIsOpen] = useState(open);
  const detailsElement = useFocusTrap({
    shouldTrapFocus: isOpen
  });
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const onLinkClicked = () => {
    setIsOpen(false);
  };

  const handleToggle = event => {
    onToggle(event);
    const hasBeenOpened = event.target.open;

    if (hasBeenOpened) {
      event.target.firstChild.focus();
      onOpen();
    } else {
      onClose();
    }

    setIsOpen(hasBeenOpened);
  };

  const arrowDistanceProps = (() => {
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
  })();

  const getSibling = direction => {
    const options = [...detailsElement.current.querySelectorAll('a:not([hidden]):not([disabled]):not([aria-disabled="true"]), button:not([hidden]):not([disabled]):not([aria-disabled="true"])')];
    const index = document.activeElement instanceof HTMLElement ? options.indexOf(document.activeElement) : -1;
    const sibling = direction === 'next' ? options[index + 1] : options[index - 1];
    const opposite = direction === 'next' ? options[0] : options[options.length - 1];
    return sibling || opposite;
  };

  const handleKeyDown = event => {
    var _detailsElement$curre, _detailsElement$curre2, _getSibling, _getSibling2;

    const isSummaryFocused = event.target instanceof Element && event.target.tagName === 'SUMMARY';

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
          const activeElement = document.activeElement;
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
    className: classNames('k-DropdownMenu', className, "k-DropdownMenu--h-" + menuPosition),
    onKeyDown: handleKeyDown,
    style: { ...style,
      '--dropdownMenu-top': top
    }
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
  button: () => {},
  open: false,
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {},
  menuProps: {},
  menuPosition: 'left',
  positionedButton: false,
  top: '0px'
};
DropdownMenu.propTypes = {
  button: PropTypes.func,
  open: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onToggle: PropTypes.func,
  menuProps: PropTypes.object,
  menuPosition: PropTypes.oneOf(['left', 'center', 'right']),
  positionedButton: PropTypes.bool,
  top: PropTypes.string
};

DropdownMenu.Link = _ref2 => {
  let {
    href = '',
    textProps = {},
    className,
    icon,
    children,
    ...rest
  } = _ref2;
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__link', className)
  }, rest), /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon
  }), /*#__PURE__*/React.createElement("span", textProps, children));
};

DropdownMenu.Button = _ref3 => {
  let {
    type = 'button',
    textProps = {},
    className,
    icon,
    children,
    ...rest
  } = _ref3;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__button', 'k-u-reset-button', className)
  }, rest), /*#__PURE__*/React.createElement(IconWrapper, {
    icon: icon
  }), /*#__PURE__*/React.createElement("span", textProps, children));
};

DropdownMenu.Separator = _ref4 => {
  let {
    className,
    ...rest
  } = _ref4;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-DropdownMenu__menu__item', 'k-DropdownMenu__menu__separator', className)
  }, rest));
};

const IconWrapper = _ref5 => {
  let {
    icon
  } = _ref5;
  if (!icon) return null;
  return /*#__PURE__*/React.createElement("span", {
    className: "k-DropdownMenu__menu__item__iconWrapper"
  }, icon);
};