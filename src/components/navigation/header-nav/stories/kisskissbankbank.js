"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KissKissBankBankHeaderNavStory = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _lendopolisLogo = require("../../../../components/logos/lendopolis-logo");

var _kisskissbankbanklogo = require("../../../../components/logos/kisskissbankbanklogo");

var _headerMenu = require("../../../../components/menus/header-menu");

var _searchIcon = require("../../../../components/icons/search-icon");

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var _text = require("../../../../components/typography/text");

var _avatarWithTextAndBadge = require("../../../../components/avatar/avatar-with-text-and-badge");

var _elementHelper = _interopRequireDefault(require("../../../../helpers/dom/element-helper"));

var _useWindowWidthHook = require("../../../../helpers/utils/use-window-width-hook");

var _useDeepCompareEffectHook = require("../../../../helpers/utils/use-deep-compare-effect-hook");

var HEADER_NAV_ID = 'kkbbAndCoHeaderNav';

var getElementById = function getElementById(id) {
  return document.getElementById(id);
};

var getComputedWidthElement = function getComputedWidthElement(id) {
  return _elementHelper.default.getComputedWidth(getElementById(id));
};

var getComputedLeft = function getComputedLeft(id) {
  return _elementHelper.default.getComputedLeft(getElementById(id));
};

var InnerBurgerMenu = function InnerBurgerMenu() {
  return /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu, {
    borderSide: "right",
    largeItem: true,
    noBorder: true
  }, /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    min: "l"
  }, /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Lancez votre projet"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "D\xE9couvrez les projets")), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#",
    isSelected: true
  }, "Vos questions"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Blog"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_lendopolisLogo.LendopolisLogo, {
    primaryColor: "#000"
  })), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_lendopolisLogo.LendopolisLogo, {
    primaryColor: "#000"
  })), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_lendopolisLogo.LendopolisLogo, {
    primaryColor: "#000"
  })));
};

var InnerUserMenu = function InnerUserMenu() {
  return /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu, {
    noBorder: true,
    borderSide: false,
    backgroundColors: {
      hover: _colorsConfig.default.background1
    }
  }, /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Mon espace personnel"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Mes projets"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    size: "tiny",
    href: "#"
  }, "Gluten Mag"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    size: "tiny",
    href: "#"
  }, "Kallix \u2014 Mobilier de bureau pour le t\xE9l\xE9travail"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    size: "tiny",
    href: "#"
  }, "Mon premier court-m\xE9trage"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Mes contributions"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Mes messages"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#"
  }, "Modifier mon profil"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    button: true,
    modifier: "helium",
    href: "#"
  }, "Mon projet en cours"), /*#__PURE__*/_react.default.createElement(_headerMenu.HeaderMenu.Item, {
    href: "#",
    className: "k-u-background-color-background3--important"
  }, "D\xE9connexion"));
};

var Navigation = function Navigation() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default.Nav.Item, {
    href: "#"
  }, "Lancez votre projet"), /*#__PURE__*/_react.default.createElement(_index.default.Nav.Item, {
    href: "#",
    className: "is-selected"
  }, "D\xE9couvrez les projets"));
};

var KissKissBankBankHeaderNavStory = function KissKissBankBankHeaderNavStory(_ref) {
  var isLogged = _ref.isLogged,
      isFixed = _ref.isFixed;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      burgerMenuWidth = _useState2[0],
      setBurgerMenuWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      userMenuWidth = _useState4[0],
      setUserMenuWidth = _useState4[1];

  var windowWidth = (0, _useWindowWidthHook.useWindowWidth)();
  (0, _useDeepCompareEffectHook.useDeepCompareEffect)(function () {
    setBurgerMenuWidth(getComputedLeft("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "Logo")));

    if (isLogged) {
      setTimeout(function () {
        setUserMenuWidth(getComputedWidthElement("".concat(HEADER_NAV_ID, "UserMenu")) || '0');
      }, 100);
    }
  }, [isLogged, windowWidth]);
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    id: HEADER_NAV_ID,
    isLogged: isLogged,
    isFixed: isFixed,
    quickAccessProps: {
      href: '#mainContent',
      text: 'Aller au contenu principal',
      zIndex: 300
    }
  }, /*#__PURE__*/_react.default.createElement(_index.default.BurgerMenu, null, /*#__PURE__*/_react.default.createElement(InnerBurgerMenu, {
    dropdownContentWidth: burgerMenuWidth
  })), /*#__PURE__*/_react.default.createElement(_index.default.Logo, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    min: "xs"
  }, /*#__PURE__*/_react.default.createElement(_kisskissbankbanklogo.KissKissBankBankLogo, {
    height: "25"
  })), /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    max: "xxs"
  }, /*#__PURE__*/_react.default.createElement(_kisskissbankbanklogo.KissKissBankBankLogo, null))), /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    max: "m"
  }, /*#__PURE__*/_react.default.createElement(_index.default.Nav, null, /*#__PURE__*/_react.default.createElement(Navigation, null))), /*#__PURE__*/_react.default.createElement(_index.default.Right, null, /*#__PURE__*/_react.default.createElement(_index.default.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_searchIcon.SearchIcon, {
      width: "14",
      height: "14",
      color: _colorsConfig.default.font1
    }),
    backgroundColor: _colorsConfig.default.background3,
    backgroundColorHover: _colorsConfig.default.line1,
    color: _colorsConfig.default.font1,
    text: "Rechercher",
    href: "#",
    hiddenText: {
      max: 'm'
    }
  }), /*#__PURE__*/_react.default.createElement(_index.default.Logged, null, /*#__PURE__*/_react.default.createElement(_index.default.UserMenu, {
    dropdownContentWidth: userMenuWidth
  }, /*#__PURE__*/_react.default.createElement(_index.default.UserMenu.Button, null, /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge, null, /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge.Image, {
    src: "https://via.placeholder.com/40x40.png"
  }, /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge.Badge, null, "2")), /*#__PURE__*/_react.default.createElement(_avatarWithTextAndBadge.AvatarWithTextAndBadge.Text, {
    textClassName: "k-u-hidden@xs-down",
    withEllipsisOverflow: true
  }, /*#__PURE__*/_react.default.createElement(_text.Text, {
    lineHeight: "normal",
    weight: "regular"
  }, "Jean Charles \xC9douard")))), /*#__PURE__*/_react.default.createElement(_index.default.UserMenu.Navigation, null, /*#__PURE__*/_react.default.createElement(InnerUserMenu, null)))), /*#__PURE__*/_react.default.createElement(_index.default.LoggedOut, null, /*#__PURE__*/_react.default.createElement(_index.default.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
      min: "s"
    }, /*#__PURE__*/_react.default.createElement(_searchIcon.SearchIcon, null)),
    backgroundColor: _colorsConfig.default.primary1,
    backgroundColorHover: _colorsConfig.default.primary2,
    color: _colorsConfig.default.background1,
    text: "Se connecter / S'inscrire",
    href: "#",
    hiddenText: {
      max: 'xs'
    }
  }))));
};

exports.KissKissBankBankHeaderNavStory = KissKissBankBankHeaderNavStory;