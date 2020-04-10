"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _screenConfig = require("../../../constants/screen-config");

var _button = require("./components/button");

var _logo = require("./components/logo");

var _burgerMenu = require("./components/burger-menu");

var _nav = require("./components/nav");

var _userMenu = require("./components/user-menu");

var _context = require("./components/context");

var _right = require("./components/right");

var _centered = require("./components/centered");

var _loggedOut = require("./components/logged-out");

var _logged = require("./components/logged");

var _hidden = require("./components/hidden");

var _quickAccessLink = require("./components/quick-access-link");

var _config = require("./config");

var _stickyContainer = require("../../../components/grid/sticky-container");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var _a11y = require("../../../helpers/dom/a11y");

var _events = _interopRequireWildcard(require("../../../helpers/dom/events"));

var _emitter = _interopRequireDefault(require("../../../helpers/utils/emitter"));

var _dropdownConfig = require("../../../constants/dropdown-config");

var StyledStickyContainer = (0, _styledComponents.default)(_stickyContainer.StickyContainer).withConfig({
  displayName: "header-nav__StyledStickyContainer",
  componentId: "gabj0o-0"
})(["", " .k-Spacer + &{box-shadow:0 ", " ", " rgba(0,0,0,0.1);}"], function (_ref) {
  var isMenuExpanded = _ref.isMenuExpanded;
  return isMenuExpanded && (0, _styledComponents.css)(["transition:none;"]);
}, (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(4));

var Header = _styledComponents.default.header.withConfig({
  displayName: "header-nav__Header",
  componentId: "gabj0o-1"
})(["position:relative;z-index:", ";"], function (_ref2) {
  var isMenuExpanded = _ref2.isMenuExpanded,
      zIndex = _ref2.zIndex;
  return isMenuExpanded ? zIndex.headerWithOpenMenu : zIndex.header;
});

var Navigation = _styledComponents.default.nav.withConfig({
  displayName: "header-nav__Navigation",
  componentId: "gabj0o-2"
})(["width:100vw;overflow:hidden;box-sizing:border-box;&,.quickAccessLink{height:", ";background:", ";@media (min-width:", "px){height:", ";}@media (min-width:", "px){height:", ";}}"], (0, _typography.pxToRem)(_config.MOBILE_HEADER_HEIGHT), function (_ref3) {
  var updateBackground = _ref3.updateBackground;
  return updateBackground ? _colorsConfig.default.background3 : _colorsConfig.default.background1;
}, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(_config.TABLET_HEADER_HEIGHT), _screenConfig.ScreenConfig.L.min, (0, _typography.pxToRem)(_config.DESKTOP_HEADER_HEIGHT));

var HeaderNav = function HeaderNav(_ref4) {
  var children = _ref4.children,
      id = _ref4.id,
      isFixed = _ref4.isFixed,
      isLogged = _ref4.isLogged,
      quickAccessProps = _ref4.quickAccessProps,
      zIndexConfig = _ref4.zIndexConfig;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isMenuExpanded = _useState2[0],
      setMenuExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      menuExpandBy = _useState4[0],
      setMenuExpandBy = _useState4[1];

  var stickyContainerRef = (0, _react.useRef)(null);
  var headerRef = (0, _react.useRef)(null);

  var focusDropdown = function focusDropdown(_ref5) {
    var dropdown = _ref5.detail;

    _emitter.default.emit(_events.TOGGLE_DROPDOWN_EVENT, false);

    dropdown.focus();
  };

  var focusElementNextToDropdown = function focusElementNextToDropdown(_ref6) {
    var dropdown = _ref6.detail;

    _emitter.default.emit(_events.TOGGLE_DROPDOWN_EVENT, false);

    if (!headerRef.current) return;
    setTimeout(function () {
      var focusableElements = (0, _a11y.getFocusableElementsFrom)(headerRef.current);
      if (focusableElements.length < 1) return;
      var currentElementIndex = focusableElements.indexOf(dropdown);
      var nextElement = focusableElements[currentElementIndex + 1] || dropdown;
      nextElement.focus();
    }, _dropdownConfig.DROPDOWN_ANIMATED_DELAY);
  };

  (0, _react.useEffect)(function () {
    if (!headerRef.current) return;
    headerRef.current.addEventListener('keydown', handleKeyboardNavigation);
    window.addEventListener(_events.DROPDOWN_FIRST_FOCUS_REACHED_EVENT, focusDropdown);
    window.addEventListener(_events.DROPDOWN_LAST_FOCUS_REACHED_EVENT, focusElementNextToDropdown);
    return function () {
      headerRef.current.removeEventListener('keydown', handleKeyboardNavigation);
      window.removeEventListener(_events.DROPDOWN_FIRST_FOCUS_REACHED_EVENT, focusDropdown);
      window.removeEventListener(_events.DROPDOWN_LAST_FOCUS_REACHED_EVENT, focusElementNextToDropdown);
    };
  }, [isMenuExpanded]);
  var keyboard = _events.default.keyboard;

  var isArrowKeyCode = function isArrowKeyCode(keycode) {
    return [keyboard.left, keyboard.up, keyboard.right, keyboard.down].includes(keycode);
  };

  var handleKeyboardNavigation = function handleKeyboardNavigation(event) {
    if (isArrowKeyCode(event.keyCode)) {
      event.preventDefault();
      var focusableElements = (0, _a11y.getFocusableElementsFrom)(headerRef.current);
      var kbdNav = (0, _a11y.keyboardNavigation)(focusableElements);

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
    if (!isExpanded) stickyContainerRef.current.setSticky();
    setMenuExpanded(isExpanded);
    setMenuExpandBy(expandBy);
  };

  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      isLogged: isLogged,
      id: id,
      expandBy: menuExpandBy,
      callOnToggle: callOnToggle
    }
  }, /*#__PURE__*/_react.default.createElement(Header, {
    zIndex: zIndexConfig
  }, /*#__PURE__*/_react.default.createElement(StyledStickyContainer, {
    ref: stickyContainerRef,
    isSticky: isFixed || isMenuExpanded ? 'always' : 'topOnScrollUp',
    isMenuExpanded: isMenuExpanded
  }, /*#__PURE__*/_react.default.createElement(Navigation, {
    ref: headerRef,
    role: "banner",
    id: id,
    className: "k-HeaderNav",
    updateBackground: updateHeaderBackground()
  }, /*#__PURE__*/_react.default.createElement(_quickAccessLink.QuickAccessLink, (0, _extends2.default)({
    className: "quickAccessLink"
  }, quickAccessProps)), children))));
};

HeaderNav.Button = _button.Button;
HeaderNav.Logo = _logo.Logo;
HeaderNav.BurgerMenu = _burgerMenu.BurgerMenu;
HeaderNav.Nav = _nav.Nav;
HeaderNav.UserMenu = _userMenu.UserMenu;
HeaderNav.Right = _right.Right;
HeaderNav.Centered = _centered.Centered;
HeaderNav.LoggedOut = _loggedOut.LoggedOut;
HeaderNav.Logged = _logged.Logged;
HeaderNav.Hidden = _hidden.Hidden;
HeaderNav.propTypes = {
  id: _propTypes.default.string,
  isFixed: _propTypes.default.bool,
  isLogged: _propTypes.default.bool,
  quickAccessProps: _propTypes.default.shape({
    href: _propTypes.default.string,
    text: _propTypes.default.string,
    zIndex: _propTypes.default.number
  }),
  zIndexConfig: _propTypes.default.shape({
    header: _propTypes.default.number,
    headerWithOpenMenu: _propTypes.default.number
  })
};
HeaderNav.defaultProps = {
  id: 'kkbbAndCoHeaderNav',
  isFixed: false,
  isLogged: false,
  quickAccessProps: {},
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3
  }
};
var _default = HeaderNav;
exports.default = _default;