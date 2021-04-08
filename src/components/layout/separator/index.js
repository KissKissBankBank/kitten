"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Separator = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var Separator = (0, _styledComponents.default)(function (_ref) {
  var darker = _ref.darker,
      className = _ref.className,
      props = (0, _objectWithoutProperties2.default)(_ref, ["darker", "className"]);
  var separatorClassName = (0, _classnames.default)('k-Separator', {
    'k-Separator--darker': darker
  }, className);
  return /*#__PURE__*/_react.default.createElement("hr", (0, _extends2.default)({
    className: separatorClassName
  }, props));
}).withConfig({
  displayName: "separator__Separator",
  componentId: "sc-1dgi38g-0"
})(["&.k-Separator{margin:0;border:none;background:", ";height:", ";}&.k-Separator--darker{background:", ";}"], _colorsConfig.default.line1, (0, _typography.pxToRem)(1), _colorsConfig.default.line2);
exports.Separator = Separator;
Separator.propTypes = {
  darker: _propTypes.default.bool
};
Separator.defaultProps = {
  className: null,
  darker: false
};