"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stickyContainer = require("../../layout/sticky-container");

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

var _searchInput = require("./components/search-input");

var _usePrevious = require("../../../helpers/hooks/use-previous");

var _styles = require("./styles");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const HeaderNav = _ref => {
  let {
    children,
    id,
    isFixed,
    isLogged,
    quickAccessProps,
    stickyProps,
    zIndexConfig,
    className,
    navProps,
    headerProps
  } = _ref;
  const [isMenuExpanded, setMenuExpanded] = (0, _react.useState)(false);
  const [menuExpandBy, setMenuExpandBy] = (0, _react.useState)(null);
  const [stickyState, setStickyState] = (0, _react.useState)(null);
  const [stuckState, setStuckState] = (0, _react.useState)(false);
  const stickyContainerRef = (0, _react.useRef)(null);
  const headerRef = (0, _react.useRef)(null);
  const previousStickyState = (0, _usePrevious.usePrevious)(stickyState);

  const callOnToggle = _ref2 => {
    let {
      isExpanded,
      expandBy
    } = _ref2;

    if (!isExpanded && previousStickyState === 'always') {
      stickyContainerRef.current.setSticky();
    }

    setMenuExpanded(isExpanded);
    setMenuExpandBy(expandBy);
  };

  (0, _react.useEffect)(() => {
    setStickyState(isFixed || isMenuExpanded ? 'always' : 'topOnScrollUp');
  }, [isFixed, isMenuExpanded]);

  const handleStickyChange = _ref3 => {
    let {
      isStuck
    } = _ref3;
    return setStuckState(isStuck);
  };

  return /*#__PURE__*/_react.default.createElement(_context.Context.Provider, {
    value: {
      isLogged,
      id,
      expandBy: menuExpandBy,
      callOnToggle
    }
  }, /*#__PURE__*/_react.default.createElement(_styles.StyledHeader, (0, _extends2.default)({}, headerProps, {
    style: {
      '--HeaderNav-zIndex': zIndexConfig.header,
      '--HeaderNav-zIndex-openMenu': zIndexConfig.headerWithOpenMenu,
      ...(headerProps == null ? void 0 : headerProps.style)
    },
    zIndex: zIndexConfig,
    className: (0, _classnames.default)('k-HeaderNav__wrapper', headerProps == null ? void 0 : headerProps.className, {
      'k-HeaderNav--menuIsExpanded': isMenuExpanded,
      'k-HeaderNav--isStuck': stuckState
    })
  }), /*#__PURE__*/_react.default.createElement(_stickyContainer.StickyContainer, (0, _extends2.default)({
    ref: stickyContainerRef,
    isSticky: stickyState
  }, stickyProps, {
    className: (0, _classnames.default)('k-HeaderNav__stickyContainer', stickyProps == null ? void 0 : stickyProps.className),
    onChange: handleStickyChange
  }), /*#__PURE__*/_react.default.createElement("nav", (0, _extends2.default)({
    ref: headerRef
  }, navProps, {
    id: id,
    className: (0, _classnames.default)('k-HeaderNav', className, navProps.className)
  }), /*#__PURE__*/_react.default.createElement(_quickAccessLink.QuickAccessLink, quickAccessProps), children))));
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
  headerProps: _propTypes.default.object,
  navProps: _propTypes.default.object,
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
  stickyProps: {},
  headerProps: {},
  navProps: {},
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3
  }
};
var _default = HeaderNav;
exports.default = _default;