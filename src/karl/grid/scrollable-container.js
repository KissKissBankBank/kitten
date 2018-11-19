"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlScrollableContainer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _navList = require("kitten/components/lists/nav-list");

var _tagButton = require("kitten/components/buttons/tag-button");

var _scrollableContainer = require("kitten/components/grid/scrollable-container");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var items = [{
  key: '1',
  children: 'Example 1',
  href: '#example-1'
}, {
  key: '2',
  children: 'Example 2',
  href: '#example-2'
}, {
  key: '3',
  children: 'Example 3',
  href: '#example-3',
  selected: true
}, {
  key: '4',
  children: 'Example 4',
  href: '#example-4'
}, {
  key: '5',
  children: 'Example 5',
  href: '#example-5'
}];

var KarlScrollableContainer = function KarlScrollableContainer(props) {
  return _react.default.createElement(_scrollableContainer.ScrollableContainer, null, _react.default.createElement("nav", null, _react.default.createElement("ul", {
    style: styles.list
  }, items.map(function (item) {
    return _react.default.createElement("li", {
      key: item.key,
      style: styles.item
    }, _react.default.createElement(_tagButton.TagButton, _extends({}, item, {
      modifier: "carbon",
      style: styles.item
    })));
  }))));
};

exports.KarlScrollableContainer = KarlScrollableContainer;
var styles = {
  list: {
    display: 'flex',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: '0 20px'
  },
  item: {
    flex: '0 0 auto'
  }
};