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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledWrapper = _styledComponents.default.div.withConfig({
  displayName: "responsive-iframe-container__StyledWrapper",
  componentId: "sc-8f8y4r-0"
})(["position:relative;overflow:hidden;padding-bottom:67.5%;padding-bottom:var(--ResponsiveImageContainer-ratio);height:0;> *{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;}"]);

var ResponsiveIframeContainer = function ResponsiveIframeContainer(_ref) {
  var ratio = _ref.ratio,
      style = _ref.style,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["ratio", "style", "className"]);
  return /*#__PURE__*/_react.default.createElement(StyledWrapper, (0, _extends2.default)({
    className: (0, _classnames.default)('k-ResponsiveIframeContainer', className),
    style: (0, _extends2.default)({}, style, {
      '--ResponsiveImageContainer-ratio': "".concat(ratio, "%")
    })
  }, props));
};

exports.ResponsiveIframeContainer = ResponsiveIframeContainer;
ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: /*#__PURE__*/_react.default.createElement("iframe", null)
};