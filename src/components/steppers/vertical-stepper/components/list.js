"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

var StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1m61gol-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;", ""], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles.light, (0, _typography.pxToRem)(12), function (_ref) {
  var error = _ref.error;
  return error && (0, _styledComponents.css)(["", ";color:", ";"], _typographyConfig.default.fontStyles.regular, _colorsConfig.default.error);
});

var StyledItem = _styledComponents.default.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1m61gol-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8));

var List = function List(_ref2) {
  var props = (0, _extends2.default)({}, _ref2);
  return /*#__PURE__*/_react.default.createElement(StyledList, props);
};

exports.List = List;
List.Item = StyledItem;
List.propTypes = {
  error: _propTypes.default.bool
};
List.defaultProps = {
  error: false
};