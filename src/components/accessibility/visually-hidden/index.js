"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VisuallyHidden = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var StyledElement = _styledComponents.default.span.withConfig({
  displayName: "visually-hidden__StyledElement",
  componentId: "sc-3bas83-0"
})(["&:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(100%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"]);

var VisuallyHidden = function VisuallyHidden(_ref) {
  var props = (0, _extends2.default)({}, _ref);
  return /*#__PURE__*/_react.default.createElement(StyledElement, props);
};

exports.VisuallyHidden = VisuallyHidden;