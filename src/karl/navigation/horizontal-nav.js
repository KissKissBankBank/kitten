"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlTouchHorizontalNavWithNotification = exports.KarlTouchHorizontalNav = exports.KarlHorizontalNav = void 0;

var _react = _interopRequireWildcard(require("react"));

var _horizontalNav = require("kitten/components/navigation/horizontal-nav");

var _row = require("kitten/components/grid/row");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var KarlHorizontalNav = function KarlHorizontalNav(props) {
  var horizontalNavItems = [{
    key: 'key1',
    text: 'Nav link 1',
    href: '#',
    selected: true
  }, {
    key: 'key2',
    text: 'Nav link 2',
    href: '#'
  }, {
    key: 'key3',
    text: 'Nav link 3',
    href: '#'
  }, {
    key: 'key4',
    text: 'Nav link 4',
    href: '#'
  }];
  return _react.default.createElement(_horizontalNav.HorizontalNav, {
    items: horizontalNavItems
  });
};

exports.KarlHorizontalNav = KarlHorizontalNav;

var KarlTouchHorizontalNav = function KarlTouchHorizontalNav(props) {
  var rowStyles = {
    backgroundColor: _colorsConfig.default.background3
  };
  var horizontalNavItems = [{
    key: 'key1',
    text: 'Projet d’entreprise',
    href: '#',
    selected: true
  }, {
    key: 'key2',
    text: 'Énergies renouvelables',
    href: '#'
  }, {
    key: 'key3',
    text: 'Immobilier',
    href: '#'
  }];
  return _react.default.createElement(_row.Row, {
    style: rowStyles
  }, _react.default.createElement(_horizontalNav.HorizontalNav, {
    items: horizontalNavItems,
    height: "96px",
    center: true
  }));
};

exports.KarlTouchHorizontalNav = KarlTouchHorizontalNav;

var KarlTouchHorizontalNavWithNotification = function KarlTouchHorizontalNavWithNotification(props) {
  var rowStyles = {
    backgroundColor: _colorsConfig.default.background3
  };
  var horizontalNavItems = [{
    key: 'key1',
    text: 'Projet d’entreprise',
    href: '#',
    selected: true,
    badge: 3
  }, {
    key: 'key2',
    text: 'Énergies renouvelables',
    href: '#',
    badge: 2
  }, {
    key: 'key3',
    text: 'Immobilier',
    href: '#',
    badge: 10
  }];
  return _react.default.createElement(_row.Row, {
    style: rowStyles
  }, _react.default.createElement(_horizontalNav.HorizontalNav, {
    items: horizontalNavItems,
    height: "96px",
    center: true
  }));
};

exports.KarlTouchHorizontalNavWithNotification = KarlTouchHorizontalNavWithNotification;