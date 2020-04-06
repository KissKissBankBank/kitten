"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = require("./header");

var _content = require("./content");

var _reactElements = require("../../../helpers/react/react-elements");

var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id;
  var header = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: _header.Header
  });
  var content = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: _content.Content
  });
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, header[0] && _react.default.cloneElement(header[0], {
    id: id
  }), content[0] && _react.default.cloneElement(content[0], {
    id: id
  }));
};

exports.Item = Item;
Item.propTypes = {
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
};
Item.defaultProps = {
  id: null
};