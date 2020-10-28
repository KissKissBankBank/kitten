"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ResponsiveIframeContainer = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var ResponsiveIframeContainer = function ResponsiveIframeContainer(_ref) {
  var ratio = _ref.ratio,
      style = _ref.style,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["ratio", "style", "className"]);
  var componentClassName = (0, _classnames.default)('k-ResponsiveIframeContainer', className);
  var styles = (0, _extends2.default)({}, style, {
    paddingBottom: "".concat(ratio, "%")
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: componentClassName,
    style: styles
  }, props));
};

exports.ResponsiveIframeContainer = ResponsiveIframeContainer;
ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: /*#__PURE__*/_react.default.createElement("iframe", null)
};