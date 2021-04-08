import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useState } from 'react';
import HeaderNav from '../index';
import { LendopolisLogo } from '../../../../components/logos/lendopolis-logo';
import { KissKissBankBankLogo } from '../../../../components/logos/kisskissbankbanklogo';
import { HeaderMenu } from '../../../../components/menus/header-menu';
import COLORS from '../../../../constants/colors-config';
import { Text } from '../../../../components/typography/text';
import { AvatarWithTextAndBadge } from '../../../../components/avatar/avatar-with-text-and-badge';
import { LoginIcon } from '../../../../components/icons/login-icon';
import domElementHelper from '../../../../helpers/dom/element-helper';
import { pxToRem } from '../../../../helpers/utils/typography';
var HEADER_NAV_ID = 'kkbbAndCoHeaderNav';

var getElementById = function getElementById(id) {
  return document.getElementById(id);
};

var getComputedWidthElement = function getComputedWidthElement(id) {
  return domElementHelper.getComputedWidth(getElementById(id));
};

var getComputedLeft = function getComputedLeft(id) {
  return domElementHelper.getComputedLeft(getElementById(id));
};

var InnerBurgerMenu = function InnerBurgerMenu() {
  return /*#__PURE__*/React.createElement(HeaderMenu, {
    borderSide: "right",
    borderSideOnHover: false,
    largeItem: true,
    noBorder: true
  }, /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    min: "l"
  }, /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#comment_investir"
  }, "Comment investir"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#decouvrez_les_projets"
  }, "D\xE9couvrez les projets")), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#comment_emprunter"
  }, "Comment emprunter"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#a_propos",
    isSelected: true
  }, "\xC0 propos"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#blog"
  }, "Blog"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(KissKissBankBankLogo, null)), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(KissKissBankBankLogo, null)), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(KissKissBankBankLogo, null)));
};

var Navigation = function Navigation() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#"
  }, "Comment investir"), /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#",
    isSelected: true
  }, "D\xE9couvrez les projets"));
};

var InnerUserMenu = function InnerUserMenu() {
  return /*#__PURE__*/React.createElement(HeaderMenu, {
    noBorder: true,
    borderSide: false,
    backgroundColors: {
      hover: COLORS.background1
    }
  }, /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Mon espace personnel", /*#__PURE__*/React.createElement(HeaderMenu.Badge, {
    a11yText: "2 notifications"
  }, "2"), /*#__PURE__*/React.createElement("div", {
    className: "k-u-hidden@xs-up--important k-u-margin-top-noneHalf"
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "light"
  }, "Solde\xA0: 24\xA0093,39\xA0\u20AC"))), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    className: "k-u-background-color-background3--important",
    href: "#"
  }, "D\xE9connexion"));
};

var InnerAnonymousMenu = function InnerAnonymousMenu() {
  return /*#__PURE__*/React.createElement(HeaderMenu, {
    noBorder: true,
    borderSide: false,
    backgroundColors: {
      hover: COLORS.background1
    }
  }, /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Se connecter"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "S'inscrire"));
};

export var LendopolisHeaderNavStory = function LendopolisHeaderNavStory(_ref) {
  var isLogged = _ref.isLogged,
      isFixed = _ref.isFixed,
      stickyProps = _ref.stickyProps;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      burgerMenuWidth = _useState2[0],
      setBurgerMenuWidth = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      userMenuWidth = _useState4[0],
      setUserMenuWidth = _useState4[1];

  useEffect(function () {
    setBurgerMenuWidth(getComputedLeft("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "Logo")));

    if (isLogged) {
      setTimeout(function () {
        setUserMenuWidth(getComputedWidthElement("".concat(HEADER_NAV_ID, "UserMenu")));
      }, 100);
    }
  }, [isLogged]);
  return /*#__PURE__*/React.createElement(HeaderNav, {
    id: HEADER_NAV_ID,
    isLogged: isLogged,
    isFixed: isFixed,
    quickAccessProps: {
      href: '#view',
      text: 'Aller au contenu',
      zIndex: 300
    },
    stickyProps: stickyProps
  }, /*#__PURE__*/React.createElement(HeaderNav.BurgerMenu, {
    dropdownContentWidth: pxToRem(burgerMenuWidth)
  }, /*#__PURE__*/React.createElement(InnerBurgerMenu, null)), /*#__PURE__*/React.createElement(HeaderNav.Logo, {
    href: "#"
  }, /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    min: "xs"
  }, /*#__PURE__*/React.createElement(LendopolisLogo, {
    height: "25",
    primaryColor: "#000"
  })), /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    max: "xxs"
  }, /*#__PURE__*/React.createElement(LendopolisLogo, {
    primaryColor: "#000"
  }))), /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    max: "m"
  }, /*#__PURE__*/React.createElement(HeaderNav.Nav, null, /*#__PURE__*/React.createElement(Navigation, null))), /*#__PURE__*/React.createElement(HeaderNav.Right, null, /*#__PURE__*/React.createElement(HeaderNav.Logged, null, /*#__PURE__*/React.createElement(HeaderNav.UserMenu, {
    dropdownContentWidth: pxToRem(userMenuWidth)
  }, /*#__PURE__*/React.createElement(HeaderNav.UserMenu.Button, null, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge, null, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Image, {
    text: "JC",
    backgroundColor: "#002e7d"
  }, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Badge, {
    a11yText: "2 notifications"
  }, "2")), /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Text, {
    textClassName: "k-u-hidden@xxs-down",
    withEllipsisOverflow: true
  }, /*#__PURE__*/React.createElement(Text, {
    lineHeight: "normal",
    weight: "regular"
  }, "Jean Charles \xC9douard"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Text, {
    weight: "light"
  }, /*#__PURE__*/React.createElement(Text, {
    className: "k-u-weight-light k-u-hidden@xs-down"
  }, "Solde\xA0:"), ' ', "24\xA0093,39\xA0\u20AC")))), /*#__PURE__*/React.createElement(HeaderNav.UserMenu.Navigation, null, /*#__PURE__*/React.createElement(InnerUserMenu, null)))), /*#__PURE__*/React.createElement(HeaderNav.LoggedOut, null, /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    max: "xxs"
  }, /*#__PURE__*/React.createElement(HeaderNav.Button, {
    backgroundColor: COLORS.background3,
    backgroundColorHover: COLORS.line1,
    color: COLORS.font1,
    colorHover: COLORS.font1,
    text: "Se connecter",
    href: "#"
  }), /*#__PURE__*/React.createElement(HeaderNav.Button, {
    backgroundColor: COLORS.primary1,
    backgroundColorHover: COLORS.primary2,
    color: COLORS.background1,
    colorHover: COLORS.background1,
    text: "S'inscrire",
    href: "#"
  })), /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    min: "xs"
  }, /*#__PURE__*/React.createElement(HeaderNav.UserMenu, {
    dropdownContentWidth: pxToRem(userMenuWidth),
    padding: false
  }, /*#__PURE__*/React.createElement(HeaderNav.UserMenu.Button, null, /*#__PURE__*/React.createElement(HeaderNav.Button, {
    icon: /*#__PURE__*/React.createElement(LoginIcon, null),
    a11yText: "Se connecter / S'inscrire",
    backgroundColor: COLORS.primary1,
    backgroundColorHover: COLORS.primary2,
    color: COLORS.background1,
    colorHover: COLORS.background1,
    as: "span"
  })), /*#__PURE__*/React.createElement(HeaderNav.UserMenu.Navigation, null, /*#__PURE__*/React.createElement(InnerAnonymousMenu, null)))))));
};