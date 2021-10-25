import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StickyContainer } from '../../../components/layout/sticky-container';
import { Button } from './components/button';
import { Logo } from './components/logo';
import { BurgerMenu } from './components/burger-menu';
import { BurgerMenuNext } from './components/burger-menu-next';
import { Nav } from './components/nav';
import { UserMenu } from './components/user-menu';
import { UserMenuNext } from './components/user-menu-next';
import { Context } from './components/context';
import { Right } from './components/right';
import { Centered } from './components/centered';
import { LoggedOut } from './components/logged-out';
import { Logged } from './components/logged';
import { Hidden } from './components/hidden';
import { QuickAccessLink } from './components/quick-access-link';
import { SearchInput } from './components/search-input';
import { usePrevious } from '../../../helpers/utils/use-previous-hook';
import { StyledHeader } from './styles';

var HeaderNav = function HeaderNav(_ref) {
  var children = _ref.children,
      id = _ref.id,
      isFixed = _ref.isFixed,
      isLogged = _ref.isLogged,
      quickAccessProps = _ref.quickAccessProps,
      stickyProps = _ref.stickyProps,
      zIndexConfig = _ref.zIndexConfig,
      size = _ref.size,
      borderStyle = _ref.borderStyle,
      className = _ref.className;

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

  var callOnToggle = function callOnToggle(_ref2) {
    var isExpanded = _ref2.isExpanded,
        expandBy = _ref2.expandBy;

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
  }, /*#__PURE__*/React.createElement(StyledHeader, {
    style: {
      '--HeaderNav-zIndex': zIndexConfig.header,
      '--HeaderNav-zIndex-openMenu': zIndexConfig.headerWithOpenMenu
    },
    zIndex: zIndexConfig,
    className: classNames('k-HeaderNav__wrapper', "k-HeaderNav--".concat(size), "k-HeaderNav--".concat(borderStyle), {
      'k-HeaderNav--menuIsExpanded': isMenuExpanded
    })
  }, /*#__PURE__*/React.createElement(StickyContainer, _extends({
    ref: stickyContainerRef,
    isSticky: stickyState
  }, stickyProps, {
    className: classNames('k-HeaderNav__stickyContainer', stickyProps === null || stickyProps === void 0 ? void 0 : stickyProps.className)
  }), /*#__PURE__*/React.createElement("nav", {
    ref: headerRef,
    id: id,
    className: classNames('k-HeaderNav', className)
  }, /*#__PURE__*/React.createElement(QuickAccessLink, quickAccessProps), children))));
};

HeaderNav.Button = Button;
HeaderNav.Logo = Logo;
HeaderNav.BurgerMenu = BurgerMenu;
HeaderNav.BurgerMenuNext = BurgerMenuNext;
HeaderNav.Nav = Nav;
HeaderNav.UserMenu = UserMenu;
HeaderNav.UserMenuNext = UserMenuNext;
HeaderNav.Right = Right;
HeaderNav.Centered = Centered;
HeaderNav.LoggedOut = LoggedOut;
HeaderNav.Logged = Logged;
HeaderNav.Hidden = Hidden;
HeaderNav.SearchInput = SearchInput;
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
  }),
  size: PropTypes.oneOf(['small', 'regular']),
  borderStyle: PropTypes.oneOf(['none', 'shadow', 'border'])
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
export default HeaderNav;