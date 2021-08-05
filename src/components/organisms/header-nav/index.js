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

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stickyContainer = require("../../../components/layout/sticky-container");

var _button = require("./components/button");

var _logo = require("./components/logo");

var _burgerMenu = require("./components/burger-menu");

var _burgerMenuNext = require("./components/burger-menu-next");

var _nav = require("./components/nav");

var _userMenu = require("./components/user-menu");

var _userMenuNext = require("./components/user-menu-next");

var _context = require("./components/context");

var _right = require("./components/right");

var _centered = require("./components/centered");

var _loggedOut = require("./components/logged-out");

var _logged = require("./components/logged");

var _hidden = require("./components/hidden");

var _quickAccessLink = require("./components/quick-access-link");

var _usePreviousHook = require("../../../helpers/utils/use-previous-hook");

var _styles = require("./styles");

var HeaderNav = function HeaderNav(_ref) {
  var children = _ref.children,
      id = _ref.id,
      isFixed = _ref.isFixed,
      isLogged = _ref.isLogged,
      quickAccessProps = _ref.quickAccessProps,
      stickyProps = _ref.stickyProps,
      zIndexConfig = _ref.zIndexConfig,
      size = _ref.size,
      borderStyle = _ref.borderStyle;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isMenuExpanded = _useState2[0],
      setMenuExpanded = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      menuExpandBy = _useState4[0],
      setMenuExpandBy = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      stickyState = _useState6[0],
      setStickyState = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      isBackgroundInactive = _useState8[0],
      setBackgroundInactive = _useState8[1];

  var stickyContainerRef = (0, _react.useRef)(null);
  var headerRef = (0, _react.useRef)(null);
  var previousStickyState = (0, _usePreviousHook.usePrevious)(stickyState);

  var callOnToggle = function callOnToggle(_ref2) {
    var isExpanded = _ref2.isExpanded,
        expandBy = _ref2.expandBy;

    if (!isExpanded && previousStickyState === 'always') {
      stickyContainerRef.current.setSticky();
    }

    setMenuExpanded(isExpanded);
    setMenuExpandBy(expandBy);
  };

  (0, _react.useEffect)(function () {
    setStickyState(isFixed || isMenuExpanded ? 'always' : 'topOnScrollUp');
  }, [isFixed, isMenuExpanded]);
  (0, _react.useEffect)(function () {
    setBackgroundInactive(/UserMenu/.test(menuExpandBy));
  }, [menuExpandBy]);
  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      isLogged: isLogged,
      id: id,
      expandBy: menuExpandBy,
      callOnToggle: callOnToggle
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledHeader, {
    style: {
      '--HeaderNav-zIndex': zIndexConfig.header,
      '--HeaderNav-zIndex-openMenu': zIndexConfig.headerWithOpenMenu
    },
    zIndex: zIndexConfig,
    className: (0, _classnames.default)('k-HeaderNav__wrapper', "k-HeaderNav--".concat(size), "k-HeaderNav--".concat(borderStyle), {
      'k-HeaderNav--menuIsExpanded': isMenuExpanded,
      'k-HeaderNav--inactiveBackground': isBackgroundInactive
    })
  }, /*#__PURE__*/_react.default.createElement(_stickyContainer.StickyContainer, (0, _extends2.default)({
    ref: stickyContainerRef,
    isSticky: stickyState
  }, stickyProps, {
    className: (0, _classnames.default)('k-HeaderNav__stickyContainer', stickyProps === null || stickyProps === void 0 ? void 0 : stickyProps.className)
  }), /*#__PURE__*/_react.default.createElement("nav", {
    ref: headerRef,
    id: id,
    className: "k-HeaderNav"
  }, /*#__PURE__*/_react.default.createElement(_quickAccessLink.QuickAccessLink, quickAccessProps), children))));
};

HeaderNav.Button = _button.Button;
HeaderNav.Logo = _logo.Logo;
HeaderNav.BurgerMenu = _burgerMenu.BurgerMenu;
HeaderNav.BurgerMenuNext = _burgerMenuNext.BurgerMenuNext;
HeaderNav.Nav = _nav.Nav;
HeaderNav.UserMenu = _userMenu.UserMenu;
HeaderNav.UserMenuNext = _userMenuNext.UserMenuNext;
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
  stickyProps: _propTypes.default.shape({
    top: _propTypes.default.number
  }),
  zIndexConfig: _propTypes.default.shape({
    header: _propTypes.default.number,
    headerWithOpenMenu: _propTypes.default.number
  }),
  size: _propTypes.default.oneOf(['small', 'regular']),
  borderStyle: _propTypes.default.oneOf(['none', 'shadow', 'border'])
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
  },
  size: 'regular',
  borderStyle: 'shadow'
};
var _default = HeaderNav;
exports.default = _default;