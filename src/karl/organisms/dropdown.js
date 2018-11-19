"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlUserMenuDropdown = exports.KarlPlatformSwitch = void 0;

var _react = _interopRequireDefault(require("react"));

var _defaultProps = require("kitten/hoc/default-props");

var _externalRichLink = require("kitten/components/links/external-rich-link");

var _dropdown = require("kitten/components/dropdowns/dropdown");

var _navList = require("kitten/components/lists/nav-list");

var _userMenu = require("kitten/components/dropdowns/user-menu");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// KarlPlatformSwitch
var karlPlatformSwitchButtonContent = _react.default.createElement("svg", {
  className: "k-ButtonIcon__svg",
  viewBox: "0 0 10 7",
  xmlns: "http://www.w3.org/2000/svg"
}, _react.default.createElement("path", {
  className: "k-Dropdown__button__svgPath",
  d: "M5 6.243L.757 2 2.172.586l4.242 4.242z"
}), _react.default.createElement("path", {
  className: "k-Dropdown__button__svgPath k-Dropdown__button__svgPathRight",
  d: "M5 6.243L3.586 4.828 7.828.586 9.243 2z"
}));

var platformSwitchDropdownList = [_react.default.createElement(_externalRichLink.ExternalRichLink, {
  className: "k-PlatformSwitch__item"
}, _react.default.createElement("img", {
  src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=44",
  alt: "LOGO"
})), _react.default.createElement(_externalRichLink.ExternalRichLink, {
  className: "k-PlatformSwitch__item"
}, _react.default.createElement("img", {
  src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=44",
  alt: "LOGO"
})), _react.default.createElement(_externalRichLink.ExternalRichLink, {
  className: "k-PlatformSwitch__item"
}, _react.default.createElement("img", {
  src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=44",
  alt: "LOGO"
}))];
var KarlPlatformSwitch = (0, _defaultProps.defaultProps)(_dropdown.Dropdown, {
  positionedWith: function positionedWith() {
    return document.getElementById('k-PlatformSwitchDropdown');
  },
  positionedWithBorder: false,
  buttonId: 'k-PlatformSwitch',
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--dropdown',
  buttonContentOnExpanded: karlPlatformSwitchButtonContent,
  buttonContentOnCollapsed: karlPlatformSwitchButtonContent,
  dropdownContent: _react.default.createElement(_navList.NavList, {
    className: "k-PlatformSwitch",
    role: "menubar",
    list: platformSwitchDropdownList
  })
});
exports.KarlPlatformSwitch = KarlPlatformSwitch;
var KarlUserMenuDropdown = (0, _defaultProps.defaultProps)(_userMenu.UserMenu, {
  // Position
  positionedWith: function positionedWith() {
    return document.getElementById('k-UserMenuDropdown');
  },
  positionedWithBorder: false,
  spaceAroundGrid: 20,
  // Button
  buttonId: 'k-UserMenu',
  buttonImgSrc: 'https://placehold.it/100x100/caf4fe/caf4fe',
  buttonImgWidth: 100,
  buttonImgHeight: 100,
  buttonImgAlt: 'Alt Firstname',
  buttonText: 'Firstname Lastname',
  buttonTitle: 'Profil',
  buttonNotifications: 42,
  // Dropdown content
  dropdownList: [_react.default.createElement("a", {
    className: "k-UserMenu__item",
    href: "#"
  }, "Mon profil"), _react.default.createElement("a", {
    className: "k-UserMenu__item",
    href: "#"
  }, "Mes projets"), _react.default.createElement("a", {
    className: "k-UserMenu__item",
    href: "#"
  }, "Mes contributions"), _react.default.createElement("a", {
    className: "k-UserMenu__item",
    href: "#"
  }, "Mes messages"), _react.default.createElement("a", {
    className: "k-UserMenu__item k-UserMenu__item--secondary k-UserMenu__borderTop",
    href: "#"
  }, "Admin"), _react.default.createElement("a", {
    className: "k-UserMenu__item k-UserMenu__item--secondary",
    href: "#"
  }, "Rapports"), _react.default.createElement("a", {
    className: "k-UserMenu__item k-UserMenu__borderTop",
    href: "#"
  }, "Profil"), _react.default.createElement("a", {
    className: "k-UserMenu__item",
    href: "#"
  }, "R\xE9glages"), _react.default.createElement("a", {
    className: "k-UserMenu__item",
    href: "#"
  }, "D\xE9connexion")]
});
exports.KarlUserMenuDropdown = KarlUserMenuDropdown;