"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlLinkListItemsLight = exports.KarlLinkListDark = exports.KarlLinkListSelectedItem = exports.KarlLinkList = void 0;

var _react = _interopRequireDefault(require("react"));

var _linkList = require("kitten/components/links/link-list");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlLinkList = function KarlLinkList() {
  var linkListItems = [{
    key: 'key1',
    item: 'Litterae',
    href: '#'
  }, {
    key: 'key2',
    item: 'Notae',
    href: '#'
  }, {
    key: 'key3',
    item: 'Bibliographia',
    href: '#'
  }, {
    key: 'key4',
    item: 'Nexus',
    href: '#'
  }];
  return _react.default.createElement(_linkList.LinkList, {
    items: linkListItems
  });
};

exports.KarlLinkList = KarlLinkList;

var KarlLinkListSelectedItem = function KarlLinkListSelectedItem() {
  var linkListSelectedItem = [{
    key: 'key1',
    item: 'Litterae',
    href: '#'
  }, {
    key: 'key2',
    item: 'Notae',
    href: '#'
  }, {
    key: 'key3',
    item: 'Bibliographia',
    href: '#',
    active: true
  }, {
    key: 'key4',
    item: 'Nexus',
    href: '#'
  }];
  return _react.default.createElement(_linkList.LinkList, {
    items: linkListSelectedItem
  });
};

exports.KarlLinkListSelectedItem = KarlLinkListSelectedItem;

var KarlLinkListDark = function KarlLinkListDark() {
  var linkListItems = [{
    key: 'key1',
    item: 'Litterae',
    href: '#'
  }, {
    key: 'key2',
    item: 'Notae',
    href: '#',
    active: true
  }, {
    key: 'key3',
    item: 'Bibliographia',
    href: '#'
  }, {
    key: 'key4',
    item: 'Nexus',
    href: '#'
  }];
  return _react.default.createElement(_linkList.LinkList, {
    style: {
      backgroundColor: '#222'
    },
    color: "light",
    items: linkListItems
  });
};

exports.KarlLinkListDark = KarlLinkListDark;

var KarlLinkListItemsLight = function KarlLinkListItemsLight() {
  var linkListItemsLight = [{
    key: 'key1',
    item: 'Litterae',
    href: '#',
    weight: 'light'
  }, {
    key: 'key2',
    item: 'Notae',
    href: '#',
    weight: 'light'
  }, {
    key: 'key3',
    item: 'Bibliographia',
    href: '#',
    active: true
  }, {
    key: 'key4',
    item: 'Nexus',
    href: '#'
  }];
  return _react.default.createElement(_linkList.LinkList, {
    items: linkListItemsLight
  });
};

exports.KarlLinkListItemsLight = KarlLinkListItemsLight;