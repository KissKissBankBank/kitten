import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import HeaderNav from '../index';
import { LendopolisLogo } from '../../../../components/logos/lendopolis-logo';
import { KissKissBankBankLogo } from '../../../../components/logos/kisskissbankbanklogo';
import { HeaderMenu } from '../../../../components/menus/header-menu';
import { SearchIcon } from '../../../../components/icons/search-icon';
import COLORS from '../../../../constants/colors-config';
import { Text } from '../../../../components/typography/text';
import { AvatarWithTextAndBadge } from '../../../../components/avatar/avatar-with-text-and-badge';
import domElementHelper from '../../../../helpers/dom/element-helper';
import { useWindowWidth } from '../../../../helpers/utils/use-window-width-hook';
import { useDeepCompareEffect } from '../../../../helpers/utils/use-deep-compare-effect-hook';
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
    largeItem: true,
    noBorder: true
  }, /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    min: "l"
  }, /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Lancez votre projet"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "D\xE9couvrez les projets")), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#",
    isSelected: true
  }, "Vos questions"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Blog"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(LendopolisLogo, {
    primaryColor: "#000"
  })), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(LendopolisLogo, {
    primaryColor: "#000"
  })), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/React.createElement(LendopolisLogo, {
    primaryColor: "#000"
  })));
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
  }, "Mon espace personnel"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Mes projets"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    size: "tiny",
    href: "#"
  }, "Gluten Mag"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    size: "tiny",
    href: "#"
  }, "Kallix \u2014 Mobilier de bureau pour le t\xE9l\xE9travail"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    size: "tiny",
    href: "#"
  }, "Mon premier court-m\xE9trage"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Mes contributions"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Mes messages"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#"
  }, "Modifier mon profil"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    button: true,
    modifier: "helium",
    href: "#"
  }, "Mon projet en cours"), /*#__PURE__*/React.createElement(HeaderMenu.Item, {
    href: "#",
    className: "k-u-background-color-background3--important"
  }, "D\xE9connexion"));
};

var Navigation = function Navigation() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#"
  }, "Lancez votre projet"), /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#",
    className: "is-selected"
  }, "D\xE9couvrez les projets"));
};

export var KissKissBankBankHeaderNavStoryNew = function KissKissBankBankHeaderNavStoryNew(_ref) {
  var isLogged = _ref.isLogged,
      isFixed = _ref.isFixed,
      size = _ref.size,
      borderStyle = _ref.borderStyle;

  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      burgerMenuWidth = _useState2[0],
      setBurgerMenuWidth = _useState2[1];

  var windowWidth = useWindowWidth();
  useDeepCompareEffect(function () {
    setBurgerMenuWidth(getComputedLeft("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "Logo")));
  }, [isLogged, windowWidth]);
  return /*#__PURE__*/React.createElement(HeaderNav, {
    id: HEADER_NAV_ID,
    isLogged: isLogged,
    isFixed: isFixed,
    quickAccessProps: {
      href: '#mainContent',
      text: 'Aller au contenu principal',
      zIndex: 300
    },
    size: size,
    borderStyle: borderStyle
  }, /*#__PURE__*/React.createElement(HeaderNav.BurgerMenuNext, {
    dropdownContentWidth: burgerMenuWidth
  }, /*#__PURE__*/React.createElement(InnerBurgerMenu, null)), /*#__PURE__*/React.createElement(HeaderNav.Logo, {
    href: "#"
  }, /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    min: "xs"
  }, /*#__PURE__*/React.createElement(KissKissBankBankLogo, {
    height: "25"
  })), /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    max: "xxs"
  }, /*#__PURE__*/React.createElement(KissKissBankBankLogo, null))), /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
    max: "m"
  }, /*#__PURE__*/React.createElement(HeaderNav.Nav, null, /*#__PURE__*/React.createElement(Navigation, null))), /*#__PURE__*/React.createElement(HeaderNav.Right, null, /*#__PURE__*/React.createElement(HeaderNav.Button, {
    icon: /*#__PURE__*/React.createElement(SearchIcon, {
      width: "14",
      height: "14",
      color: COLORS.font1
    }),
    backgroundColor: COLORS.background1,
    backgroundColorHover: COLORS.line1,
    color: COLORS.font1,
    text: "Rechercher",
    href: "#",
    hiddenText: {
      max: 'm'
    }
  }), /*#__PURE__*/React.createElement(HeaderNav.Logged, null, /*#__PURE__*/React.createElement(HeaderNav.UserMenuNext, {
    dropdownAnchorSide: "right",
    mobilePadding: false
  }, /*#__PURE__*/React.createElement(HeaderNav.UserMenuNext.Button, {
    hasArrow: true,
    backgroundColor: COLORS.background1,
    backgroundColorHover: COLORS.line1,
    backgroundColorActive: COLORS.line1,
    color: COLORS.font1,
    colorHover: COLORS.primary1,
    colorActive: COLORS.font1
  }, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge, {
    className: "k-u-margin-left-single@xs-down"
  }, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Image, {
    src: "/kitten.jpg"
  }, /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Badge, null, "2")), /*#__PURE__*/React.createElement(AvatarWithTextAndBadge.Text, {
    className: "k-u-hidden@xs-down",
    withEllipsisOverflow: true
  }, /*#__PURE__*/React.createElement(Text, {
    lineHeight: "normal",
    weight: "regular"
  }, "Jean Charles \xC9douard")))), /*#__PURE__*/React.createElement(HeaderNav.UserMenuNext.Navigation, null, /*#__PURE__*/React.createElement(InnerUserMenu, null)))), /*#__PURE__*/React.createElement(HeaderNav.LoggedOut, null, /*#__PURE__*/React.createElement(HeaderNav.Button, {
    icon: /*#__PURE__*/React.createElement(HeaderNav.Hidden, {
      min: "s"
    }, /*#__PURE__*/React.createElement(SearchIcon, null)),
    backgroundColor: COLORS.primary1,
    backgroundColorHover: COLORS.primary2,
    color: COLORS.background1,
    text: "Se connecter / S'inscrire",
    href: "#",
    hiddenText: {
      max: 'xs'
    }
  }))));
};