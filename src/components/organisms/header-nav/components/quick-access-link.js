"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.QuickAccessLink = void 0;

require("core-js/modules/es.object.assign.js");

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _excluded = ["text", "href", "zIndex", "style", "className"];

var QuickAccessLink = function QuickAccessLink(_ref) {
  var text = _ref.text,
      href = _ref.href,
      zIndex = _ref.zIndex,
      style = _ref.style,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({}, props, {
    href: href,
    className: (0, _classnames.default)('k-HeaderNav__QuickAccessLink', className),
    style: Object.assign({}, style, {
      '--HeaderNav_quickAccessLink_zIndex': zIndex
    })
  }), text);
};

exports.QuickAccessLink = QuickAccessLink;
QuickAccessLink.propTypes = {
  text: _propTypes.default.node,
  href: _propTypes.default.string,
  zIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
QuickAccessLink.defaultProps = {
  text: 'Aller au contenu',
  href: '#main',
  zIndex: 2
};