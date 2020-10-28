"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkdownList = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _bulletList = require("../../../lists/bullet-list");

var _marger = require("../../../layout/marger");

var _context = require("./context");

var BulletListStyle = (0, _styledComponents.default)(_bulletList.BulletList).withConfig({
  displayName: "list__BulletListStyle",
  componentId: "sc-1hya2vn-0"
})(["li{line-height:1.8em;}"]);

var MarkdownList = function MarkdownList(props) {
  var items = props.children.map(function (item) {
    return {
      key: item.key,
      item: item.props.children[0]
    };
  });
  return /*#__PURE__*/_react.default.createElement(_context.Context.Consumer, null, function (_ref) {
    var paragraphModifier = _ref.paragraphModifier;
    var modifier = {};

    if (paragraphModifier === 'primary') {
      modifier = {
        huge: true
      };
    } else if (paragraphModifier === 'secondary') {
      modifier = {
        big: true
      };
    } else if (paragraphModifier === 'tertiary') {
      modifier = {
        large: true
      };
    } else if (paragraphModifier === 'quaternary') {
      modifier = {
        small: true
      };
    }

    return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
      top: "3",
      bottom: "3"
    }, /*#__PURE__*/_react.default.createElement(BulletListStyle, (0, _extends2.default)({}, modifier, {
      items: items
    })));
  });
};

exports.MarkdownList = MarkdownList;