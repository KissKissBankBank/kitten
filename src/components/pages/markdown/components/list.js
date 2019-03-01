"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownList = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bulletList = require("../../../lists/bullet-list");

var _marger = require("../../../layout/marger");

var BulletListStyle = (0, _styledComponents.default)(_bulletList.BulletList).withConfig({
  displayName: "list__BulletListStyle",
  componentId: "sc-1hya2vn-0"
})(["li{line-height:1.8rem;}"]);

var MarkdownList = function MarkdownList(props) {
  var items = props.children.map(function (item) {
    return {
      key: item.key,
      item: item.props.children[0]
    };
  });
  return _react.default.createElement(_marger.Marger, {
    top: "3",
    bottom: "3"
  }, _react.default.createElement(BulletListStyle, {
    big: true,
    items: items
  }));
};

exports.MarkdownList = MarkdownList;