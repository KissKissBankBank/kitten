"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlPhoneDropdown = exports.KarlLoggedHeaderUserMenu = exports.KarlLoggedHeaderPlatformSwitch = exports.KarlUnloggedHeaderPlatformSwitch = exports.KarlHeaderWithTitles = exports.KarlHeaderWhenLogged = exports.KarlHeaderWithSearchInput = exports.KarlHeader = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _defaultProps = require("kitten/hoc/default-props");

var _assign = _interopRequireDefault(require("core-js/library/fn/object/assign"));

var _dropdown = require("kitten/components/dropdowns/dropdown");

var _externalRichLink = require("kitten/components/links/external-rich-link");

var _navList = require("kitten/components/lists/nav-list");

var _userMenu = require("kitten/components/dropdowns/user-menu");

var _phoneDropdown = require("kitten/components/dropdowns/phone-dropdown");

var _search = require("kitten/components/form/search");

var _header = require("kitten/components/headers/header");

var _headerTitles = require("kitten/components/headers/header-titles");

var _headerLogo = require("kitten/components/headers/header-logo");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlHeader = function KarlHeader() {
  return _react.default.createElement(_header.Header, {
    id: "header"
  }, _react.default.createElement(_header.HeaderItems, null, _react.default.createElement(_header.HeaderItem, {
    fixedSize: "true",
    id: "k-Header__platformSwitchDropdown"
  }, _react.default.createElement(KarlUnloggedHeaderPlatformSwitch, null)), _react.default.createElement(_header.HeaderItem, {
    tag: "p",
    fixedSize: "true"
  }, _react.default.createElement(_headerLogo.HeaderLogo, {
    href: "pages/header",
    src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=40",
    alt: "LOGO",
    lightOnM: true,
    lightOnXxs: true
  })), _react.default.createElement(_header.HeaderItem, {
    tag: "nav",
    className: "k-Header__nav"
  }, _react.default.createElement("ul", {
    className: "k-HorizontalNav",
    role: "menubar"
  }, _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 1")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 2")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 3")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item is-selected",
    href: "#"
  }, "Nav link 4"))))), _react.default.createElement(_header.HeaderItems, {
    fixedSize: "true"
  }, _react.default.createElement(_header.HeaderItem, {
    id: "k-PhoneDropdown"
  }, _react.default.createElement("button", {
    className: "k-ButtonIcon k-ButtonIcon--hydrogen"
  }, _react.default.createElement("svg", {
    className: "k-ButtonIcon__svg",
    viewBox: "-0.7 -0.7 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "7",
    stroke: "#333",
    strokeWidth: "1.1",
    className: "k-ButtonIcon__svg__stroke",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M13 11 L17 15 L15.5 16.5 L11.5 12.7z"
  })))), _react.default.createElement(_header.HeaderItem, {
    className: "k-Header__signup"
  }, _react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)('k-Button', 'k-Button--hydrogen', 'k-Header__button')
  }, "S'identifier"))));
};

exports.KarlHeader = KarlHeader;

var KarlHeaderWithSearchInput = function KarlHeaderWithSearchInput() {
  return _react.default.createElement(_header.Header, {
    id: "header-search"
  }, _react.default.createElement(_header.HeaderItems, null, _react.default.createElement(_header.HeaderItem, {
    id: "k-Header__platformSwitchDropdown"
  }, _react.default.createElement(KarlLoggedHeaderPlatformSwitch, null)), _react.default.createElement(_header.HeaderItem, {
    tag: "p",
    fixedSize: "true"
  }, _react.default.createElement(_headerLogo.HeaderLogo, {
    href: "pages/header",
    src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=40",
    alt: "LOGO",
    lightOnM: true,
    lightOnXxs: true
  })), _react.default.createElement(_header.HeaderItem, {
    tag: "nav",
    className: "k-Header__nav"
  }, _react.default.createElement("ul", {
    className: "k-HorizontalNav",
    role: "menubar"
  }, _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 1")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 2")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 3")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item is-selected",
    href: "#"
  }, "Nav link 4"))))), _react.default.createElement(_header.HeaderItems, {
    fixedSize: "true"
  }, _react.default.createElement(_header.HeaderItem, {
    className: "k-Header__search"
  }, _react.default.createElement(_search.Search, {
    inputId: "q",
    inputName: "q",
    inputPlaceholder: "Rechercher\u2026",
    submitLabel: "Search",
    actionUrl: "#"
  })), _react.default.createElement(_header.HeaderItem, {
    className: "k-Header__signup"
  }, _react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)('k-Button', 'k-Button--hydrogen', 'k-Header__button')
  }, "S'identifier"))));
};

exports.KarlHeaderWithSearchInput = KarlHeaderWithSearchInput;

var KarlHeaderWhenLogged = function KarlHeaderWhenLogged() {
  return _react.default.createElement(_header.Header, {
    id: "header-logged"
  }, _react.default.createElement(_header.HeaderItems, null, _react.default.createElement(_header.HeaderItem, {
    id: "k-Header__platformSwitchDropdown"
  }, _react.default.createElement(KarlLoggedHeaderPlatformSwitch, null)), _react.default.createElement(_header.HeaderItem, {
    tag: "p",
    fixedSize: "true"
  }, _react.default.createElement(_headerLogo.HeaderLogo, {
    href: "pages/header",
    src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=40",
    alt: "LOGO",
    lightOnM: true,
    lightOnXxs: true
  })), _react.default.createElement(_header.HeaderItem, {
    tag: "nav",
    className: "k-Header__nav"
  }, _react.default.createElement("ul", {
    className: "k-HorizontalNav",
    role: "menubar"
  }, _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 1")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 2")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item",
    href: "#"
  }, "Nav link 3")), _react.default.createElement("li", {
    className: "k-HorizontalNav__element",
    role: "menuitem"
  }, _react.default.createElement("a", {
    className: "k-HorizontalNav__item k-Header__nav__item is-selected",
    href: "#"
  }, "Nav link 4"))))), _react.default.createElement(_header.HeaderItems, {
    fixedSize: "true"
  }, _react.default.createElement(_header.HeaderItem, null, _react.default.createElement("button", {
    className: "k-ButtonIcon k-ButtonIcon--hydrogen"
  }, _react.default.createElement("svg", {
    className: "k-ButtonIcon__svg",
    viewBox: "-0.7 -0.7 18 18",
    xmlns: "http://www.w3.org/2000/svg"
  }, _react.default.createElement("circle", {
    cx: "7",
    cy: "7",
    r: "7",
    stroke: "#333",
    strokeWidth: "1.1",
    className: "k-ButtonIcon__svg__stroke",
    fill: "none"
  }), _react.default.createElement("path", {
    d: "M13 11 L17 15 L15.5 16.5 L11.5 12.7z"
  })))), _react.default.createElement(_header.HeaderItem, {
    id: "k-UserMenuDropdownLogged"
  }, _react.default.createElement(KarlLoggedHeaderUserMenu, null))));
};

exports.KarlHeaderWhenLogged = KarlHeaderWhenLogged;

var KarlHeaderWithTitles = function KarlHeaderWithTitles() {
  return _react.default.createElement(_header.Header, {
    id: "header-with-titles"
  }, _react.default.createElement(_header.HeaderItems, null, _react.default.createElement(_header.HeaderItem, {
    tag: "p",
    fixedSize: "true"
  }, _react.default.createElement("a", {
    className: (0, _classnames.default)('k-Header__logo', 'k-Header__logo--lightOnM', 'k-Header__logo--lightOnXxs'),
    href: "pages/header"
  }, _react.default.createElement("img", {
    src: "https://placeholdit.imgix.net/~text?txt=LOGO&w=180&h=40",
    alt: "LOGO"
  }))), _react.default.createElement(_headerTitles.HeaderTitles, {
    title: "Title",
    subtitle: "Lorem ipsum\u2026"
  })), _react.default.createElement(_header.HeaderItems, {
    fixedSize: "true"
  }, _react.default.createElement(_header.HeaderItem, {
    className: "k-Header__signup"
  }, _react.default.createElement("a", {
    href: "#",
    className: (0, _classnames.default)('k-Button', 'k-Button--hydrogen', 'k-Header__button')
  }, "S'identifier"))));
}; // Header platform switch common props


exports.KarlHeaderWithTitles = KarlHeaderWithTitles;
var platformSwitchDropdownList = [_react.default.createElement(_externalRichLink.ExternalRichLink, {
  className: "k-PlatformSwitch__item",
  title: "Se rendre sur le site de KissKissBankBank"
}, _react.default.createElement("img", {
  className: "k-ExternalRichLink__image",
  src: "/assets/images/brand/kisskissbankbank.svg",
  alt: "Logo de KissKissBankBank"
})), _react.default.createElement(_externalRichLink.ExternalRichLink, {
  className: "k-PlatformSwitch__item",
  title: "Se rendre sur le site de hellomerci"
}, _react.default.createElement("img", {
  className: "k-ExternalRichLink__image",
  src: "/assets/images/brand/hellomerci.svg",
  alt: "Logo de hellomerci"
})), _react.default.createElement(_externalRichLink.ExternalRichLink, {
  className: "k-PlatformSwitch__item",
  title: "Se rendre sur le site de LENDOPOLIS"
}, _react.default.createElement("img", {
  className: "k-ExternalRichLink__image",
  src: "/assets/images/brand/lendopolis.svg",
  alt: "Logo de LENDOPOLIS"
}))];

var unloggedHeaderPlatformSwitchButton = _react.default.createElement("svg", {
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

var platformSwitchProps = {
  positionedWithBorder: true,
  buttonId: 'k-PlatformSwitch',
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--dropdown ' + 'k-Dropdown__button--rotationOnExpanded',
  buttonContentOnExpanded: unloggedHeaderPlatformSwitchButton,
  buttonContentOnCollapsed: unloggedHeaderPlatformSwitchButton,
  refreshEvents: ['resize', 'karl:element#header:classToggled'],
  dropdownListClassName: 'k-PlatformSwitch k-PlatformSwitch--withoutBorderTop',
  dropdownContent: _react.default.createElement(_navList.NavList, {
    className: (0, _classnames.default)('k-PlatformSwitch', 'k-PlatformSwitch--withoutBorderTop'),
    role: "menubar",
    list: platformSwitchDropdownList
  }),
  onToggle: function onToggle() {
    // Example event to trigger
    var event = document.createEvent('Event');
    event.initEvent('karl:platformSwitch:toggle', true, true);
    window.dispatchEvent(event);
  } // Unlogged header dropdown

};
var unloggedPlatformSwitchProps = (0, _assign.default)({
  positionedWith: function positionedWith() {
    return document.getElementById('header');
  }
}, platformSwitchProps);
var KarlUnloggedHeaderPlatformSwitch = (0, _defaultProps.defaultProps)(_dropdown.Dropdown, unloggedPlatformSwitchProps); // Logged header dropdowns

exports.KarlUnloggedHeaderPlatformSwitch = KarlUnloggedHeaderPlatformSwitch;
var loggedPlatformSwitchProps = (0, _assign.default)({
  positionedWith: function positionedWith() {
    return document.getElementById('header-logged');
  }
}, platformSwitchProps);
var KarlLoggedHeaderPlatformSwitch = (0, _defaultProps.defaultProps)(_dropdown.Dropdown, loggedPlatformSwitchProps);
exports.KarlLoggedHeaderPlatformSwitch = KarlLoggedHeaderPlatformSwitch;
var userMenuDropdownList = [_react.default.createElement("a", {
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
}, "D\xE9connexion")];
var KarlLoggedHeaderUserMenu = (0, _defaultProps.defaultProps)(_userMenu.UserMenu, {
  // Position
  positionedWith: function positionedWith() {
    return document.getElementById('header-logged');
  },
  positionedWithBorder: true,
  positionedOn: 'right',
  spaceAroundGrid: 20,
  // Button
  buttonId: 'k-UserMenu',
  buttonImgSrc: 'https://placehold.it/200x200/caf4fe/caf4fe',
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
  }, "D\xE9connexion")],
  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled']
}); // Phone dropdown.

exports.KarlLoggedHeaderUserMenu = KarlLoggedHeaderUserMenu;
var KarlPhoneDropdown = (0, _defaultProps.defaultProps)(_phoneDropdown.PhoneDropdown, {
  // Position
  positionedWith: function positionedWith() {
    return document.getElementById('header-logged');
  },
  // Content
  dropdownContent: _react.default.createElement("div", {
    className: "k-PhoneDropdown k-Dropdown__content--large"
  }, _react.default.createElement("p", {
    className: (0, _classnames.default)('k-PhoneDropdown__text', 'k-u-size-micro', 'k-u-weight-regular')
  }, "Vous avez une question\xA0?"), _react.default.createElement("p", {
    className: "k-PhoneDropdown__text"
  }, "Notre \xE9quipe vous r\xE9pond au\xA0: ", _react.default.createElement("br", null), _react.default.createElement("strong", {
    className: "k-u-weight-regular"
  }, _react.default.createElement("a", {
    className: "k-PhoneDropdown__link",
    href: "tel:+33972324942"
  }, "09 72 32 49 42")))),
  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled']
});
exports.KarlPhoneDropdown = KarlPhoneDropdown;