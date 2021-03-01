import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ScreenConfig } from '../../../constants/screen-config';
import { Button } from './components/button';
import { Logo } from './components/logo';
import { BurgerMenu } from './components/burger-menu';
import { Nav } from './components/nav';
import { UserMenu } from './components/user-menu';
import { Context } from './components/context';
import { Right } from './components/right';
import { Centered } from './components/centered';
import { LoggedOut } from './components/logged-out';
import { Logged } from './components/logged';
import { Hidden } from './components/hidden';
import { QuickAccessLink } from './components/quick-access-link';
import { MOBILE_HEADER_HEIGHT, TABLET_HEADER_HEIGHT, DESKTOP_HEADER_HEIGHT } from './config';
import { StickyContainer } from '../../../components/grid/sticky-container';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { getFocusableElementsFrom, keyboardNavigation } from '../../../helpers/dom/a11y';
import domEvents, { DROPDOWN_FIRST_FOCUS_REACHED_EVENT, DROPDOWN_LAST_FOCUS_REACHED_EVENT, TOGGLE_DROPDOWN_EVENT } from '../../../helpers/dom/events';
import emitter from '../../../helpers/utils/emitter';
import { DROPDOWN_ANIMATED_DELAY } from '../../../constants/dropdown-config';
import { usePrevious } from '../../../helpers/utils/use-previous-hook';
var StyledStickyContainer = styled(StickyContainer).withConfig({
  displayName: "header-nav__StyledStickyContainer",
  componentId: "gabj0o-0"
})(["", " .k-Spacer + &{box-shadow:0 ", " ", " rgba(0,0,0,0.1);}"], function (_ref) {
  var isMenuExpanded = _ref.isMenuExpanded;
  return isMenuExpanded && css(["transition:none;"]);
}, pxToRem(2), pxToRem(4));
var Header = styled.header.withConfig({
  displayName: "header-nav__Header",
  componentId: "gabj0o-1"
})(["position:relative;z-index:", ";"], function (_ref2) {
  var isMenuExpanded = _ref2.isMenuExpanded,
      zIndex = _ref2.zIndex;
  return isMenuExpanded ? zIndex.headerWithOpenMenu : zIndex.header;
});
var Navigation = styled.nav.withConfig({
  displayName: "header-nav__Navigation",
  componentId: "gabj0o-2"
})(["width:100%;overflow:hidden;box-sizing:border-box;&,.quickAccessLink{height:", ";background:", ";@media (min-width:", "px){height:", ";}@media (min-width:", "px){height:", ";}}"], pxToRem(MOBILE_HEADER_HEIGHT), function (_ref3) {
  var updateBackground = _ref3.updateBackground;
  return updateBackground ? COLORS.background3 : COLORS.background1;
}, ScreenConfig.S.min, pxToRem(TABLET_HEADER_HEIGHT), ScreenConfig.L.min, pxToRem(DESKTOP_HEADER_HEIGHT));

var HeaderNav = function HeaderNav(_ref4) {
  var children = _ref4.children,
      id = _ref4.id,
      isFixed = _ref4.isFixed,
      isLogged = _ref4.isLogged,
      quickAccessProps = _ref4.quickAccessProps,
      stickyProps = _ref4.stickyProps,
      zIndexConfig = _ref4.zIndexConfig;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isMenuExpanded = _useState2[0],
      setMenuExpanded = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      menuExpandBy = _useState4[0],
      setMenuExpandBy = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      stickyState = _useState6[0],
      setStickyState = _useState6[1];

  var stickyContainerRef = useRef(null);
  var headerRef = useRef(null);
  var previousStickyState = usePrevious(stickyState);

  var focusDropdown = function focusDropdown(_ref5) {
    var dropdown = _ref5.detail;
    emitter.emit(TOGGLE_DROPDOWN_EVENT, false);
    dropdown.focus();
  };

  var focusElementNextToDropdown = function focusElementNextToDropdown(_ref6) {
    var dropdown = _ref6.detail;
    emitter.emit(TOGGLE_DROPDOWN_EVENT, false);
    if (!headerRef.current) return;
    setTimeout(function () {
      var focusableElements = getFocusableElementsFrom(headerRef.current);
      if (focusableElements.length < 1) return;
      var currentElementIndex = focusableElements.indexOf(dropdown);
      var nextElement = focusableElements[currentElementIndex + 1] || dropdown;
      nextElement.focus();
    }, DROPDOWN_ANIMATED_DELAY);
  };

  useEffect(function () {
    if (!headerRef.current) return;
    headerRef.current.addEventListener('keydown', handleKeyboardNavigation);
    window.addEventListener(DROPDOWN_FIRST_FOCUS_REACHED_EVENT, focusDropdown);
    window.addEventListener(DROPDOWN_LAST_FOCUS_REACHED_EVENT, focusElementNextToDropdown);
    return function () {
      if (!headerRef.current) return;
      headerRef.current.removeEventListener('keydown', handleKeyboardNavigation);
      window.removeEventListener(DROPDOWN_FIRST_FOCUS_REACHED_EVENT, focusDropdown);
      window.removeEventListener(DROPDOWN_LAST_FOCUS_REACHED_EVENT, focusElementNextToDropdown);
    };
  }, [isMenuExpanded]);
  var keyboard = domEvents.keyboard;

  var isArrowKeyCode = function isArrowKeyCode(keycode) {
    return [keyboard.left, keyboard.up, keyboard.right, keyboard.down].includes(keycode);
  };

  var handleKeyboardNavigation = function handleKeyboardNavigation(event) {
    if (isArrowKeyCode(event.keyCode)) {
      event.preventDefault();
      var focusableElements = getFocusableElementsFrom(headerRef.current);
      var kbdNav = keyboardNavigation(focusableElements);

      if ([keyboard.right, keyboard.tab].includes(event.keyCode)) {
        return kbdNav.next();
      }

      if (event.keyCode === keyboard.left || keyboard.shiftTab(event)) {
        return kbdNav.prev();
      }
    }
  };

  var updateHeaderBackground = function updateHeaderBackground() {
    return /UserMenu/.test(menuExpandBy);
  };

  var callOnToggle = function callOnToggle(_ref7) {
    var isExpanded = _ref7.isExpanded,
        expandBy = _ref7.expandBy;

    if (!isExpanded && previousStickyState === 'always') {
      stickyContainerRef.current.setSticky();
    }

    setMenuExpanded(isExpanded);
    setMenuExpandBy(expandBy);
  };

  useEffect(function () {
    setStickyState(isFixed || isMenuExpanded ? 'always' : 'topOnScrollUp');
  }, [isFixed, isMenuExpanded]);
  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isLogged: isLogged,
      id: id,
      expandBy: menuExpandBy,
      callOnToggle: callOnToggle
    }
  }, /*#__PURE__*/React.createElement(Header, {
    zIndex: zIndexConfig,
    isMenuExpanded: isMenuExpanded
  }, /*#__PURE__*/React.createElement(StyledStickyContainer, _extends({
    ref: stickyContainerRef,
    isSticky: stickyState,
    isMenuExpanded: isMenuExpanded
  }, stickyProps, {
    className: classNames('k-HeaderNav__stickyContainer', stickyProps.className)
  }), /*#__PURE__*/React.createElement(Navigation, {
    ref: headerRef,
    role: "banner",
    id: id,
    className: "k-HeaderNav",
    updateBackground: updateHeaderBackground()
  }, /*#__PURE__*/React.createElement(QuickAccessLink, _extends({
    className: "quickAccessLink"
  }, quickAccessProps)), children))));
};

HeaderNav.Button = Button;
HeaderNav.Logo = Logo;
HeaderNav.BurgerMenu = BurgerMenu;
HeaderNav.Nav = Nav;
HeaderNav.UserMenu = UserMenu;
HeaderNav.Right = Right;
HeaderNav.Centered = Centered;
HeaderNav.LoggedOut = LoggedOut;
HeaderNav.Logged = Logged;
HeaderNav.Hidden = Hidden;
HeaderNav.propTypes = {
  id: PropTypes.string,
  isFixed: PropTypes.bool,
  isLogged: PropTypes.bool,
  quickAccessProps: PropTypes.shape({
    href: PropTypes.string,
    text: PropTypes.string,
    zIndex: PropTypes.number
  }),
  stickyProps: PropTypes.shape({
    top: PropTypes.number
  }),
  zIndexConfig: PropTypes.shape({
    header: PropTypes.number,
    headerWithOpenMenu: PropTypes.number
  })
};
HeaderNav.defaultProps = {
  id: 'kkbbAndCoHeaderNav',
  isFixed: false,
  isLogged: false,
  quickAccessProps: {},
  stickyProps: {},
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3
  }
};
export default HeaderNav;