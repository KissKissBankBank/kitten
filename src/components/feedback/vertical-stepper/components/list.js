"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.List = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typography = require("../../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../../constants/colors-config"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledList = _styledComponents.default.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1rzzvwx-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;", ""], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(10), _typographyConfig.default.fontStyles['400'], (0, _typography.pxToRem)(12), _ref => {
  let {
    error
  } = _ref;
  return error && (0, _styledComponents.css)(["", ";color:", ";"], _typographyConfig.default.fontStyles['500'], _colorsConfig.default.error);
});

const StyledItem = _styledComponents.default.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1rzzvwx-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(8));

const List = _ref2 => {
  let { ...props
  } = _ref2;
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