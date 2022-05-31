import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { StickyContainer } from '../../layout/sticky-container';
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
import { SearchInput } from './components/search-input';
import { usePrevious } from '../../../helpers/hooks/use-previous';
import { StyledHeader } from './styles';

var HeaderNav = function HeaderNav(_ref) {
  var children = _ref.children,
      id = _ref.id,
      isFixed = _ref.isFixed,
      isLogged = _ref.isLogged,
      quickAccessProps = _ref.quickAccessProps,
      stickyProps = _ref.stickyProps,
      zIndexConfig = _ref.zIndexConfig,
      className = _ref.className,
      navProps = _ref.navProps,
      headerProps = _ref.headerProps;

  var _useState = useState(false),
      isMenuExpanded = _useState[0],
      setMenuExpanded = _useState[1];

  var _useState2 = useState(null),
      menuExpandBy = _useState2[0],
      setMenuExpandBy = _useState2[1];

  var _useState3 = useState(null),
      stickyState = _useState3[0],
      setStickyState = _useState3[1];

  var _useState4 = useState(false),
      stuckState = _useState4[0],
      setStuckState = _useState4[1];

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

  var handleStickyChange = function handleStickyChange(_ref3) {
    var isStuck = _ref3.isStuck;
    return setStuckState(isStuck);
  };

  return /*#__PURE__*/React.createElement(Context.Provider, {
    value: {
      isLogged: isLogged,
      id: id,
      expandBy: menuExpandBy,
      callOnToggle: callOnToggle
    }
  }, /*#__PURE__*/React.createElement(StyledHeader, _extends({}, headerProps, {
    style: _extends({
      '--HeaderNav-zIndex': zIndexConfig.header,
      '--HeaderNav-zIndex-openMenu': zIndexConfig.headerWithOpenMenu
    }, headerProps == null ? void 0 : headerProps.style),
    zIndex: zIndexConfig,
    className: classNames('k-HeaderNav__wrapper', headerProps == null ? void 0 : headerProps.className, {
      'k-HeaderNav--menuIsExpanded': isMenuExpanded,
      'k-HeaderNav--isStuck': stuckState
    })
  }), /*#__PURE__*/React.createElement(StickyContainer, _extends({
    ref: stickyContainerRef,
    isSticky: stickyState
  }, stickyProps, {
    className: classNames('k-HeaderNav__stickyContainer', stickyProps == null ? void 0 : stickyProps.className),
    onChange: handleStickyChange
  }), /*#__PURE__*/React.createElement("nav", _extends({
    ref: headerRef
  }, navProps, {
    id: id,
    className: classNames('k-HeaderNav', className, navProps.className)
  }), /*#__PURE__*/React.createElement(QuickAccessLink, quickAccessProps), children))));
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
  headerProps: PropTypes.object,
  navProps: PropTypes.object,
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
  headerProps: {},
  navProps: {},
  zIndexConfig: {
    header: 1,
    headerWithOpenMenu: 3
  }
};
export default HeaderNav;