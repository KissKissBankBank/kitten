"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlTagList = void 0;

var _react = _interopRequireDefault(require("react"));

var _tagList = require("kitten/components/lists/tag-list");

var _typologyTagIcon = require("kitten/components/icons/typology-tag-icon");

var _instrumentTagIcon = require("kitten/components/icons/instrument-tag-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KarlTagList = function KarlTagList(props) {
  var typologyItems = [{
    key: 'tag-1',
    item: 'Tag 1'
  }, {
    key: 'tag-2',
    item: 'Tag 2'
  }, {
    key: 'tag-3',
    item: 'Tag 3'
  }];
  var instrumentItems = [{
    key: 'tag-4',
    item: 'Tag 4'
  }, {
    key: 'tag-5',
    item: 'Tag 5'
  }, {
    key: 'tag-6',
    item: 'Tag 6'
  }];
  return _react.default.createElement("div", null, _react.default.createElement(_tagList.TagList, {
    items: typologyItems
  }), _react.default.createElement(_tagList.TagList, {
    icon: _typologyTagIcon.TypologyTagIcon,
    items: typologyItems
  }), _react.default.createElement(_tagList.TagList, {
    icon: _instrumentTagIcon.InstrumentTagIcon,
    items: instrumentItems
  }));
};

exports.KarlTagList = KarlTagList;