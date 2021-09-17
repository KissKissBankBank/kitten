"use strict";

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/es.weak-map.js");

require("core-js/modules/esnext.weak-map.delete-all.js");

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.object.get-own-property-descriptor.js");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

var _searchInput = require("./components/search-input");

var _usePreviousHook = require("../../../helpers/utils/use-previous-hook");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      isMenuExpanded = _useState[0],
      setMenuExpanded = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      menuExpandBy = _useState2[0],
      setMenuExpandBy = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      stickyState = _useState3[0],
      setStickyState = _useState3[1];

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
    className: (0, _classnames.default)('k-HeaderNav__wrapper', "k-HeaderNav--" + size, "k-HeaderNav--" + borderStyle, {
      'k-HeaderNav--menuIsExpanded': isMenuExpanded
    })
  }, /*#__PURE__*/_react.default.createElement(_stickyContainer.StickyContainer, (0, _extends2.default)({
    ref: stickyContainerRef,
    isSticky: stickyState
  }, stickyProps, {
    className: (0, _classnames.default)('k-HeaderNav__stickyContainer', stickyProps == null ? void 0 : stickyProps.className)
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
HeaderNav.SearchInput = _searchInput.SearchInput;
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