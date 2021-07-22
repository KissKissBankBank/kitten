"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LendopolisHeaderNavStory = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _index = _interopRequireDefault(require("../index"));

var _ = require("../../../..");

var HEADER_NAV_ID = 'kkbbAndCoHeaderNav';

var getElementById = function getElementById(id) {
  return document.getElementById(id);
};

var getComputedWidthElement = function getComputedWidthElement(id) {
  return _.domElementHelper.getComputedWidth(getElementById(id));
};

var getComputedLeft = function getComputedLeft(id) {
  return _.domElementHelper.getComputedLeft(getElementById(id));
};

var InnerBurgerMenu = function InnerBurgerMenu() {
  return /*#__PURE__*/_react.default.createElement(_.HeaderMenu, {
    borderSide: "right",
    borderSideOnHover: false,
    largeItem: true,
    noBorder: true
  }, /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    min: "l"
  }, /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#comment_investir"
  }, "Comment investir"), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#decouvrez_les_projets"
  }, "D\xE9couvrez les projets")), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#comment_emprunter"
  }, "Comment emprunter"), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#a_propos",
    isSelected: true
  }, "\xC0 propos"), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#blog"
  }, "Blog"), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_.KissKissBankBankLogo, null)), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_.KissKissBankBankLogo, null)), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    external: true,
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_.KissKissBankBankLogo, null)));
};

var Navigation = function Navigation() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.default.Nav.Item, {
    href: "#"
  }, "Comment investir"), /*#__PURE__*/_react.default.createElement(_index.default.Nav.Item, {
    href: "#",
    isSelected: true
  }, "D\xE9couvrez les projets"));
};

var InnerUserMenu = function InnerUserMenu() {
  return /*#__PURE__*/_react.default.createElement(_.HeaderMenu, {
    noBorder: true,
    borderSide: false,
    backgroundColors: {
      hover: _.COLORS.background1
    }
  }, /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#"
  }, "Mon espace personnel", /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Badge, {
    a11yText: "2 notifications"
  }, "2"), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-u-hidden@xs-up k-u-margin-top-noneHalf"
  }, /*#__PURE__*/_react.default.createElement(_.Text, {
    weight: "light"
  }, "Solde\xA0: 24\xA0093,39\xA0\u20AC"))), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    className: "k-u-background-color-background3",
    href: "#"
  }, "D\xE9connexion"));
};

var InnerAnonymousMenu = function InnerAnonymousMenu() {
  return /*#__PURE__*/_react.default.createElement(_.HeaderMenu, {
    noBorder: true,
    borderSide: false,
    backgroundColors: {
      hover: _.COLORS.background1
    }
  }, /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#"
  }, "Se connecter"), /*#__PURE__*/_react.default.createElement(_.HeaderMenu.Item, {
    href: "#"
  }, "S'inscrire"));
};

var LendopolisHeaderNavStory = function LendopolisHeaderNavStory(_ref) {
  var isLogged = _ref.isLogged,
      isFixed = _ref.isFixed,
      stickyProps = _ref.stickyProps;

  var _useState = (0, _react.useState)(null),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      burgerMenuWidth = _useState2[0],
      setBurgerMenuWidth = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      userMenuWidth = _useState4[0],
      setUserMenuWidth = _useState4[1];

  (0, _react.useEffect)(function () {
    setBurgerMenuWidth(getComputedLeft("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "PlateformMenu")) + getComputedWidthElement("".concat(HEADER_NAV_ID, "Logo")));

    if (isLogged) {
      setTimeout(function () {
        setUserMenuWidth(getComputedWidthElement("".concat(HEADER_NAV_ID, "UserMenu")));
      }, 100);
    }
  }, [isLogged]);
  return /*#__PURE__*/_react.default.createElement(_index.default, {
    id: HEADER_NAV_ID,
    isLogged: isLogged,
    isFixed: isFixed,
    quickAccessProps: {
      href: '#view',
      text: 'Aller au contenu',
      zIndex: 300
    },
    stickyProps: stickyProps
  }, /*#__PURE__*/_react.default.createElement(_index.default.BurgerMenu, {
    dropdownContentWidth: (0, _.pxToRem)(burgerMenuWidth)
  }, /*#__PURE__*/_react.default.createElement(InnerBurgerMenu, null)), /*#__PURE__*/_react.default.createElement(_index.default.Logo, {
    href: "#"
  }, /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    min: "xs"
  }, /*#__PURE__*/_react.default.createElement(_.LendopolisLogo, {
    height: "25",
    primaryColor: "#000"
  })), /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    max: "xxs"
  }, /*#__PURE__*/_react.default.createElement(_.LendopolisLogo, {
    primaryColor: "#000"
  }))), /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    max: "m"
  }, /*#__PURE__*/_react.default.createElement(_index.default.Nav, null, /*#__PURE__*/_react.default.createElement(Navigation, null))), /*#__PURE__*/_react.default.createElement(_index.default.Right, null, /*#__PURE__*/_react.default.createElement(_index.default.Logged, null, /*#__PURE__*/_react.default.createElement(_index.default.UserMenu, {
    dropdownContentWidth: (0, _.pxToRem)(userMenuWidth)
  }, /*#__PURE__*/_react.default.createElement(_index.default.UserMenu.Button, null, /*#__PURE__*/_react.default.createElement(_.AvatarWithTextAndBadge, null, /*#__PURE__*/_react.default.createElement(_.AvatarWithTextAndBadge.Image, {
    text: "JC",
    backgroundColor: "#002e7d"
  }, /*#__PURE__*/_react.default.createElement(_.AvatarWithTextAndBadge.Badge, {
    a11yText: "2 notifications"
  }, "2")), /*#__PURE__*/_react.default.createElement(_.AvatarWithTextAndBadge.Text, {
    textClassName: "k-u-hidden@xxs-down",
    withEllipsisOverflow: true
  }, /*#__PURE__*/_react.default.createElement(_.Text, {
    lineHeight: "normal",
    weight: "regular"
  }, "Jean Charles \xC9douard"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_.Text, {
    weight: "light"
  }, /*#__PURE__*/_react.default.createElement(_.Text, {
    className: "k-u-weight-light k-u-hidden@xs-down"
  }, "Solde\xA0:"), ' ', "24\xA0093,39\xA0\u20AC")))), /*#__PURE__*/_react.default.createElement(_index.default.UserMenu.Navigation, null, /*#__PURE__*/_react.default.createElement(InnerUserMenu, null)))), /*#__PURE__*/_react.default.createElement(_index.default.LoggedOut, null, /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    max: "xxs"
  }, /*#__PURE__*/_react.default.createElement(_index.default.Button, {
    backgroundColor: _.COLORS.background3,
    backgroundColorHover: _.COLORS.line1,
    color: _.COLORS.font1,
    colorHover: _.COLORS.font1,
    text: "Se connecter",
    href: "#"
  }), /*#__PURE__*/_react.default.createElement(_index.default.Button, {
    backgroundColor: _.COLORS.primary1,
    backgroundColorHover: _.COLORS.primary2,
    color: _.COLORS.background1,
    colorHover: _.COLORS.background1,
    text: "S'inscrire",
    href: "#"
  })), /*#__PURE__*/_react.default.createElement(_index.default.Hidden, {
    min: "xs"
  }, /*#__PURE__*/_react.default.createElement(_index.default.UserMenu, {
    dropdownContentWidth: (0, _.pxToRem)(userMenuWidth),
    padding: false
  }, /*#__PURE__*/_react.default.createElement(_index.default.UserMenu.Button, null, /*#__PURE__*/_react.default.createElement(_index.default.Button, {
    icon: /*#__PURE__*/_react.default.createElement(_.LoginIcon, null),
    a11yText: "Se connecter / S'inscrire",
    backgroundColor: _.COLORS.primary1,
    backgroundColorHover: _.COLORS.primary2,
    color: _.COLORS.background1,
    colorHover: _.COLORS.background1,
    as: "span"
  })), /*#__PURE__*/_react.default.createElement(_index.default.UserMenu.Navigation, null, /*#__PURE__*/_react.default.createElement(InnerAnonymousMenu, null)))))));
};

exports.LendopolisHeaderNavStory = LendopolisHeaderNavStory;