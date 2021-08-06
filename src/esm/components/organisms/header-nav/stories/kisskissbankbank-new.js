import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import HeaderNav from '../index';
import { LendopolisLogo, KissKissBankBankLogo, HeaderMenu, SearchIcon, COLORS, Text, AvatarWithTextAndBadge, domElementHelper, useWindowWidth, useDeepCompareEffect, Button, Overlay, FlexWrapper, HorizontalCrowdfundingCard, ClockCircleIcon, CheckedCircleIcon, CLOSE_OVERLAY_EVENT, OPEN_OVERLAY_EVENT, Badge } from '../../../..';
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
    className: "k-u-background-color-background3"
  }, "D\xE9connexion"));
};

var Navigation = function Navigation() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#"
  }, "Lancez votre projet"), /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#",
    className: "is-selected"
  }, "D\xE9couvrez les projets"), /*#__PURE__*/React.createElement(HeaderNav.Nav.Item, {
    href: "#"
  }, "Carte Cadeau\xA0", /*#__PURE__*/React.createElement(Badge, {
    color: COLORS.primary1,
    className: "k-u-transform-uppercase"
  }, "Nouveau")));
};

var SearchInput = function SearchInput() {
  var handleToggle = function handleToggle(event) {
    action('handleToggle')(event);
    window.dispatchEvent(new Event(event.isDropdownExpanded ? OPEN_OVERLAY_EVENT : CLOSE_OVERLAY_EVENT));
  };

  var handleInputChange = function handleInputChange(event) {
    action('handleInputChange')(event);
  };

  return /*#__PURE__*/React.createElement(HeaderNav.SearchInput, {
    onMenuToggle: handleToggle,
    searchInputProps: {
      placeholder: 'Rechercher un projet…',
      'aria-label': 'Rechercher un projet',
      onChange: handleInputChange
    },
    searchButtonProps: {
      type: 'submit',
      'aria-label': 'Voir les résultats de la recherche'
    },
    action: "#form-action#",
    method: "POST"
  }, /*#__PURE__*/React.createElement("p", {
    className: "k-u-a11y-visuallyHidden"
  }, "4 r\xE9sultats ont \xE9t\xE9 trouv\xE9s"), /*#__PURE__*/React.createElement(FlexWrapper, {
    gap: 5,
    padding: 15
  }, /*#__PURE__*/React.createElement(HorizontalCrowdfundingCard, {
    title: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    description: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
    progress: 37,
    progressColor: COLORS.primary1,
    info: /*#__PURE__*/React.createElement("div", {
      className: "k-u-flex k-u-flex-alignItems-center"
    }, /*#__PURE__*/React.createElement(ClockCircleIcon, {
      width: "12",
      height: "12",
      color: COLORS.background1,
      bgColor: COLORS.primary1,
      className: "k-u-margin-right-noneHalf"
    }), /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      size: "micro",
      color: "primary1"
    }, "Dernier jour\xA0!"))
  }), /*#__PURE__*/React.createElement(HorizontalCrowdfundingCard, {
    title: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    description: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    progress: 100,
    progressColor: COLORS.valid,
    info: /*#__PURE__*/React.createElement("div", {
      className: "k-u-flex k-u-flex-alignItems-center"
    }, /*#__PURE__*/React.createElement(CheckedCircleIcon, {
      width: "12",
      height: "12",
      color: COLORS.background1,
      bgColor: COLORS.valid,
      className: "k-u-margin-right-noneHalf"
    }), /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      size: "micro",
      color: "font1"
    }, "R\xE9ussi"))
  }), /*#__PURE__*/React.createElement(HorizontalCrowdfundingCard, {
    title: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    description: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
    progress: 21,
    progressColor: COLORS.primary1,
    info: /*#__PURE__*/React.createElement("div", {
      className: "k-u-flex k-u-flex-alignItems-center"
    }, /*#__PURE__*/React.createElement(ClockCircleIcon, {
      width: "12",
      height: "12",
      color: COLORS.background1,
      bgColor: COLORS.primary1,
      className: "k-u-margin-right-noneHalf"
    }), /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      size: "micro"
    }, "En cours"))
  }), /*#__PURE__*/React.createElement(HorizontalCrowdfundingCard, {
    title: "Maecenas sed diam eget risus varius blandit sit amet non magna.",
    description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    progress: 60,
    progressColor: COLORS.primary1,
    info: /*#__PURE__*/React.createElement("div", {
      className: "k-u-flex k-u-flex-alignItems-center"
    }, /*#__PURE__*/React.createElement(ClockCircleIcon, {
      width: "12",
      height: "12",
      color: COLORS.background1,
      bgColor: COLORS.primary1,
      className: "k-u-margin-right-noneHalf"
    }), /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      size: "micro"
    }, "En cours"))
  })), /*#__PURE__*/React.createElement(Button, {
    size: "tiny",
    variant: "orion",
    type: "submit",
    fluid: true,
    className: "k-u-margin-bottom-double k-u-margin-horizontal-double",
    style: {
      width: 'calc(100% - 40px)'
    }
  }, "Voir les r\xE9sultats de la recherche"));
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
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Overlay, {
    zIndex: 1,
    position: "fixed"
  }), /*#__PURE__*/React.createElement(HeaderNav, {
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
  }, /*#__PURE__*/React.createElement(HeaderNav.Nav, null, /*#__PURE__*/React.createElement(Navigation, null))), /*#__PURE__*/React.createElement(HeaderNav.Right, {
    padded: true
  }, /*#__PURE__*/React.createElement(SearchInput, null), /*#__PURE__*/React.createElement(HeaderNav.Logged, null, /*#__PURE__*/React.createElement(HeaderNav.UserMenuNext, {
    dropdownAnchorSide: "right",
    padding: false
  }, /*#__PURE__*/React.createElement(HeaderNav.UserMenuNext.Button, {
    hasArrow: true,
    backgroundColor: COLORS.background1,
    backgroundColorHover: "transparent",
    backgroundColorActive: "transparent",
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
  })))));
};