"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Item = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = require("./header");

var _content = require("./content");

var _reactElements = require("../../../../../helpers/react/react-elements");

var _classnames = _interopRequireDefault(require("classnames"));

var Item = function Item(_ref) {
  var children = _ref.children,
      id = _ref.id,
      index = _ref.index,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "id", "index", "className"]);
  var header = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: _header.Header
  });
  var content = (0, _reactElements.getReactElementsByType)({
    children: children,
    type: _content.Content
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)('k-Accordeon__item', className)
  }, props), header[0] && _react.default.cloneElement(header[0], {
    id: id,
    index: index
  }), content[0] && _react.default.cloneElement(content[0], {
    id: id,
    index: index
  }));
};

exports.Item = Item;
Item.propTypes = {
  id: _propTypes.default.string
};
Item.defaultProps = {
  id: null
};